/* eslint-disable prettier/prettier */
'use client'

import Anuncio from '@components/Anuncio'
import SeeProduct from '@components/SeeProduct'
import { AnimatePresence } from 'framer-motion'
import React, { JSX } from 'react'

import { useProductosViewModel } from '@/hooks/products/useProductsViewModel'
import Breadcrumb from '@/ui/components/Breadcrumb/Breadcrum'

import FilterSidebar from './components/FilterSidebar'

const ProductosClient = (): JSX.Element => {
  const {
    products,
    featuredProducts,
    categories,
    isLoading,
    loadingFeatured,
    // handleFilterChange, // <-- ELIMINADO
    showNoProducts
  } = useProductosViewModel()

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-xl text-gray-700 dark:text-gray-300">Cargando productos...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="content">
        <Breadcrumb />
        <h2 className="text-4xl md:text-4xl font-bold text-blue-dark dark:text-white mb-8 text-center md:text-left">
          Nuestros Productos
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-64 lg:w-75 flex-shrink-0">
            {/* YA NO SE NECESITA PASAR onFilterChange */}
            <FilterSidebar categories={categories} />
          </div>

          <div className="flex-1 flex justify-center md:block">
            {showNoProducts ? (
              <div className="text-center text-xl text-gray-600 dark:text-gray-400 py-8">
                No se encontraron productos que coincidan con los filtros seleccionados.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center mx-auto">
                <AnimatePresence mode="popLayout">
                  {products.map(product => (
                    <SeeProduct key={product.id} product={product} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full dark:bg-gray-800 my-10">
        <Anuncio
          title="Todo para el bienestar de tu mascota"
          subtitle="Asesoría experta, envíos rápidos y productos premium."
          features={[
            { text: 'Pagos seguros', color: 'green' },
            { text: 'Devoluciones fáciles', color: 'blue' },
            { text: 'Atención 24/7', color: 'purple' }
          ]}
          ctaComponent={<button className="btn-primary btn-lg">Comprar ahora</button>}
          variant="light"
          align="left"
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left">
          Productos Destacados
        </h2>
        <div className="flex justify-center md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {loadingFeatured
                ? Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <div key={`skeleton-${index}`} className="flex justify-center">
                      <SeeProduct product={null} />
                    </div>
                  ))
                : featuredProducts.map(product => (
                  <div key={product.id} className="flex justify-center">
                    <SeeProduct product={product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductosClient