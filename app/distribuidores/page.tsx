import PageClient from './page.client'

export default function DistribuidoresPage(): React.JSX.Element {
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  if (!googleApiKey) {
    throw new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY no está configurada')
  }

  return <PageClient googleApiKey={googleApiKey} />
}
