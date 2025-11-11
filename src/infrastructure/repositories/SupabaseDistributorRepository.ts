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
          distributor:distributors (*)
        `)

      if (error) throw error

      const normalized: DistributorLocation[] = (data || []).map((row: any) => {
        const latNum = row.latitude != null ? Number(row.latitude) : undefined
        const lngNum = row.longitude != null ? Number(row.longitude) : undefined
        const lat = typeof latNum === 'number' && !Number.isNaN(latNum) ? latNum : undefined
        const lng = typeof lngNum === 'number' && !Number.isNaN(lngNum) ? lngNum : undefined
        const products: any[] = []

        const base: any = {
          id: row.id,
          created_at: row.created_at,
          cellphone: row.cellphone,
          address: row.address,
          businessHours: row.businessHours,
          id_district: row.id_district,
          id_distributor: row.id_distributor,
          googleUrl: row.googleUrl
        }

        if (lat != null) base.latitude = lat as any
        if (lng != null) base.longitude = lng as any
        if (row.distributor) base.distributor = row.distributor
        if (products.length) base.products = products

        return base as any
      })

      return normalized
    } catch (error) {
      console.error('Error fetching distributors:', error)
      return []
    }
  }

  // ... implement other methods
}