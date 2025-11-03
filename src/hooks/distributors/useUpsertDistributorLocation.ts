import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useUpsertDistributorLocation = () => {
  const qc = useQueryClient()
  const repo = RepositoryFactory.getDistributorLocationRepository()
  return useMutation({
    mutationFn: (loc: Partial<DistributorLocation> & { id_distributor: number }) =>
      repo.upsert(loc),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['distributorLocations'] })
    }
  })
}
