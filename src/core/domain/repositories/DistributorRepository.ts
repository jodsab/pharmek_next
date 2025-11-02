import type { DistributorRow } from '../entities/Distributor'

export interface DistributorRepository {
  findAll(): Promise<DistributorRow[]>
  findById(id: number): Promise<DistributorRow>
  findByName(categoryName: string): Promise<DistributorRow>
  search(query: string): Promise<DistributorRow[]>
}
