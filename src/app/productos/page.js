'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import Anuncio from '@/components/Anuncio'
import Breadcrumb from '@/components/Breadcrumb'
import SeeProduct from '@/components/SeeProduct'
import WithNavbarAndFooter from '@/HOC/WithNavbarAndFooter'
import { useGetProducts } from '@/hooks/categories/useGetProducts.hook'
import { useCategoriesStore } from '@/libs/store-categories'
import { useProductsStore } from '@/libs/store-products'

import FilterSidebar from './components/FilterSidebar'

const Productos = ({ searchParams }) => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useGetProducts()

  const products = useProductsStore(state => state.products)
  const productLoading = useProductsStore(state => state.loading)
  const categories = useCategoriesStore(state => state.categories)

  useEffect(() => {
    if (!productLoading) {
      if (products && products.length > 0) {
        setSelectedProducts(products)
      } else {
        setSelectedProducts([])
      }
      setLoading(false)
    }
  }, [products, productLoading, categories])

  const handleFilterChange = selectedCategories => {
    if (!products || products.length === 0) {
      setSelectedProducts([])
      return
    }

    if (selectedCategories.length === 0) {
      setSelectedProducts(products)
    } else {
      const filtered = products.filter(product => {
        if (!Array.isArray(product.categoriesOnProducts)) {
        }
        const isMatch = product.categoriesOnProducts.some(link => {
          if (!link.category) {
            return false
          }
          return selectedCategories.includes(link.category.categoryName)
        })
        return isMatch
      })
      setSelectedProducts(filtered)
    }
  }

  if (loading) {
    return (
      <WithNavbarAndFooter>
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">Cargando productos...</p>
        </div>
      </WithNavbarAndFooter>
    )
  }

  const showNoProductsMessage = !loading && selectedProducts.length === 0

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.85,
      transition: { duration: 0.4, ease: 'easeIn' }
    }
  }

  return (
    <WithNavbarAndFooter>
      <div className="content">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Productos' } // Último item, sin href
          ]}
        />
        <h2 className="text-4xl md:text-4xl font-bold text-blue-dark dark:text-white mb-8 text-center md:text-left">
          Nuestros Productos
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-64 lg:w-75 flex-shrink-0">
            <FilterSidebar onFilterChange={handleFilterChange} categories={categories} />
          </div>

          <div className="flex-1 flex justify-center md:block">
            {showNoProductsMessage ? (
              <div className="text-center text-xl text-gray-600 dark:text-gray-400 py-8">
                No se encontraron productos que coincidan con los filtros seleccionados.
              </div>
            ) : (
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center mx-auto">
                <AnimatePresence>
                  {selectedProducts.map(product => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                      className="w-full sm:max-w-sm"
                      transition={{
                        layout: { duration: 0.4, ease: 'easeInOut' }
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <SeeProduct product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full dark:bg-gray-800 my-10">
        <Anuncio />
      </div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left">
          Productos Nuevos
        </h2>
        <div className="flex justify-center md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array(4)
                .fill(null)
                .map((dummyItem, index) => (
                  <div key={`new-product-${index}`} className="flex justify-center">
                    <SeeProduct product={dummyItem} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </WithNavbarAndFooter>
  )
}

export default Productos
