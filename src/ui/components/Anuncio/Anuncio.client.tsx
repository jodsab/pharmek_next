'use client'

import './styles.scss'

import Image, { StaticImageData } from 'next/image'
import React from 'react'

import dog_group from './assets/dog_group.png'
import hueso from './assets/hueso.png'
import molecula from './assets/molecula.png'
import Solicitalo from './components/Solicitalo'

interface AnuncioFeature {
  text: string
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple'
}

interface AnuncioClientProps {
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

const defaultFeatures: AnuncioFeature[] = [
  { text: 'Lorem ipsum dolor sit amet', color: 'red' },
  { text: 'Lorem ipsum dolor sit amet consectetur', color: 'blue' },
  { text: 'Lorem ipsum dolor sit amet consectetur', color: 'green' }
]

const AnuncioClient = ({
  title = 'Lorem ipsum dolor sit amet consecte turmagnis metus blandids a',
  features = defaultFeatures,
  showCTA = true,
  ctaComponent = <Solicitalo />,
  images = {}
}: AnuncioClientProps) => {
  const { dogGroup = dog_group, molecula: moleculaImg = molecula, hueso: huesoImg = hueso } = images

  return (
    <div className="anuncio_background">
      <div className="anuncio_container content">
        <Image
          className="molecula left"
          width={100}
          height={100}
          src={moleculaImg}
          alt="Decoración molécula"
        />
        <Image
          className="molecula right"
          width={100}
          height={100}
          src={moleculaImg}
          alt="Decoración molécula"
        />
        <Image
          className="dog_group"
          width={400}
          height={400}
          src={dogGroup}
          alt="Grupo de mascotas"
          priority
        />

        <div className="anuncio_content">
          <h3 className="anuncio_title">{title}</h3>

          <ul className="features_list">
            {features.map((feature, index) => (
              <li key={`feature-${index}`} className="feature_item">
                <div className={`feature_ball ${feature.color}`} />
                <p className="feature_text">{feature.text}</p>
              </li>
            ))}
          </ul>

          {showCTA && (
            <div className="cta_area">
              {ctaComponent}
              <Image
                className="hueso_decoration"
                width={80}
                height={80}
                src={huesoImg}
                alt="Decoración hueso"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnuncioClient
