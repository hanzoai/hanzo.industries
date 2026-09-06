import { chromium } from '@playwright/test'
const BASE = 'http://localhost:' + process.env.P

const srgb = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4 }
const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b)
const parse = (s) => (s.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number)
const ratio = (f, bg) => { const [a, z] = [lum(parse(f)), lum(parse(bg))].sort((x, y) => y - x); return ((a + 0.05) / (z + 0.05)).toFixed(2) }

const READ = () => {
  const cd = getComputedStyle(document.documentElement)
  const cb = getComputedStyle(document.body)
  const pick = (sel) => {
    const e = [...document.querySelectorAll(sel)].filter((x) => x.getClientRects().length)[0]
    if (!e) return null
    const cs = getComputedStyle(e)
    return { label: (e.innerText || e.tagName).trim().slice(0, 18), bg: cs.backgroundColor, fg: cs.color, border: cs.borderTopColor, h: Math.round(e.getBoundingClientRect().height) }
  }
  return {
    htmlClass: document.documentElement.className || '(none)',
    bodyBg: cb.backgroundColor, bodyFg: cb.color,
    page: cd.getPropertyValue('--page').trim(),
    background: cd.getPropertyValue('--background').trim(),
    foreground: cd.getPropertyValue('--foreground').trim(),
    button: pick('[data-slot="button"]'),
    trigger: pick('[data-slot="select-trigger"]'),
    card: pick('.hz-card, .hz-bg-surface'),
  }
}

const b = await chromium.launch()
for (const theme of ['dark', 'light']) {
  for (const js of [false, true]) {
    const ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: js })
    if (js) await ctx.addInitScript((t) => localStorage.setItem('theme', t), theme)
    const p = await ctx.newPage()
    // /contact has a Select; / has Buttons
    for (const path of ['/', '/contact']) {
      await p.goto(BASE + path, { waitUntil: js ? 'networkidle' : 'load' })
      await p.waitForTimeout(js ? 400 : 150)
      const m = await p.evaluate(READ)
      const tag = `${theme.padEnd(5)} js=${String(js).padEnd(5)} ${path.padEnd(9)}`
      console.log(`${tag} html.class="${m.htmlClass}"`)
      console.log(`${' '.repeat(tag.length)} body   ${m.bodyBg} / ${m.bodyFg}   ${ratio(m.bodyFg, m.bodyBg)}:1`)
      console.log(`${' '.repeat(tag.length)} vars   --page=${m.page}  --background=${m.background}  --foreground=${m.foreground}`)
      for (const k of ['button', 'trigger', 'card']) {
        const c = m[k]
        console.log(`${' '.repeat(tag.length)} ${k.padEnd(7)}${c ? `${c.bg} / ${c.fg}  border=${c.border}  h=${c.h}  ${ratio(c.fg, c.bg)}:1  "${c.label}"` : '(not present)'}`)
      }
    }
    await ctx.close()
  }
}
await b.close()
