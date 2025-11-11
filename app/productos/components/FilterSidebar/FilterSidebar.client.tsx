'use client'

import './styles.scss'

import React from 'react'
import { FaCheckCircle, FaCircle } from 'react-icons/fa'
import { LuFilter } from 'react-icons/lu'

import type { CategoryWithCount } from '@/core/domain/entities/Category'
import HocCard from '@/HOC/HocCard'
import { useCategoryFilter } from '@/hooks/categoryFilter/useCategoryFilter'

interface FilterSidebarClientProps {
  categories: CategoryWithCount[] // Aún necesitamos esta prop para mostrar el contador
  // onFilterChange: (selectedCategoryIds: number[]) => void // <-- ¡ELIMINADO!
  title?: string
  showProductCount?: boolean
}

const FilterSidebarClient = ({
  categories,
  // onFilterChange, // <-- ELIMINADO
  title = 'Categorías',
  showProductCount = true
}: FilterSidebarClientProps): React.JSX.Element => {
  // Obtenemos toda la lógica del filtro del hook que interactúa con el store
  const {
    selectedIds, // IDs seleccionados del Store
    toggle,
    isSelected,
    clearFilters,
    hasSelection
  } = useCategoryFilter()

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
                    e.preventDefault()
                    toggle(category.id) // <-- Llama al hook (actualiza el store)
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
                  onChange={() => toggle(category.id)} // <-- Llama al hook (actualiza el store)
                  className="category-checkbox"
                  aria-label={`Filtrar por ${category.categoryName}`}
                />
              </li>
            )
          })}
        </ul>

        {hasSelection && (
          <button
            className="clear-filters"
            onClick={clearFilters} // <-- Llama al hook (actualiza el store)
          >
            Limpiar filtros
          </button>
        )}
      </div>
    </HocCard>
  )
}

export default FilterSidebarClient
