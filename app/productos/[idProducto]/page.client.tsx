'use client'
import React, { useEffect, useMemo, useState } from 'react'

import type { Product } from '@/core/domain/entities/Product'
import { useGetProducts } from '@/hooks/products/useGetProducts'
import Breadcrumb from '@/ui/components/Breadcrumb/Breadcrum'

import ProductoSolo from './components/ProductoSolo/ProductoSolo'

type Props = {
  params: { idProducto: string }
}

const PageClient = ({ params }: Props): React.JSX.Element => {
  const { data: products = [], isLoading } = useGetProducts()

  const [product, setProduct] = useState<Product | null>()

  const customLabels: Record<string, string> = useMemo(() => {
    const path = `/productos/${params.idProducto}`
    return product ? { [path]: product.nombre } : {}
  }, [product, params.idProducto])

  useEffect(() => {
    if (!products || products.length === 0) return
    const found = products.find(p => String(p.id) === String(params.idProducto)) ?? null
    setProduct(found)
  }, [products, params.idProducto])

  return (
    <div className="content">
      <Breadcrumb customLabels={customLabels} />

      <div>
        {isLoading ? (
          <div className="text-center text-gray-500 text-lg">Cargando…</div>
        ) : !product ? (
          <div className="text-center text-red-500 text-lg">Producto no encontrado.</div>
        ) : (
          <ProductoSolo data={product} />
        )}

        <div className="flex items-center justify-between my-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
            PRODUCTOS RELACIONADOS
          </h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-6 py-1 rounded-full transition-colors duration-200">
            <p>Ver todos</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageClient
