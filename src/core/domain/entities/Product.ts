import { Category } from './Category'

export interface ProductImage {
  id: number
  url?: string
  alt?: string
  id_product?: number
  created_at?: string
}
export interface ProductCategoryLink {
  id: number
  id_product: number
  id_categorie: number
  created_at: string
  category: Category // ← gracias al alias category:categories(*)
}

export interface CategoryOnProduct {
  category?: Category | undefined
}

export interface Product {
  id: number
  created_at: string
  nombre: string
  composicion?: string | null
  indicaciones?: string | null
  dosis_y_via?: string | null
  registro_senasa?: string | null
  animal_mayor_menor?: string | null
  presentaciones?: string | null
  images?: ProductImage[]
  productsImages?: ProductImage[]
  productsCategories?: ProductCategoryLink[]
  precio?: number
  stock?: number
  categoriesOnProducts?: CategoryOnProduct[]
}
