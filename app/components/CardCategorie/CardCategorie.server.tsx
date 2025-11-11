import './styles.scss'

import React from 'react'

import type { Category } from '@/core/domain/entities/Category'

import CardCategorieClient from './CardCategorie.client'
interface CardCategorieProps {
  category: Category
}

const CardCategorie = ({ category }: CardCategorieProps): React.JSX.Element => {
  return <CardCategorieClient category={category} />
}

export default CardCategorie
