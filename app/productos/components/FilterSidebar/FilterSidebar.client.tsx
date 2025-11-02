'use client'

import './styles.scss'

import React, { useState } from 'react'
import { FaCheckCircle, FaCircle } from 'react-icons/fa'
import { LuFilter } from 'react-icons/lu'

import type { CategoryWithCount } from '@/core/domain/entities/Category'
import HocCard from '@/HOC/HocCard'
interface FilterSidebarClientProps {
  categories: CategoryWithCount[]
  onFilterChange: (selectedCategoryIds: number[]) => void
  title?: string
  showProductCount?: boolean
  selectedCategoriesFromHome?: number[]
}

const FilterSidebarClient = ({
  categories,
  onFilterChange,
  title = 'Categorías',
  showProductCount = true,
  selectedCategoriesFromHome
}: FilterSidebarClientProps): React.JSX.Element => {
  // guardamos IDs, no nombres
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const toggle = (id: number): void => {
    const isSelected = selectedIds.includes(id)
    const updated = isSelected ? selectedIds.filter(x => x !== id) : [...selectedIds, id]
    setSelectedIds(updated)
    onFilterChange(updated) // ← devuelve IDs al viewmodel
  }

  const isSelected = (id: number): boolean => selectedIds.includes(id)

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
            const selected = isSelected(category.id)
            return (
              <li key={category.id} className={`category-item ${selected ? 'selected' : ''}`}>
                <label
                  htmlFor={`category-${category.id}`}
                  className="category-label"
                  onClick={e => {
                    e.preventDefault() // evita doble toggle por el checkbox
                    toggle(category.id)
                  }}
                >
                  <span className="category-icon">
                    {selected ? <FaCheckCircle /> : <FaCircle />}
                  </span>

                  <div className="category-info">
                    <span className="category-name">{category.categoryName}</span>
                    {showProductCount && <span className="product-count">({category.count})</span>}
                  </div>
                </label>

                <input
                  type="checkbox"
                  id={`category-${category.id}`}
                  checked={selected}
                  onChange={() => toggle(category.id)}
                  className="category-checkbox"
                  aria-label={`Filtrar por ${category.categoryName}`}
                />
              </li>
            )
          })}
        </ul>

        {selectedIds.length > 0 && (
          <button
            className="clear-filters"
            onClick={() => {
              setSelectedIds([])
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
