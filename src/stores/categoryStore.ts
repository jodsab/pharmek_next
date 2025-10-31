import { create } from 'zustand'

import type { Category } from '@/core/domain/entities/Category'

interface CategoriesState {
  categories: Category[]
  setCategories: (data: Category[]) => void
  clearCategories: () => void
}

export const useCategoriesStore = create<CategoriesState>(set => ({
  categories: [],
  setCategories: data => set({ categories: data }),
  clearCategories: () => set({ categories: [] })
}))
