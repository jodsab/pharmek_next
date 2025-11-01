import React from 'react'

import type { Product } from '@/core/domain/entities/Product'

import FilterSidebarClient from './FilterSidebar.client'

interface Category {
  id: string
  categoryName: string
  products?: Product[]
}

interface FilterSidebarProps {
  categories: Category[]
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
        categories={[]}
        onFilterChange={onFilterChange}
        title={title}
        showProductCount={showProductCount}
      />
    )
  }
}

export default FilterSidebar
