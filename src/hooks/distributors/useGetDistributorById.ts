import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import type { Distributor } from '@/core/domain/entities/Distributor'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetDistributorById = (id: number): UseQueryResult<Distributor | null, Error> => {
  const repo = RepositoryFactory.getDistributorRepository()
  return useQuery<Distributor | null, Error>({
    queryKey: ['distributor', id] as const,
    queryFn: () => repo.findById(id),
    enabled: !!id
  })
}
