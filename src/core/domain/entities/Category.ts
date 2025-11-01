import type { Product } from './Product'

export interface Category {
  id: number
  created_at?: string
  categoryName: string
  categoryImage?: string | null
  categoriesOnProducts?: {
    product: Product
  }[]
  products?: Product[]
}
