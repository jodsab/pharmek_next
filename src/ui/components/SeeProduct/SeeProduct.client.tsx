'use client'
import { motion, Variants } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import type { Product } from '@/core/domain/entities/Product'

import img_product from './assets/product.png'

interface SeeProductClientProps {
  product: Product
  defaultImage?: string | StaticImageData
  maxCategories?: number
  showIndicaciones?: boolean
  placeholderText?: string
  basePath?: string
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2 } }
}

const SeeProductClient = ({
  product,
  defaultImage = img_product,
  maxCategories = 3,
  showIndicaciones = true,
  placeholderText = 'Producto sin nombre',
  basePath = '/productos'
}: SeeProductClientProps): React.JSX.Element => {
  const router = useRouter()
  const categories = product?.categoriesOnProducts?.slice(0, maxCategories) || []
  const productImage = product?.images?.[0]?.url || defaultImage
  const productName = product?.nombre || placeholderText
  const href = `${basePath}/${product?.id}`

  return (
    <motion.div
      className="see_product_container"
      role="link"
      aria-label={`Ver ${productName}`}
      onClick={() => router.push(href)}
      // Hover unificado para todas las secciones (Productos + Destacados)
      whileHover={{ scale: 1.05 }}
      // Layout + entrada/salida suaves (funciona si el padre usa AnimatePresence)
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
    >
      {/* Mantengo exactamente tus clases y estructura */}
      <Link
        href={href}
        className="img_see_container"
        onClick={e => e.stopPropagation()} // evita doble navegación
      >
        {categories.length > 0 && (
          <ul className="tags">
            {categories.map((categoryLink, index) => (
              <li key={`${product.id}-category-${index}`}>
                {categoryLink?.category?.categoryName}
              </li>
            ))}
          </ul>
        )}

        <Image width={250} height={250} src={productImage} alt={`Imagen de ${productName}`} />
      </Link>

      <div className="info" onClick={e => e.stopPropagation()}>
        <p className="name" title={productName}>
          {productName}
        </p>
        {showIndicaciones && product.indicaciones && (
          <p className="indicaciones" title={product.indicaciones}>
            {product.indicaciones}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default SeeProductClient
