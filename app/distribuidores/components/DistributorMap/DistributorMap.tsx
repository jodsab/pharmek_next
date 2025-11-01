'use client'

import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'

type LatLng = { lat: number; lng: number }
type ProductRef = { productId: number }
type Distribuidor = {
  id: string | number
  latitude: number
  longitude: number
  googleMapUrl?: string
  distributor?: { name?: string }
  products: ProductRef[]
}

interface Props {
  googleApiKey: string
  center: LatLng
  userLocation: LatLng | null
  distribuidores: Distribuidor[]
}

const containerStyle = { width: '100%', height: '600px' }

export default function DistributorMap({
  googleApiKey,
  center,
  userLocation,
  distribuidores
}: Props): React.JSX.Element {
  // truco para evitar re-creaciones de objetos en render
  const mapCenter = useMemo(() => center, [center])
  const [map, setMap] = useState<google.maps.Map | null>(null)

  return (
    <LoadScript googleMapsApiKey={googleApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={12}
        onLoad={m => setMap(m)}
      >
        {distribuidores.map(dist => (
          <OverlayView
            key={dist.id}
            position={{ lat: dist.latitude, lng: dist.longitude }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                position: 'relative',
                textAlign: 'center',
                transform: 'translate(-50%, -100%)'
              }}
            >
              <Link
                href={dist.googleMapUrl || '#'}
                target="_blank"
                className="bg-green text-white px-2 py-1 rounded text-xs font-bold block w-28 text-center"
              >
                {dist.distributor?.name || 'Distribuidor'}
              </Link>
              <div className="mt-1">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#008556"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" />
                </svg>
              </div>
            </div>
          </OverlayView>
        ))}

        {userLocation && <Marker position={userLocation} title="Tu ubicación" />}
      </GoogleMap>
    </LoadScript>
  )
}
