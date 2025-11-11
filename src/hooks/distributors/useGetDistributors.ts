import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'
import { useDistributorsStore } from '@/stores/distributorsStore'

export const useGetDistributors = () => {
  const distributorRepository = RepositoryFactory.getDistributorRepository()
  const setDistributors = useDistributorsStore(state => state.setDistributors)

  const query = useQuery({
    queryKey: ['distributors'],
    queryFn: () => distributorRepository.findAll(),
    staleTime: 5 * 60 * 1000 // 5 minutes
  })

  useEffect(() => {
    console.log('query', query.data)
    if (query.data) {
      setDistributors(query.data)
    }
  }, [query.data, setDistributors])

  return query
}
