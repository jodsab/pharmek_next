import { useEffect, useMemo } from 'react' // Eliminamos useState

import type { CategoryWithCount } from '@/core/domain/entities/Category'
import type { Product } from '@/core/domain/entities/Product'
import { useFilteredCategoriesStore } from '@/stores/filteredCategoriesStore'

import { useGetCategories } from '../categories/useGetCategories'
import { useGetFeaturedProducts } from './useGetFeaturedProducts'
import { useGetProducts } from './useGetProducts'

type ProductosVM = {
  products: Product[]
  featuredProducts: Product[]
  categories: CategoryWithCount[]
  isLoading: boolean
  loadingFeatured: boolean
  // Eliminamos handleFilterChange porque ahora se gestiona directamente en el store
  showNoProducts: boolean
}

export const useProductosViewModel = (): ProductosVM => {
  const { data: products = [], isLoading } = useGetProducts()
  const { data: featuredProducts = [], isLoading: loadingFeatured } = useGetFeaturedProducts(4)
  const { data: allCategories = [], isLoading: loadingCategories } = useGetCategories()

  // 1. OBTENEMOS EL ESTADO Y LA FUNCIÓN DEL STORE
  const { selectedCategoryIds, setSelectedCategoryIds } = useFilteredCategoriesStore()

  // 2. Lógica para calcular categorías con contador (SIN CAMBIOS)
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

  // 3. INICIALIZACIÓN: Seleccionar todas las categorías al cargar si el filtro está vacío
  useEffect(() => {
    if (categoriesWithCount.length > 0 && selectedCategoryIds.length === 0) {
      const allIds = categoriesWithCount.map(c => c.id)
      setSelectedCategoryIds(allIds)
    }
  }, [categoriesWithCount, selectedCategoryIds.length, setSelectedCategoryIds])

  // 4. LÓGICA DE FILTRADO: Se ejecuta cada vez que 'products' o 'selectedCategoryIds' cambian
  const filteredProducts: Product[] = useMemo(() => {
    if (!products.length || !selectedCategoryIds.length) {
      return [] // Si no hay productos o no hay filtros seleccionados (después de inicialización)
    }

    // Si la lista de IDs seleccionados es igual a la lista total de IDs disponibles, no filtramos.
    // Esto previene filtrar inútilmente.
    const allCategoryIds = categoriesWithCount.map(c => c.id)
    if (
      selectedCategoryIds.length === allCategoryIds.length &&
      selectedCategoryIds.every(id => allCategoryIds.includes(id))
    ) {
      return products
    }

    const setIds = new Set(selectedCategoryIds)

    // Aplicar el filtro
    return products.filter(p =>
      (p.categoriesOnProducts ?? []).some(link => link.category && setIds.has(link?.category?.id))
    )
  }, [products, selectedCategoryIds, categoriesWithCount]) // Depende de los IDs del Store

  return {
    products: filteredProducts, // Usamos los productos ya filtrados
    featuredProducts,
    categories: categoriesWithCount,
    isLoading: isLoading || loadingCategories,
    loadingFeatured,
    showNoProducts: !(isLoading || loadingCategories) && filteredProducts.length === 0
  }
}
