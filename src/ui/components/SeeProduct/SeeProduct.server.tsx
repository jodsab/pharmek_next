import './styles.scss'

import { StaticImageData } from 'next/image'
import React from 'react'

import type { Product } from '@/core/domain/entities/Product'

import SeeProductClient from './SeeProduct.client'
interface SeeProductProps {
  product: Product | null
  defaultImage?: string | StaticImageData
  maxCategories?: number
  showIndicaciones?: boolean
  placeholderText?: string
  basePath?: string
}

const SeeProduct = ({
  product,
  defaultImage = '',
  maxCategories = 3,
  showIndicaciones = true,
  placeholderText = 'Producto sin nombre',
  basePath = '/productos'
}: SeeProductProps): React.JSX.Element => {
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
  return (
    <SeeProductClient
      product={product}
      defaultImage={defaultImage}
      maxCategories={maxCategories}
      showIndicaciones={showIndicaciones}
      placeholderText={placeholderText}
      basePath={basePath}
    />
  )
}

export default SeeProduct
