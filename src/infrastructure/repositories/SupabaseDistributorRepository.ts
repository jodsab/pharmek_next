import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import type { DistributorRepository } from '@/core/domain/repositories/DistributorRepository'
import supabase from '@/libs/supabase'

export class SupabaseDistributorRepository implements DistributorRepository {
  findById(id: number): Promise<DistributorLocation | null> {
    throw new Error('Method not implemented.')
  }
  findByDistrict(districtId: number): Promise<DistributorLocation[]> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<DistributorLocation[]> {
    try {
      const { data, error } = await supabase
        .from('distributorsLocations')
        .select(`
          *,
          district:districts (*),
          distributor:distributors (*),
          products:productsDistributors (
            product:products (*)
          )
        `)

      if (error) throw error

      console.log('Distributors data:', data)
      return data || []
    } catch (error) {
      console.error('Error fetching distributors:', error)
      return []
    }
  }

  // ... implement other methods
}