import { create } from 'zustand'

import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'

interface DistributorsState {
  distributors: DistributorLocation[]
  setDistributors: (distributors: DistributorLocation[]) => void
}

export const useDistributorsStore = create<DistributorsState>(set => ({
  distributors: [],
  setDistributors: distributors => set({ distributors })
}))
