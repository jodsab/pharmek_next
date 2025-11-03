import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetDistributorLocationsByDistributor = (
  distributorId: number
): UseQueryResult<DistributorLocation[], Error> => {
  const repo = RepositoryFactory.getDistributorLocationRepository()
  return useQuery<DistributorLocation[], Error>({
    queryKey: ['distributorLocationsByDistributor', distributorId] as const,
    queryFn: () => repo.findByDistributor(distributorId),
    enabled: !!distributorId
  })
}
