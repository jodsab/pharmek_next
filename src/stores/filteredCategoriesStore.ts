'use client'

import { create } from 'zustand'

interface FilteredCategoriesState {
  selectedCategoryIds: number[] // Renombrado a 'selectedCategoryIds' para claridad
  setSelectedCategoryIds: (ids: number[]) => void
}

export const useFilteredCategoriesStore = create<FilteredCategoriesState>(set => ({
  selectedCategoryIds: [],
  setSelectedCategoryIds: ids => set({ selectedCategoryIds: ids })
}))
