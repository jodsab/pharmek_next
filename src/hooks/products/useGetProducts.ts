import { useQuery } from '@tanstack/react-query'

import { GetAllProducts } from '@/core/application/usecases/GetAllProducts'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useGetProducts = () => {
  const productRepository = RepositoryFactory.getProductRepository()
  const getAllProducts = new GetAllProducts(productRepository)

  return useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts.execute(),
    staleTime: 5 * 60 * 1000
  })
}
