import React from 'react'

import type { Category } from '@/core/domain/entities/Category'

import CardCategorieClient from './CardCategorie.client'
interface CardCategorieProps {
  category?: Category
  isLoading?: boolean
}

const CardCategorie = ({ category, isLoading }: CardCategorieProps): React.JSX.Element => {
  const name = category?.categoryName ?? ''
  const slug = category?.categoryName ?? ''
  const image = category?.categoryImage ?? '/assets/images/placeholder.png'

  return (
    <CardCategorieClient
      categoryName={name}
      categorySlug={slug}
      categoryImage={image}
      isLoading={!!isLoading}
    />
  )
}

export default CardCategorie
