import type { Product } from './Product'

export interface Category {
  id: number
  created_at?: string
  categoryName: string
  categoryImage?: string
  categoryIcon?: string
  categoriesOnProducts?: { product: ProductRef }[]
  products?: Product[]
}

export type CategoryWithCount = Category & { count: number }

export interface ProductRef {
  id: number
  nombre: string
}
