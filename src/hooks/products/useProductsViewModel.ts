import { useEffect, useMemo, useState } from 'react'

import type { Product } from '@/core/domain/entities/Product'

import { useGetCategories } from '../categories/useGetCategories'
import { useGetFeaturedProducts } from './useGetFeaturedProducts'
import { useGetProducts } from './useGetProducts'

export const useProductosViewModel = () => {
  const { data: products = [], isLoading } = useGetProducts()
  const { data: featuredProducts = [], isLoading: loadingFeatured } = useGetFeaturedProducts(4)
  const { data: allCategories = [], isLoading: loadingCategories } = useGetCategories()

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  // Inicial: todos los productos
  useEffect(() => {
    setSelectedProducts(products)
  }, [products])

  // Mapa de conteo por categoría (id)
  const countsByCategoryId = useMemo(() => {
    const map = new Map<number, number>()
    for (const p of products) {
      for (const link of p.categoriesOnProducts ?? []) {
        const id = link.category.id
        map.set(id, (map.get(id) ?? 0) + 1)
      }
    }
    return map
  }, [products])

  // Categorías con contador (incluye las de 0)
  const categoriesWithCount = useMemo(() => {
    return allCategories.map(cat => ({
      ...cat,
      count: countsByCategoryId.get(cat.id) ?? 0
    }))
  }, [allCategories, countsByCategoryId])

  // Filtro por categoría (usar IDs)
  const handleFilterChange = (selectedCategoryIds: number[]): void => {
    if (selectedCategoryIds.length === 0) {
      setSelectedProducts(products)
      return
    }
    const setIds = new Set(selectedCategoryIds)
    const filtered = products.filter(p =>
      (p.categoriesOnProducts ?? []).some(link => setIds.has(link.category.id))
    )
    setSelectedProducts(filtered)
  }

  return {
    products: selectedProducts,
    featuredProducts,
    categories: categoriesWithCount, // ← aquí están TODAS + count
    isLoading: isLoading || loadingCategories,
    loadingFeatured,
    handleFilterChange,
    showNoProducts: !(isLoading || loadingCategories) && selectedProducts.length === 0
  }
}
