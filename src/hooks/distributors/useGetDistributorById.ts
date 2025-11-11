import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetDistributorById = (id: number): UseQueryResult<DistributorLocation | null, Error> => {
  const repo = RepositoryFactory.getDistributorRepository()
  return useQuery<DistributorLocation | null, Error>({
    queryKey: ['distributor', id] as const,
    queryFn: () => repo.findById(id),
    enabled: !!id
  })
}
