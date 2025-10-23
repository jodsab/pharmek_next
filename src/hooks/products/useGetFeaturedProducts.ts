import { useQuery } from '@tanstack/react-query'

import { GetFeaturedProducts } from '@/core/application/usecases/GetAllProducts'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetFeaturedProducts = (limit: number = 4) => {
  const productRepository = RepositoryFactory.getProductRepository()
  const getFeaturedProducts = new GetFeaturedProducts(productRepository)

  return useQuery({
    queryKey: ['products', 'featured', limit],
    queryFn: () => getFeaturedProducts.execute(limit),
    staleTime: 5 * 60 * 1000
  })
}
