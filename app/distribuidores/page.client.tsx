'use client'

import React, { useEffect, useMemo, useState } from 'react'

import type { Category } from '@/core/domain/entities/Category'
import type { DistributorsLocationRow } from '@/core/domain/entities/Distributor'
import { Product } from '@/core/domain/entities/Product'
import { useCategoriesStore } from '@/stores/categoryStore'
import { useDistributorsStore } from '@/stores/distribuidoresStore'

import AddressSearch from './components/AddressSearch/AddressSearch'
import DistributorMap from './components/DistributorMap/DistributorMap'
import ProductMultiSelect from './components/ProductMultiSelect/ProductMultiSelect'

type LatLng = { lat: number; lng: number }

const LIMA_CENTER: LatLng = { lat: -12.0464, lng: -77.0428 }

interface PageClientProps {
  googleApiKey: string
}

export default function PageClient({ googleApiKey }: PageClientProps): React.JSX.Element {
  // Zustand
  const distribuidoresStore = useDistributorsStore(s => s.distributors) as DistributorsLocationRow[]
  const categoriesStore = useCategoriesStore(s => s.categories)

  // Estado UI
  const [mapCenter, setMapCenter] = useState<LatLng>(LIMA_CENTER)
  const [userLocation, setUserLocation] = useState<LatLng | null>(null)
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  // Geolocalización (no bloqueante)
  useEffect(() => {
    if (!navigator?.geolocation) return
    navigator.permissions?.query({ name: 'geolocation' as PermissionName }).then(res => {
      if (res.state === 'granted' || res.state === 'prompt') {
        navigator.geolocation.getCurrentPosition(
          pos => {
            const next = { lat: pos.coords.latitude, lng: pos.coords.longitude }
            setUserLocation(next)
            setMapCenter(next)
          },
          // eslint-disable-next-line no-console
          err => console.error('Error obteniendo ubicación:', err),
          { enableHighAccuracy: true, maximumAge: 30_000, timeout: 10_000 }
        )
      }
    })
  }, [])

  // Opciones del Select (agrupadas por categoría)
  const productOptions = useMemo(
    () =>
      categoriesStore?.map((cat: Category) => ({
        label: cat.categoryName,
        key: cat.id,
        options: (cat.products || []).map((p: Product) => ({
          label: p.nombre,
          value: p.id,
          key: p.id
        }))
      })),
    [categoriesStore]
  )

  // Filtro por productos seleccionados
  const filteredDistribuidores = useMemo(() => {
    if (!selectedProducts.length) return distribuidoresStore
    return distribuidoresStore.filter(d => d.products?.some(p => selectedProducts.includes(p.id)))
  }, [distribuidoresStore, selectedProducts])

  return (
    <div className="content">
      {/* Búsqueda + filtros */}
      <div className="w-full max-w-3xl mx-auto mt-8 grid gap-3">
        <AddressSearch
          googleApiKey={googleApiKey}
          onPlace={coords => {
            setUserLocation(coords)
            setMapCenter(coords)
          }}
        />

        <ProductMultiSelect
          value={selectedProducts}
          onChange={setSelectedProducts}
          options={productOptions}
        />
      </div>

      <div className="content mt-5">
        <DistributorMap
          googleApiKey={googleApiKey}
          center={mapCenter}
          userLocation={userLocation}
          distribuidores={filteredDistribuidores}
        />
      </div>
    </div>
  )
}
