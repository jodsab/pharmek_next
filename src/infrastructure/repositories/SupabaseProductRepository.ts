// src/infrastructure/repositories/SupabaseProductRepository.ts
import type { Product } from '@/core/domain/entities/Product'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'
import supabase from '@/libs/supabase'

export class SupabaseProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(
        `
  *,
  images:productsImages (*),
  categoriesOnProducts:productsCategories (
    category:categories (*)
  )
`
      )
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  }

  async findById(id: string | number): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select(
        `
  *,
  images:productsImages (*),
  categoriesOnProducts:productsCategories (
    category:categories (*)
  )
`
      )
      .eq('id', id)
      .single()

    if (error) return null
    return data
  }

  async findByCategory(categoryId: string | number): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(
        `
      *,
      images:productsImages (*),
      categoriesOnProducts:productsCategories!inner (
        category:categories!inner (*)
      )
    `
      )
      .eq('productsCategories.id_categorie', categoryId)

    if (error) throw error
    return data || []
  }
  async findFeatured(limit: number = 4): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(
        `
  *,
  images:productsImages (*),
  categoriesOnProducts:productsCategories (
    category:categories (*)
  )
`
      )
      .limit(limit)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  }

  async search(query: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(
        `
  *,
  images:productsImages (*),
  categoriesOnProducts:productsCategories (
    category:categories (*)
  )
`
      )
      .or(`nombre.ilike.%${query}%,indicaciones.ilike.%${query}%`)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  }
}
