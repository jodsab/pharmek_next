'use client'

import './styles.scss'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPills } from 'react-icons/fa'
import { IoArrowForward } from 'react-icons/io5'

interface CardCategorieClientProps {
  categoryName?: string | undefined
  categorySlug?: string | undefined
  categoryImage?: string | undefined
  categoryIcon?: React.ReactNode
  isLoading?: boolean
}

const CardCategorieClient = ({
  categoryName,
  categorySlug,
  categoryImage = '/assets/images/categories/default.jpg', // Imagen por defecto
  categoryIcon,
  isLoading = false
}: CardCategorieClientProps): React.JSX.Element => {
  if (isLoading) {
    return (
      <div className="categorias_card skeleton_card">
        <div className="card_image skeleton"></div>
        <div className="card_overlay">
          <div className="skeleton_text"></div>
        </div>
      </div>
    )
  }
  return (
    <Link
      href={{ pathname: '/productos', query: { category: categorySlug, name: categoryName } }}
      className="categorias_card_link"
    >
      <div className="categorias_card">
        {/* Imagen de fondo */}
        <div className="card_image">
          <Image
            src={categoryImage}
            alt={categoryName || 'Categoría'}
            fill
            sizes="(max-width: 768px) 140px, 200px"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Overlay oscuro */}
        <div className="card_overlay"></div>

        {/* Contenido sobre la imagen */}
        <div className="card_content">
          {/* Icono arriba */}
          <div className="icon_container">
            {categoryIcon || <FaPills className="category_icon" />}
          </div>

          {/* Texto abajo */}
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
