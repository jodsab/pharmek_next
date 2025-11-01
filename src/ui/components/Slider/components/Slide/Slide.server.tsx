import { StaticImageData } from 'next/image'
import React from 'react'

import SlideClient from './Slide.client'

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

interface SlideProps {
  data: SlideData
  defaultImage?: string | StaticImageData
  ctaText?: string
  ctaIcon?: React.ReactNode
  ctaLink?: string
  highlightText?: string
  showCTA?: boolean
}

const Slide = ({
  data,
  defaultImage = '/images/products/defaultproduct.png',
  ctaText = 'Solicítalo ahora',
  ctaIcon,
  ctaLink = '',
  highlightText = 'Y MANTÉN SANO A TU MASCOTA!',
  showCTA = true
}: SlideProps): React.JSX.Element => {
  return (
    <SlideClient
      data={data}
      defaultImage={defaultImage}
      ctaText={ctaText}
      ctaIcon={ctaIcon}
      ctaLink={ctaLink}
      highlightText={highlightText}
      showCTA={showCTA}
    />
  )
}

export default Slide
