'use client'

import { useCallback } from 'react'

import { useFilteredCategoriesStore } from '@/stores/filteredCategoriesStore'

export const useCategoryFilter = () => {
  const { selectedCategoryIds, setSelectedCategoryIds } = useFilteredCategoriesStore()

  const selectedIds = selectedCategoryIds || []

  const toggle = useCallback(
    (id: number): void => {
      if (!setSelectedCategoryIds) return

      const isSelected = selectedIds.includes(id)
      const updated = isSelected ? selectedIds.filter(x => x !== id) : [...selectedIds, id]

      setSelectedCategoryIds(updated)
    },
    [selectedIds, setSelectedCategoryIds]
  )

  const isSelected = useCallback(
    (id: number): boolean => {
      return selectedIds.includes(id)
    },
    [selectedIds]
  )

  const clearFilters = useCallback((): void => {
    if (!setSelectedCategoryIds) return
    setSelectedCategoryIds([])
  }, [setSelectedCategoryIds])

  return {
    selectedIds,
    toggle,
    isSelected,
    clearFilters,
    hasSelection: selectedIds.length > 0
  }
}
