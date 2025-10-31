'use client'

import './styles.scss'

import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import type { AnuncioFeature } from './Anuncio'
import dog_group from './assets/dog_group.png'
import hueso from './assets/hueso.png'
import molecula from './assets/molecula.png'
import Solicitalo from './components/Solicitalo'

interface AnuncioClientProps {
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

const defaultFeatures: AnuncioFeature[] = [
  { text: 'Envíos en 24-48h a todo el país', color: 'green' },
  { text: 'Productos certificados y garantizados', color: 'blue' },
  { text: 'Atención personalizada para tu mascota', color: 'purple' }
]

const containerVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}

const featuresContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const featureItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } }
}

const AnuncioClient = ({
  title = 'Cuida a tus peludos con productos de calidad',
  subtitle = 'Todo lo que necesitas en un solo lugar. Seguros, recomendados y con envío rápido.',
  features = defaultFeatures,
  showCTA = true,
  ctaComponent = <Solicitalo />,
  animations = { enabled: true, floatDecorations: true, revealFeatures: true },
  images = {},
  variant = 'light',
  align = 'left',
  className
}: AnuncioClientProps) => {
  const {
    dogGroup: dogGroupImg = dog_group,
    molecula: moleculaImg = molecula,
    hueso: huesoImg = hueso
  } = images
  const router = useRouter()
  const animsEnabled = animations?.enabled !== false

  return (
    <section className={`anuncio_background anuncio-${variant} ${className ?? ''}`}>
      <motion.div
        className="anuncio_container content"
        variants={containerVariants}
        initial={animsEnabled ? 'hidden' : false}
        animate={animsEnabled ? 'visible' : false}
        whileHover={animsEnabled ? { scale: 1.005 } : undefined}
        transition={{ type: 'tween' }}
      >
        {/* Decoraciones: moléculas flotando */}
        <motion.div
          className="molecula left"
          aria-hidden
          animate={
            animsEnabled && animations?.floatDecorations !== false ? { y: [0, -6, 0] } : undefined
          }
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image width={100} height={100} src={moleculaImg} alt="Decoración molécula izquierda" />
        </motion.div>

        <motion.div
          className="molecula right"
          aria-hidden
          animate={
            animsEnabled && animations?.floatDecorations !== false ? { y: [0, 6, 0] } : undefined
          }
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image width={100} height={100} src={moleculaImg} alt="Decoración molécula derecha" />
        </motion.div>

        {/* Imagen principal */}
        <motion.div
          className="visual_wrapper"
          whileHover={animsEnabled ? { scale: 1.015 } : undefined}
          transition={{ duration: 0.25 }}
        >
          <Image
            className="dog_group"
            width={480}
            height={420}
            src={dogGroupImg}
            alt="Grupo de mascotas"
            priority
          />
        </motion.div>

        {/* Contenido */}
        <div className={`anuncio_content ${align === 'center' ? 'center' : ''}`}>
          <h3 className="anuncio_title">{title}</h3>
          {subtitle && <p className="anuncio_subtitle">{subtitle}</p>}

          <AnimatePresence initial={false}>
            <motion.ul
              className="features_list"
              variants={featuresContainer}
              initial={animsEnabled && animations?.revealFeatures !== false ? 'hidden' : false}
              animate={animsEnabled && animations?.revealFeatures !== false ? 'visible' : false}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={`feature-${index}`}
                  className="feature_item"
                  variants={featureItem}
                  whileHover={animsEnabled ? { x: 4 } : undefined}
                >
                  <span className={`feature_ball ${feature.color}`} />
                  <p className="feature_text">{feature.text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>

          {showCTA && (
            <div className="cta_area">
              {ctaComponent}
              <motion.div
                className="hueso_holder"
                aria-hidden
                animate={animsEnabled ? { rotate: [0, -6, 0, 6, 0] } : undefined}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  className="hueso_decoration"
                  width={90}
                  height={90}
                  src={huesoImg}
                  alt="Decoración hueso"
                />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default AnuncioClient
