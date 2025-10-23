import React from 'react'

import FilterSidebarClient from './FilterSidebar.client'

interface Category {
  id: string
  categoryName: string
  products?: any[]
}

interface FilterSidebarProps {
  categories: Category[]
  onFilterChange: (selectedCategories: string[]) => void
  title?: string
  showProductCount?: boolean
}

const FilterSidebar = ({
  categories,
  onFilterChange,
  title = 'Categorías',
  showProductCount = true
}: FilterSidebarProps) => {
  return (
    <FilterSidebarClient
      categories={categories}
      onFilterChange={onFilterChange}
      title={title}
      showProductCount={showProductCount}
    />
  )
}

export default FilterSidebar
