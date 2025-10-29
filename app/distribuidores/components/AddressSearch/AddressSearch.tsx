'use client'

import { Autocomplete, LoadScript } from '@react-google-maps/api'
import React, { useRef, useState } from 'react'

type LatLng = { lat: number; lng: number }

interface Props {
  googleApiKey: string
  onPlace: (coords: LatLng) => void
}

export default function AddressSearch({ googleApiKey, onPlace }: Props): JSX.Element {
  const [input, setInput] = useState('')
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)

  const handleLoad = (ac: google.maps.places.Autocomplete) => {
    autocompleteRef.current = ac
  }

  const handlePlaceChanged = (): void => {
    const ac = autocompleteRef.current
    if (!ac) return
    const place = ac.getPlace()
    const loc = place?.geometry?.location
    if (loc) {
      onPlace({ lat: loc.lat(), lng: loc.lng() })
    }
  }

  return (
    <LoadScript googleMapsApiKey={googleApiKey} libraries={['places']}>
      <div className="bg-green text-white font-bold text-center py-2 uppercase rounded-t">
        Ingresa tu dirección
      </div>
      <div className="flex items-center border rounded-b-md p-2 bg-white shadow">
        <span className="text-green mr-2">🏠</span>
        <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Escribe tu dirección aquí"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green"
          />
        </Autocomplete>
      </div>
    </LoadScript>
  )
}
