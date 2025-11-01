'use client'

import './styles.scss'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface SlideProduct {
  nombre?: string
  [key: string]: any
}

interface SlideImage {
  url: string
}

interface SlideData {
  id: string
  product?: SlideProduct
  titulo?: string
  descripcion?: string
  imagenPrincipal?: SlideImage
}

interface SlideClientProps {
  data: SlideData
  defaultImage?: string | StaticImageData
  ctaText?: string
  ctaIcon?: React.ReactNode
  ctaLink?: string
  highlightText?: string
  showCTA?: boolean
  onCTAClick?: () => void
}

const SlideClient = ({
  data,
  defaultImage = '/images/products/defaultproduct.png',
  ctaText = 'Solicítalo ahora',
  ctaIcon = <FaWhatsapp size={22} color="white" />,
  ctaLink,
  highlightText = 'Y MANTÉN SANO A TU MASCOTA!',
  showCTA = true,
  onCTAClick
}: SlideClientProps): React.JSX.Element => {
  const {
    product,
    titulo = 'MENSAJE DE ANUNCIO',
    descripcion = 'La descripción del producto no está disponible ahora',
    imagenPrincipal
  } = data

  const productName = product?.nombre || 'Nombre no disponible'
  const imageUrl = imagenPrincipal?.url || defaultImage

  const handleCTAClick = (): void => {
    onCTAClick?.()
  }

  return (
    <div className="slide_container">
      <div className="slide_content">
        <h3 className="product_name">{productName}</h3>

        <div className="product_info">
          <p className="product_message">
            {titulo}
            {highlightText && <span className="highlight"> {highlightText}</span>}
          </p>
          <p className="product_description">{descripcion}</p>
        </div>

        {showCTA && ctaLink && (
          <Link
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta_button"
            onClick={handleCTAClick}
          >
            <span className="cta_content">
              <p>{ctaText}</p>
              {ctaIcon}
            </span>
          </Link>
        )}
      </div>

      <div className="imagen_container">
        <Image
          src={imageUrl}
          alt={`Imagen de ${productName}`}
          width={400}
          height={400}
          className="imagen"
          priority
        />
      </div>
    </div>
  )
}

export default SlideClient
