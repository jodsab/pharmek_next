import { create } from 'zustand'

export const useCategoriesStore = create(set => ({
  categories: [],
  setCategories: categories => set({ categories })
}))
