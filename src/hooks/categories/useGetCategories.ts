import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import type { Category } from '@/core/domain/entities/Category'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'
import { useCategoriesStore } from '@/stores/categoryStore'

export const useGetCategories = () => {
  const categoryRepository = RepositoryFactory.getCategoryRepository()
  const setCategories = useCategoriesStore(state => state.setCategories)

  const query = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => await categoryRepository.findAll(),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false
  })

  // 👇 efecto que reacciona al éxito
  useEffect(() => {
    if (query.data) {
      setCategories(query.data)
    }
  }, [query.data, setCategories])

  return query
}
