import { useQuery } from '@tanstack/react-query'

import type { Product } from '@/core/domain/entities/Product'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetProducts = () => {
  const repo = RepositoryFactory.getProductRepository()
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => repo.findAll(),
    staleTime: 10 * 60 * 1000, // 10 min “fresh”
    refetchOnWindowFocus: false
  })
}
