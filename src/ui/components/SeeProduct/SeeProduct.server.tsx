import { StaticImageData } from 'next/image'
import React from 'react'

import SeeProductClient from './SeeProduct.client'

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
  defaultImage,
  maxCategories = 3,
  showIndicaciones = true,
  placeholderText = 'Producto sin nombre',
  basePath = '/productos'
}: SeeProductProps) => {
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
