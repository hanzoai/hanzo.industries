import type { Metadata, Viewport } from 'next'
import site from '@/site.config'
import { Providers } from './providers'
import './globals.css'

// Geist Sans and Geist Mono arrive self-hosted with @hanzo/design (globals.css),
// so there is no build-time fetch from fonts.googleapis.com and no second place
// the site's typeface is named.

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: {
    template: site.seo.titleTemplate,
    default: site.seo.defaultTitle,
  },
  description: site.brand.description,
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.seo.defaultTitle }],
    siteName: site.brand.tagline,
    type: 'website',
    url: site.brand.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.brand.name,
    description: site.brand.description,
    images: ['/opengraph-image'],
  },
  icons: { icon: site.seo.faviconPath },
}

export const viewport: Viewport = {
  themeColor: site.seo.themeColor,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // next-themes writes `dark`/`light` pre-paint; @hanzo/gui writes `t_dark`/
    // `t_light` on mount, a frame later, and falls back to its light palette
    // when neither is named. Naming both makes the served frame already right;
    // a reader whose stored preference is light has them rewritten on mount.
    <html lang="en" className="dark t_dark" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
