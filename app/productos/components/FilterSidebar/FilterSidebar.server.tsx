import React from 'react'

import type { CategoryWithCount } from '@/core/domain/entities/Category'

import FilterSidebarClient from './FilterSidebar.client'

interface FilterSidebarProps {
  categories: CategoryWithCount[]
  title?: string
  showProductCount?: boolean
}

const FilterSidebar = ({
  categories,
  title = 'Categorías',
  showProductCount = true
}: FilterSidebarProps): React.JSX.Element => {
  if (!categories || categories.length === 0) {
    return <></>
  } else {
    return (
      <FilterSidebarClient
        categories={categories}
        title={title}
        showProductCount={showProductCount}
      />
    )
  }
}

export default FilterSidebar
