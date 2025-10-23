import { StaticImageData } from 'next/image'
import React from 'react'

import AnuncioClient from './Anuncio.client'

interface AnuncioFeature {
  text: string
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple'
}

interface AnuncioProps {
  title?: string
  features?: AnuncioFeature[]
  showCTA?: boolean
  ctaComponent?: React.ReactNode
  images?: {
    dogGroup?: string | StaticImageData
    molecula?: string | StaticImageData
    hueso?: string | StaticImageData
  }
}

const Anuncio = ({ title, features, showCTA = true, ctaComponent, images }: AnuncioProps) => {
  return (
    <AnuncioClient
      title={title}
      features={features}
      showCTA={showCTA}
      ctaComponent={ctaComponent}
      images={images}
    />
  )
}

export default Anuncio
