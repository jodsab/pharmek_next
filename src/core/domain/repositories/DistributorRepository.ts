import type { DistributorLocation } from '../entities/DistributorLocation'

export interface DistributorRepository {
  findAll(): Promise<DistributorLocation[]>
  findById(id: number): Promise<DistributorLocation | null>
  findByDistrict(districtId: number): Promise<DistributorLocation[]>
}
