import { useEffect, useState } from 'react'

import type { Product } from '@/core/domain/entities/Product'

import { useGetFeaturedProducts } from './useGetFeaturedProducts'
import { useGetProducts } from './useGetProducts'

export const useProductosViewModel = () => {
  const { data: products = [], isLoading } = useGetProducts()
  const { data: featuredProducts = [], isLoading: loadingFeatured } = useGetFeaturedProducts(4)
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProducts(products)
    }
  }, [products])

  const handleFilterChange = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0) {
      setSelectedProducts(products)
    } else {
      const filtered = products.filter(product =>
        product.categoriesOnProducts?.some(link =>
          selectedCategories.includes(link.category.categoryName)
        )
      )
      setSelectedProducts(filtered)
    }
  }

  const categories = products
    .flatMap(p => p.categoriesOnProducts || [])
    .map(c => c.category)
    .filter((cat, index, self) => index === self.findIndex(c => c.id === cat.id))

  return {
    products: selectedProducts,
    featuredProducts,
    categories,
    isLoading,
    loadingFeatured,
    handleFilterChange,
    showNoProducts: !isLoading && selectedProducts.length === 0
  }
}
