import { createClient } from '@supabase/supabase-js'

import type { Product } from '@/core/domain/entities/Product'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

export class SupabaseProductRepository implements ProductRepository {
  private supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  async findAll(): Promise<Product[]> {
    const { data, error } = await this.supabase.from('products').select(`
        *,
        images (*),
        categoriesOnProducts (
          category (*)
        )
      `)

    if (error) throw error
    return data || []
  }

  async findById(id: string): Promise<Product | null> {
    const { data, error } = await this.supabase
      .from('products')
      .select(
        `
        *,
        images (*),
        categoriesOnProducts (
          category (*)
        )
      `
      )
      .eq('id', id)
      .single()

    if (error) return null
    return data
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from('products')
      .select(
        `
        *,
        images (*),
        categoriesOnProducts!inner (
          category!inner (*)
        )
      `
      )
      .eq('categoriesOnProducts.category.id', categoryId)

    if (error) throw error
    return data || []
  }

  async findFeatured(limit: number = 4): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from('products')
      .select(
        `
        *,
        images (*),
        categoriesOnProducts (
          category (*)
        )
      `
      )
      .limit(limit)

    if (error) throw error
    return data || []
  }

  async search(query: string): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from('products')
      .select(
        `
        *,
        images (*),
        categoriesOnProducts (
          category (*)
        )
      `
      )
      .or(`nombre.ilike.%${query}%,indicaciones.ilike.%${query}%`)

    if (error) throw error
    return data || []
  }
}
