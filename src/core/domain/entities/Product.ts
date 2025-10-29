export interface ProductImage {
  id: number
  url: string
  id_product: number
  created_at: string
}

export interface Category {
  id: number
  categoryName: string
  created_at: string
  categoryImage?: string | null
}

export interface ProductCategoryLink {
  id: number
  id_product: number
  id_categorie: number
  created_at: string
  category: Category // ← gracias al alias category:categories(*)
}

export interface Product {
  id: number
  created_at: string
  nombre: string
  composicion: string | null
  indicaciones: string | null
  dosis_y_via: string | null
  registro_senasa: string | null
  animal_mayor_menor: string | null
  presentaciones: string | null
  productsImages?: ProductImage[]
  productsCategories?: ProductCategoryLink[]
}
