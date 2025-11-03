import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import type { District } from '@/core/domain/entities/District'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetDistricts = (): UseQueryResult<District[], Error> => {
  const repo = RepositoryFactory.getDistrictRepository()
  return useQuery<District[], Error>({
    queryKey: ['districts'] as const,
    queryFn: () => repo.findAll(),
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false
  })
}
