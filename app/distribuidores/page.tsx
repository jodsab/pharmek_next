import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Distribuidores | Pharmek',
  description: 'Encuentra distribuidores oficiales por ubicación y productos.'
}

const PageClient = dynamic(() => import('./page.client'), { ssr: false })

export default function Page(): JSX.Element {
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || ''
  return <PageClient googleApiKey={googleApiKey} />
}
