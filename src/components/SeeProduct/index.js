import './styles.scss'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import img_product from './assets/logopng.png'

const SeeProduct = ({ product }) => {
  const categories = product?.categoriesOnProducts

  return (
    <Link href={`/productos/${product?.id}`} className="see_product_container">
      <div className="img_see_container">
        <ul className="tags">
          {categories?.map((category, index) => (
            <li key={index}>{category.category.categoryName}</li>
          ))}
        </ul>
        {product?.images.length > 0 ? (
          <Image width={200} height={200} src={product?.images[0]?.url} alt="imagen del producto" />
        ) : (
          <Image width={250} height={250} src={img_product} alt="imagen del producto" />
        )}
      </div>

      <div className="info">
        <p className="name">{product?.nombre || 'Producto sin nombre'}</p>
        <p className="indicaciones">{product?.indicaciones}</p>
      </div>
    </Link>
  )
}

export default SeeProduct
