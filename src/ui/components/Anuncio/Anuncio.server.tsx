import { StaticImageData } from 'next/image'
import React from 'react'

import AnuncioClient from './Anuncio.client'

export interface AnuncioFeature {
  text: string
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple'
}

export interface AnuncioProps {
  title?: string
  /** Texto pequeño opcional bajo el título */
  subtitle?: string
  /** Bullets con bolita de color */
  features?: AnuncioFeature[]
  /** Mostrar o no el CTA por defecto */
  showCTA?: boolean
  /** Inyectar un CTA propio si quieres sustituir el default */
  ctaComponent?: React.ReactNode
  /** Control de animaciones si quieres apagarlas en alguna vista */
  animations?: {
    enabled?: boolean
    floatDecorations?: boolean
    revealFeatures?: boolean
  }
  /** Imágenes opcionales para sobreescribir las de assets */
  images?: {
    dogGroup?: string | StaticImageData
    molecula?: string | StaticImageData
    hueso?: string | StaticImageData
  }
  /** Variante visual (por si luego agregas temas) */
  variant?: 'light' | 'dark'
  /** Alignment opcional del contenido (solo texto y CTA) */
  align?: 'left' | 'center'
  /** Clase extra para ajustes locales */
  className?: string
}

const Anuncio = ({
  title,
  subtitle,
  features,
  showCTA = true,
  ctaComponent,
  animations,
  images,
  variant = 'light',
  align = 'left',
  className
}: AnuncioProps) => {
  return (
    <AnuncioClient
      title={title}
      subtitle={subtitle}
      features={features}
      showCTA={showCTA}
      ctaComponent={ctaComponent}
      animations={animations}
      images={images}
      variant={variant}
      align={align}
      className={className}
    />
  )
}

export default Anuncio
