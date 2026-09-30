'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { startTags, track } from '@hanzo/event'
import { AnalyticsProvider, useAnalytics, useConsent, usePageview } from '@hanzo/event/react'

/** The ONE Hanzo Cloud telemetry front door — POST api.hanzo.ai/v1/event. Cloud
 *  fans the one batched stream out to the web (analytics), product (insights) and
 *  error (sentry) lenses; the client never sends the org — Cloud resolves the
 *  tenant server-side from the publishable ingest key. */
const HOST = 'https://api.hanzo.ai'

/** Publishable ingest key: write-only, public by design, and REQUIRED for
 *  anonymous traffic — without it every pageview is answered 401
 *  ingest_key_required. It also names this site's tag set (GA4, the Pixel) at
 *  GET /v1/project/tags. */
const KEY = 'pk-CmfLA2K6kvsPflrS9DSkt06H_kSoQB_21sjedt6VJdc'

/** The sites one visit can cross; GA4 keeps it one session across them. */
const DOMAINS = ['hanzo.industries', 'hanzo.ai', 'pay.hanzo.ai', 'cal.hanzo.ai']

/** The funnel moment a click to one of these hosts is (@hanzo/events names). */
const INTENT: Record<string, string> = {
  'cal.hanzo.ai': 'sales_contacted',
}

/**
 * ONE analytics client. `@hanzo/ui` depends on `@hanzogui/telemetry`, whose
 * `track` builds an ambient, unkeyed client the first time a shared component
 * reports an interaction, with pageviews on: a second `$pageview` per load,
 * answered 401. Module scope, because that client is built on first use during
 * render.
 */
if (typeof globalThis !== 'undefined') {
  const g = globalThis as { __HANZO_TELEMETRY__?: { enabled?: boolean } }
  g.__HANZO_TELEMETRY__ = { ...g.__HANZO_TELEMETRY__, enabled: false }
}

function Pageview() {
  usePageview(usePathname())
  return null
}

/**
 * The ad tags and the cross-site journey. `startTags` fetches this site's tag
 * set and loads only what consent allows, again on every consent change; no
 * tag id lives in this repo. A link to another Hanzo host carries the visitor
 * (@hanzo/event `link`), and a click to the sales calendar is a funnel moment.
 */
function Tags() {
  const stream = useAnalytics()
  const live = useRef(stream)
  live.current = stream
  useEffect(() => startTags({ key: KEY, host: window.location.hostname, domains: DOMAINS }), [])
  useEffect(() => {
    const carry = (e: Event) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (a) a.href = live.current.link(a.href)
    }
    const click = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      const name = a && INTENT[new URL(a.href, window.location.href).host]
      if (name) track(live.current, name, { link_url: a.href, page_path: window.location.pathname })
    }
    const on = ['pointerdown', 'click', 'contextmenu', 'keydown'] as const
    on.forEach((t) => document.addEventListener(t, carry, { capture: true }))
    document.addEventListener('click', click, { capture: true })
    return () => {
      on.forEach((t) => document.removeEventListener(t, carry, { capture: true }))
      document.removeEventListener('click', click, { capture: true })
    }
  }, [])
  return null
}

/**
 * Telemetry root. The provider owns the ONE @hanzo/event client: it fires the
 * first pageview, registers auto error capture (window.onerror +
 * unhandledrejection) and flushes on unload; <Pageview> adds one per client-side
 * route change. The stream runs while the visitor's consent allows Analytics.
 */
export function Analytics({ children }: { children: React.ReactNode }) {
  const consent = useConsent()
  return (
    <AnalyticsProvider config={{ product: 'hanzo-industries', host: HOST, ingestKey: KEY, enabled: consent.analytics }}>
      <Pageview />
      <Tags />
      {children}
    </AnalyticsProvider>
  )
}
