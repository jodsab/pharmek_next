'use client'

import './styles.scss'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

import img_product from './assets/product.png'

interface ProductImage {
  url: string
  alt?: string
}

interface Category {
  categoryName: string
}

interface CategoryOnProduct {
  category: Category
}

interface Product {
  id: string
  nombre?: string
  indicaciones?: string
  images?: ProductImage[]
  categoriesOnProducts?: CategoryOnProduct[]
}

interface SeeProductClientProps {
  product: Product | null
  defaultImage?: string | StaticImageData
  maxCategories?: number
  showIndicaciones?: boolean
  placeholderText?: string
  basePath?: string
}

const SeeProductClient = ({
  product,
  defaultImage = img_product,
  maxCategories = 3,
  showIndicaciones = true,
  placeholderText = 'Producto sin nombre',
  basePath = '/productos'
}: SeeProductClientProps) => {
  if (!product) {
    return (
      <div className="see_product_container skeleton">
        <div className="img_see_container">
          <div className="skeleton-image" />
        </div>
        <div className="info">
          <div className="skeleton-line name" />
          <div className="skeleton-line indicaciones" />
        </div>
      </div>
    )
  }

  const categories = product.categoriesOnProducts?.slice(0, maxCategories) || []
  const productImage = product.images?.[0]?.url || defaultImage
  const productName = product.nombre || placeholderText

  return (
    <Link href={`${basePath}/${product.id}`} className="see_product_container">
      <div className="img_see_container">
        {categories.length > 0 && (
          <ul className="tags">
            {categories.map((categoryLink, index) => (
              <li key={`${product.id}-category-${index}`}>{categoryLink.category.categoryName}</li>
            ))}
          </ul>
        )}

        <Image width={250} height={250} src={productImage} alt={`Imagen de ${productName}`} />
      </div>

      <div className="info">
        <p className="name" title={productName}>
          {productName}
        </p>
        {showIndicaciones && product.indicaciones && (
          <p className="indicaciones" title={product.indicaciones}>
            {product.indicaciones}
          </p>
        )}
      </div>
    </Link>
  )
}

export default SeeProductClient
