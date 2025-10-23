'use client'

import './styles.scss'

import Link from 'next/link'
import React from 'react'
import { FaPills } from 'react-icons/fa'

interface CardCategorieClientProps {
  categoryName?: string
  categorySlug?: string
  isLoading?: boolean
}

const CardCategorieClient = ({
  categoryName,
  categorySlug,
  isLoading = false
}: CardCategorieClientProps) => {
  if (isLoading) {
    return (
      <div className="categorias_card">
        <div className="img_container rounded-3xl skeleton"></div>
        <p className="skeleton-text"></p>
      </div>
    )
  }

  return (
    <Link href={categorySlug ? `/productos/${categorySlug}` : '/productos'}>
      <div className="categorias_card">
        <div className="img_container rounded-3xl">
          <FaPills />
        </div>
        <p className="pt-2">{categoryName}</p>
      </div>
    </Link>
  )
}

export default CardCategorieClient
