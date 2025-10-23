import { useQuery } from '@tanstack/react-query'

import { GetProductById } from '@/core/application/usecases/GetProductById'
import { MockProductRepository } from '@/infrastructure/repositories/MockProductRepository'
import { SupabaseProductRepository } from '@/infrastructure/repositories/SupabaseProductRepository'

const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === 'true'

export const useGetProductById = (id: string) => {
  const productRepository = USE_MOCKS
    ? new MockProductRepository()
    : new SupabaseProductRepository()

  const getProductById = new GetProductById(productRepository)

  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById.execute(id),
    enabled: !!id
  })
}
