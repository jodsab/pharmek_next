export interface Product {
  id: string
  created_at: string
  nombre: string
  composicion?: string
  indicaciones?: string
  dosis_y_via?: string
  registro_senasa?: string
  animal_mayor_menor?: string
  presentaciones?: string
  images?: ProductImage[]
  categoriesOnProducts?: CategoryOnProduct[]
  precio?: number
  stock?: number
}

export interface ProductImage {
  id: string
  url: string
  alt?: string
}

export interface CategoryOnProduct {
  category: Category
}

export interface Category {
  id: string
  categoryName: string
  products?: Product[]
}
