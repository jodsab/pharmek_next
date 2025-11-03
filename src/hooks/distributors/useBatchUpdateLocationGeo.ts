import { useMutation, useQueryClient } from '@tanstack/react-query'

import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'

export const useBatchUpdateLocationGeo = () => {
  const qc = useQueryClient()
  const repo = RepositoryFactory.getDistributorLocationRepository()
  return useMutation({
    mutationFn: (
      rows: Array<{
        id: number
        latitude?: string | null
        longitude?: string | null
        googleUrl?: string | null
      }>
    ) => repo.batchUpdateGeo(rows),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['distributorLocations'] })
    }
  })
}
