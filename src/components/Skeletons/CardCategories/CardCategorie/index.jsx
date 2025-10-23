import './styles.scss'

import Link from 'next/link'
import React from 'react'
import { FaPills } from 'react-icons/fa'

const CardCategorie = ({ loadingCategories, category }) => {
  if (loadingCategories) {
    return (
      <div className="categorias_card">
        <div className="img_container rounded-3xl skeleton"></div>
        <p className="skeleton-text"></p>
      </div>
    )
  }

  return (
    <Link href={'/productos'}>
      <div className="categorias_card">
        <div className="img_container rounded-3xl">
          <FaPills />
        </div>
        <p className="pt-2">{category?.categoryName}</p>
      </div>
    </Link>
  )
}

export default CardCategorie
