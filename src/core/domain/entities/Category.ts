import type { Product } from './Product'

export interface Category {
  id: number
  created_at: string
  categoryName: string
  idx: number
  categoriesOnProducts?: {
    product: Product
  }[]
}
