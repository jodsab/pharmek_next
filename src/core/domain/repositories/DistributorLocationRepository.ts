import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'

export type LocationFilters = {
  distributorIds?: number[]
  districtIds?: number[]
  text?: string // busca en address/cellphone
}

export interface DistributorLocationRepository {
  findAll(filters?: LocationFilters): Promise<DistributorLocation[]>
  findById(id: number): Promise<DistributorLocation | null>
  findByDistributor(distributorId: number): Promise<DistributorLocation[]>
  upsert(
    loc: Partial<DistributorLocation> & { id_distributor: number }
  ): Promise<DistributorLocation>
  batchUpdateGeo(
    rows: Array<{
      id: number
      latitude?: string | null
      longitude?: string | null
      googleUrl?: string | null
    }>
  ): Promise<void>
  delete?(id: number): Promise<void>
}
