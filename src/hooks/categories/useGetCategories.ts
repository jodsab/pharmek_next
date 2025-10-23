import { useQuery } from '@tanstack/react-query'

import { MockCategoryRepository } from '@/infrastructure/repositories/MockCategoryRepository'

export const useGetCategories = () => {
  const categoryRepository = new MockCategoryRepository()

  return useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryRepository.findAll(),
    staleTime: 10 * 60 * 1000
  })
}
