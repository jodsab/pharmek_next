import { useQuery } from '@tanstack/react-query'

import type { Product } from '@/core/domain/entities/Product'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetProductById = (id: number | string) => {
  const repo = RepositoryFactory.getProductRepository()
  return useQuery<Product | null>({
    queryKey: ['products', 'byId', id],
    queryFn: () => repo.findById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000
  })
}
