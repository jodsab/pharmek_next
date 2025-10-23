'use client'
import './styles.scss'

import { Autocomplete, GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'
import { Select } from 'antd'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'

import WithNavbarAndFooter from '@/HOC/WithNavbarAndFooter'
import { useCategoriesStore } from '@/libs/store-categories'
import { useDistribuidoresSTore } from '@/libs/store-distribuidores'

const mapContainerStyle = {
  width: '100%',
  height: '600px'
}

const center = {
  lat: -12.0464, // Lima, Perú
  lng: -77.0428
}

const Distribuidores = () => {
  const [userLocation, setUserLocation] = useState(null)
  const [map, setMap] = useState(null)
  const [autocomplete, setAutocomplete] = useState(null)
  const [selectedProducts, setSelectedProducts] = useState([]) // This stores an array of product IDs (numbers)

  const distribuidoresStore = useDistribuidoresSTore(state => state.distribuidores)

  const categoriesStore = useCategoriesStore(state => state.categories)
  // console.log(categoriesStore); // You can keep this for debugging if needed

  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions?.query({ name: 'geolocation' }).then(result => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(
            position => {
              setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              })
            },
            error => console.error('Error obteniendo la ubicación:', error)
          )
        }
      })
    }
  }, [])

  const formattedOptions = useMemo(
    () =>
      categoriesStore.map(category => ({
        label: category.categoryName,
        key: category.id, // CLAVE para el grupo de categoría
        options: category.products.map(product => ({
          label: product.nombre,
          value: product.productId,
          key: product.productId // CLAVE para cada opción de producto
        }))
      })),
    [categoriesStore]
  )

  console.log(formattedOptions)

  const handlePlaceSelected = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace()
      if (place.geometry) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
        setUserLocation(newLocation)
        map.panTo(newLocation)
      }
    }
  }

  const filteredDistribuidores = useMemo(() => {
    if (selectedProducts.length === 0) return distribuidoresStore
    return distribuidoresStore.filter(
      dist =>
        // Ensure that 'dist.products' also contains objects with 'id' or 'productId'
        // that matches the 'selectedProducts' values.
        // Based on your previous Prisma setup for distributors,
        // you'll need to make sure distributor products also have a direct 'id' or 'productId'
        // if they are coming from a similar join table inclusion.
        dist.products.some(product => selectedProducts.includes(product.productId)) // Assuming distributor products also have 'productId'
    )
  }, [selectedProducts, distribuidoresStore])

  return (
    <WithNavbarAndFooter>
      <div className="content">
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={['places']}>
          <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceSelected}>
            <div className="w-full max-w-md mx-auto mt-8">
              <div className="bg-green text-white font-bold text-center py-2 uppercase">
                Ingresa tu dirección
              </div>
              <div className="flex items-center border rounded-md p-2 mt-2 bg-white shadow-lg">
                <div className="text-green flex-shrink-0">🏠</div>
                <input
                  type="text"
                  placeholder="Escribe tu dirección aquí"
                  className="flex-1 border border-gray-300 rounded-md ml-1 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green"
                />
              </div>

              <div className="flex items-center border rounded-md p-2 mt-2 bg-white shadow-lg">
                <div className="text-green mr-1 flex-shrink-0">💉</div>
                <Select
                  mode="multiple"
                  size="middle"
                  placeholder="Selecciona productos de interés"
                  value={selectedProducts}
                  onChange={setSelectedProducts}
                  style={{ width: '100%' }}
                  options={formattedOptions}
                  virtual={false} // <--- Deshabilita la virtualización
                />
              </div>
            </div>
          </Autocomplete>

          <div className="content mt-5">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={userLocation || center}
              zoom={12}
              onLoad={setMap}
            >
              {filteredDistribuidores.map(dist => (
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
                      href={dist.googleMapUrl}
                      target="_blank"
                      className="bg-green text-white px-2 py-1 rounded text-xs font-bold block w-24 text-center"
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
          </div>
        </LoadScript>
      </div>
    </WithNavbarAndFooter>
  )
}

export default Distribuidores
