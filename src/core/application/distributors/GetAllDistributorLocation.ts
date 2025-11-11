/* eslint-disable prettier/prettier */
import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import type { DistributorLocationRepository } from '@/core/domain/repositories/DistributorLocationRepository'

export class GetAllDistributorLocations {
  constructor(private readonly repository: DistributorLocationRepository) { }

  async execute(): Promise<DistributorLocation[]> {
    return await this.repository.findAll()
  }
}
