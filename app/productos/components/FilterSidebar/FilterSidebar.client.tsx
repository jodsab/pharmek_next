'use client'

import './styles.scss'

import React, { useState } from 'react'
import { FaCheckCircle, FaCircle } from 'react-icons/fa'
import { LuFilter } from 'react-icons/lu'

import HocCard from '@/HOC/HocCard'

interface Product {
  id: string
  [key: string]: any
}

interface Category {
  id: string
  categoryName: string
  products?: Product[]
}

interface FilterSidebarClientProps {
  categories: Category[]
  onFilterChange: (selectedCategories: string[]) => void
  title?: string
  showProductCount?: boolean
}

const FilterSidebarClient = ({
  categories,
  onFilterChange,
  title = 'Categorías',
  showProductCount = true
}: FilterSidebarClientProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryToggle = (categoryName: string) => {
    const isSelected = selectedCategories.includes(categoryName)
    const updatedCategories = isSelected
      ? selectedCategories.filter(cat => cat !== categoryName)
      : [...selectedCategories, categoryName]

    setSelectedCategories(updatedCategories)
    onFilterChange(updatedCategories)
  }

  const isSelected = (categoryName: string) => selectedCategories.includes(categoryName)

  if (!categories || categories.length === 0) {
    return (
      <HocCard>
        <div className="filter-sidebar">
          <div className="filter-header">
            <LuFilter size={20} />
            <h3>{title}</h3>
          </div>
          <p className="no-categories">No hay categorías disponibles</p>
        </div>
      </HocCard>
    )
  }

  return (
    <HocCard>
      <div className="filter-sidebar">
        <div className="filter-header">
          <LuFilter size={20} />
          <h3>{title}</h3>
        </div>

        <ul className="category-list">
          {categories.map(category => {
            const selected = isSelected(category.categoryName)
            const productCount = category.products?.length || 0

            return (
              <li
                key={category.id}
                className={`category-item ${selected ? 'selected' : ''}`}
                onClick={() => handleCategoryToggle(category.categoryName)}
              >
                <label htmlFor={`category-${category.id}`} className="category-label">
                  <span className="category-icon">
                    {selected ? <FaCheckCircle /> : <FaCircle />}
                  </span>

                  <div className="category-info">
                    <span className="category-name">{category.categoryName}</span>
                    {showProductCount && <span className="product-count">({productCount})</span>}
                  </div>
                </label>

                <input
                  type="checkbox"
                  id={`category-${category.id}`}
                  value={category.categoryName}
                  checked={selected}
                  onChange={() => { }}
                  className="category-checkbox"
                  aria-label={`Filtrar por ${category.categoryName}`}
                />
              </li>
            )
          })}
        </ul>

        {selectedCategories.length > 0 && (
          <button
            className="clear-filters"
            onClick={() => {
              setSelectedCategories([])
              onFilterChange([])
            }}
          >
            Limpiar filtros
          </button>
        )}
      </div>
    </HocCard>
  )
}

export default FilterSidebarClient
