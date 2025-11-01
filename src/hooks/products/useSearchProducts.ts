import { useQuery, UseQueryResult } from '@tanstack/react-query'

import type { Product } from '@/core/domain/entities/Product'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useSearchProducts = (q: string): UseQueryResult<Product[]> => {
  const repo = RepositoryFactory.getProductRepository()
  return useQuery<Product[]>({
    queryKey: ['products', 'search', q],
    queryFn: () => repo.search(q),
    enabled: q.trim().length > 0, // no consultes vacío
    staleTime: 5 * 60 * 1000
  })
}
