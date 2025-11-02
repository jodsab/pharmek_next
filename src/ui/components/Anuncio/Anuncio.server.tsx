import type { StaticImageData } from 'next/image'
import React from 'react'

import AnuncioClient from './Anuncio.client'

export interface AnuncioFeature {
  text: string
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple'
}

export interface AnuncioProps {
  title?: string
  subtitle?: string
  features?: AnuncioFeature[]
  showCTA?: boolean
  ctaComponent?: React.ReactNode
  animations?: {
    enabled?: boolean
    floatDecorations?: boolean
    revealFeatures?: boolean
  }
  images?: {
    dogGroup?: string | StaticImageData
    molecula?: string | StaticImageData
    hueso?: string | StaticImageData
  }
  variant?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

const Anuncio = ({
  title = '',
  subtitle = '',
  features = [{ text: '', color: 'red' }],
  showCTA = true,
  ctaComponent = <></>,
  animations = { enabled: false, floatDecorations: false, revealFeatures: false },
  images = { dogGroup: '', molecula: '', hueso: '' },
  variant = 'light',
  align = 'left',
  className = ''
}: AnuncioProps): React.JSX.Element => {
  // 🔧 Con exactOptionalPropertyTypes es más seguro pasar valores normalizados:
  const propsForClient = {
    title: title ?? undefined,
    subtitle: subtitle ?? undefined,
    features: features ?? undefined,
    showCTA,
    ctaComponent: ctaComponent ?? undefined,
    animations: animations ?? undefined,
    images: images ?? undefined,
    variant,
    align,
    className: className ?? undefined
  }

  return <AnuncioClient {...propsForClient} />
}

export default Anuncio
