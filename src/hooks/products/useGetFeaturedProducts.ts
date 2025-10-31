import { useQuery } from '@tanstack/react-query'

import type { Product } from '@/core/domain/entities/Product'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetFeaturedProducts = (limit = 4) => {
  const repo = RepositoryFactory.getProductRepository()
  return useQuery<Product[]>({
    queryKey: ['products', 'featured', limit],
    queryFn: () => repo.findFeatured(limit),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false
  })
}
