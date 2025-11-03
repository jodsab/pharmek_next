import type { PostgrestError } from '@supabase/supabase-js'
import type { District } from '@/core/domain/entities/District'
import supabase from '@/libs/supabase'

export class SupabaseDistrictRepository {
  private handleError(error: PostgrestError | Error) {
    throw error
  }

  async findAll(): Promise<District[]> {
    // Nota: usamos schema geolocation explícito
    const { data, error } = await supabase.schema('geolocation').from('districts').select('*').order('name')
    if (error) this.handleError(error)
    return data || []
  }

  async findById(id: number): Promise<District | null> {
    const { data, error } = await supabase.schema('geolocation').from('districts').select('*').eq('id', id).single()
    if (error) return null
    return data
  }
}