'use client'
import React, { useEffect, useMemo, useState } from 'react'

import { useGetProducts } from '@/hooks/products/useGetProducts'
import Breadcrumb from '@/ui/components/Breadcrumb/Breadcrum'

import ProductoSolo from './components/ProductoSolo/ProductoSolo'

type Props = {
  params: { idProducto: string }
}

const PageClient = ({ params }: Props) => {
  const { data: products, isLoading } = useGetProducts()
  const [product, setProduct] = useState(null)

  /* const related = (product ? products.filter(p => p.id !== product.id) : []).slice(0, 8) */

  const customLabels = useMemo(() => {
    const path = `/productos/${params.idProducto}`
    return product ? { [path]: product.nombre } : {}
  }, [product, params.idProducto])

  useEffect(() => {
    if (products) {
      const product = products.find(p => String(p.id) === String(params.idProducto))
      setProduct(product)
    }
  }, [products])

  return (
    <div className="content">
      <Breadcrumb customLabels={customLabels} />
      <div>
        {!product ? (
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

        {/*         <div className="flex overflow-x-auto space-x-6 md:space-x-8 pb-4 scrollbar-hide">
          {(related.length ? related : Array(8).fill(product)).map((rp, i) => (
            <div key={i} className="flex-shrink-0 w-60 sm:w-72 md:w-80">
              <SeeProduct product={rp} />
            </div>
          ))}
          {!related.length && (
            <div className="text-center text-gray-500 w-full">
              No hay productos relacionados disponibles.
            </div>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default PageClient
