'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPills } from 'react-icons/fa'
import { IoArrowForward } from 'react-icons/io5'

import { Category } from '@/core/domain/entities/Category'

interface CardCategorieClientProps {
  category: Category
}

const CardCategorieClient = ({ category }: CardCategorieClientProps): React.JSX.Element => {
  const {
    categoryName = '',
    categoryImage = '/assets/images/categories/default.jpg',
    categoryIcon
  } = category

  const openProductsWithFilters = (): void => {
    const categoryState = { category: JSON.stringify(category) }
    window.history.replaceState(categoryState, '', '/productos')
  }

  return (
    <Link href="/productos" onClick={openProductsWithFilters} className="categorias_card_link">
      <div className="categorias_card">
        <div className="card_image">
          <Image
            src={categoryImage}
            alt={categoryName || 'Categoría'}
            fill
            sizes="(max-width: 768px) 140px, 200px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="card_overlay"></div>
        <div className="card_content">
          <div className="icon_container">
            {categoryIcon || <FaPills className="category_icon" />}
          </div>
          <div className="text_container">
            <p className="category_name">{categoryName}</p>
            <div className="arrow_circle">
              <IoArrowForward className="arrow_icon" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardCategorieClient
