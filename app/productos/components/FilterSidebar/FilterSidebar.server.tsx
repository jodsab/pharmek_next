import React from 'react'

import type { CategoryWithCount } from '@/core/domain/entities/Category'

import FilterSidebarClient from './FilterSidebar.client'

interface FilterSidebarProps {
  categories: CategoryWithCount[]
  onFilterChange: (selectedCategories: number[]) => void
  title?: string
  showProductCount?: boolean
}

const FilterSidebar = ({
  categories,
  onFilterChange,
  title = 'Categorías',
  showProductCount = true
}: FilterSidebarProps): React.JSX.Element => {
  if (!categories || categories.length === 0) {
    return <></>
  } else {
    return (
      <FilterSidebarClient
        categories={categories}
        onFilterChange={onFilterChange}
        title={title}
        showProductCount={showProductCount}
      />
    )
  }
}

export default FilterSidebar
