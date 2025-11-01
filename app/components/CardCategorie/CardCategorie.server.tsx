import React from 'react'

import CardCategorieClient from './CardCategorie.client'

interface Category {
  categoryName: string
  categorySlug: string
  categoryImage: string
}

interface CardCategorieProps {
  category?: Category | null
  loadingCategories?: boolean
}

const CardCategorie = ({
  category,
  loadingCategories = false
}: CardCategorieProps): React.JSX.Element => {
  return (
    <CardCategorieClient
      categoryName={category?.categoryName ?? undefined}
      categorySlug={category?.categorySlug ?? undefined}
      categoryImage={category?.categoryImage ?? undefined}
      isLoading={loadingCategories}
    />
  )
}

export default CardCategorie
