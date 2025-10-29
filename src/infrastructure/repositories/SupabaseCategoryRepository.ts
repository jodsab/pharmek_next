import type { PostgrestError } from '@supabase/supabase-js'

import type { Category } from '@/core/domain/entities/Category'
import type { CategoryRepository } from '@/core/domain/repositories/CategoryRepository'
import supabase from '@/libs/supabase'

export class SupabaseCategoryRepository implements CategoryRepository {
  private async validateConnection() {
    try {
      const { data, error } = await supabase.from('categories').select('count')

      if (error) throw error
      return true
    } catch (error) {
      console.error('❌ Error de conexión a Supabase:', error)
      return false
    }
  }

  private handleError(error: PostgrestError | Error, method: string) {
    throw error
  }

  async findAll(): Promise<Category[]> {
    try {
      const isConnected = await this.validateConnection()
      if (!isConnected) throw new Error('No se pudo establecer conexión con Supabase')

      const { data, error, status } = await supabase.from('categories').select('*').order('id')

      if (error) {
        this.handleError(error, 'findAll')
      }

      return data || []
    } catch (error) {
      throw error instanceof Error ? error : new Error('Error desconocido')
    }
  }

  async findById(id: number): Promise<Category | null> {
    try {
      const { data, error } = await supabase.from('categories').select('*').eq('id', id).single()

      if (error) {
        this.handleError(error, 'findById')
      }

      return data
    } catch (error) {
      console.error('🔥 Error en findById:', error)
      return null
    }
  }

  async findByName(categoryName: string): Promise<Category | null> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('categoryName', categoryName)
        .single()

      if (error) {
        this.handleError(error, 'findByName')
      }

      return data
    } catch (error) {
      console.error('🔥 Error en findByName:', error)
      return null
    }
  }

  async search(query: string): Promise<Category[]> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .ilike('categoryName', `%${query}%`)

      if (error) {
        this.handleError(error, 'search')
      }

      return data || []
    } catch (error) {
      return []
    }
  }
}
