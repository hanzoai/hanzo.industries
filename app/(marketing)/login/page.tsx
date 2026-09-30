import type { Metadata } from 'next'
import PageClient from '../auth/_client'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to Hanzo on hanzo.ai.',
}

export default function Page() {
  return <PageClient />
}
