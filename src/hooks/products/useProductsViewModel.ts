import { useEffect, useMemo, useState } from 'react'

import type { CategoryWithCount } from '@/core/domain/entities/Category'
import type { Product } from '@/core/domain/entities/Product'

import { useGetCategories } from '../categories/useGetCategories'
import { useGetFeaturedProducts } from './useGetFeaturedProducts'
import { useGetProducts } from './useGetProducts'

type ProductosVM = {
  products: Product[]
  featuredProducts: Product[]
  categories: CategoryWithCount[]
  isLoading: boolean
  loadingFeatured: boolean
  handleFilterChange: (ids: number[]) => void
  showNoProducts: boolean
}

export const useProductosViewModel = (): ProductosVM => {
  const { data: products = [], isLoading } = useGetProducts()
  const { data: featuredProducts = [], isLoading: loadingFeatured } = useGetFeaturedProducts(4)
  const { data: allCategories = [], isLoading: loadingCategories } = useGetCategories()

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  useEffect(() => {
    setSelectedProducts(products)
  }, [products])

  const countsByCategoryId = useMemo(() => {
    const map = new Map<number, number>()
    for (const p of products) {
      for (const link of p.categoriesOnProducts ?? []) {
        const id = link?.category?.id || 0
        map.set(id, (map.get(id) ?? 0) + 1)
      }
    }
    return map
  }, [products])

  const categoriesWithCount: CategoryWithCount[] = useMemo(() => {
    return allCategories.map(cat => ({
      ...cat,
      count: countsByCategoryId.get(cat.id) ?? 0
    }))
  }, [allCategories, countsByCategoryId])

  const handleFilterChange = (selectedCategoryIds: number[]): void => {
    if (selectedCategoryIds.length === 0) {
      setSelectedProducts(products)
      return
    }
    const setIds = new Set(selectedCategoryIds)
    const filtered = products.filter(p =>
      (p.categoriesOnProducts ?? []).some(link => link.category && setIds.has(link?.category?.id))
    )
    setSelectedProducts(filtered)
  }

  return {
    products: selectedProducts,
    featuredProducts,
    categories: categoriesWithCount,
    isLoading: isLoading || loadingCategories,
    loadingFeatured,
    handleFilterChange,
    showNoProducts: !(isLoading || loadingCategories) && selectedProducts.length === 0
  }
}
