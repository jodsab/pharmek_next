import React from 'react'

import CardCategorieClient from './CardCategorie.client'

interface Category {
  categoryName: string
  categorySlug: string
  categoryImage: string
}

interface CardCategorieProps {
  category?: Category
  loadingCategories?: boolean
}

const CardCategorie = ({ category, loadingCategories }: CardCategorieProps) => {
  return (
    <CardCategorieClient
      categoryName={category?.categoryName}
      categorySlug={category?.categorySlug}
      categoryImage={category?.categoryImage}
      isLoading={loadingCategories}
    />
  )
}

export default CardCategorie
