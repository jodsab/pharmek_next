import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import type { LocationFilters } from '@/core/domain/repositories/DistributorLocationRepository'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetDistributorLocations = (
  filters?: LocationFilters
): UseQueryResult<DistributorLocation[], Error> => {
  const repo = RepositoryFactory.getDistributorLocationRepository()
  return useQuery<DistributorLocation[], Error>({
    queryKey: ['distributorLocations', filters] as const,
    queryFn: () => repo.findAll(filters),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false
  })
}
