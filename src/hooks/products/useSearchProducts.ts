import { useQuery, UseQueryResult } from '@tanstack/react-query'

import type { Product } from '@/core/domain/entities/Product'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

import { ProductRepository } from './../../core/domain/repositories/ProductRepository'

function hasSearch(
  repo: ProductRepository
): repo is ProductRepository & { search: (q: string) => Promise<Product[]> } {
  return typeof (repo as any).search === 'function'
}

export const useSearchProducts = (q: string): UseQueryResult<Product[]> => {
  const repo = RepositoryFactory.getProductRepository()
  return useQuery<Product[]>({
    queryKey: ['products', 'search', q],
    queryFn: async () => {
      if (!hasSearch(repo)) {
        throw new Error('El repositorio de productos no implementa search().')
      }
      return repo.search(q)
    },
    enabled: q.trim().length > 0, // no consultes vacío
    staleTime: 5 * 60 * 1000
  })
}
