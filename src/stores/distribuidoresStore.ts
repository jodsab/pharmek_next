import { create } from 'zustand'

import type { DistributorsLocationRow } from '@/core/domain/entities/Distributor'

interface DistributorsStore {
  distributors: DistributorsLocationRow[]
  setDistributors: (data: DistributorsLocationRow[]) => void
  clearDistributors: () => void
}

export const useDistributorsStore = create<DistributorsStore>(set => ({
  distributors: [],
  setDistributors: data => set({ distributors: data }),
  clearDistributors: () => set({ distributors: [] })
}))
