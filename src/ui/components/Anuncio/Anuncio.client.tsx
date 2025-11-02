/* eslint-disable prettier/prettier */
'use client'

import './styles.scss'

import { easeInOut, easeOut, motion, type Variants } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import React, { memo, useMemo } from 'react'

import type { AnuncioFeature } from './Anuncio.server'
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

// ✅ Tipados correctamente para FM v12
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut }
  }
}

const featureItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: easeOut }
  }
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
}: AnuncioClientProps): React.JSX.Element => {
  const {
    dogGroup: dogGroupImg = dog_group,
    molecula: moleculaImg = molecula,
    hueso: huesoImg = hueso
  } = images

  const animsEnabled = animations?.enabled !== false

  // Si quieres ajustar stagger según animsEnabled:
  const dynFeaturesContainer: Variants = useMemo(
    () => ({
      hidden: {},
      visible: { transition: { staggerChildren: animsEnabled ? 0.08 : 0 } }
    }),
    [animsEnabled]
  )

  return (
    <section className={`anuncio_background anuncio-${variant} ${className ?? ''}`}>
      <motion.div
        className="anuncio_container content"
        variants={containerVariants}
        {...(animsEnabled ? { initial: 'hidden' as const, animate: 'visible' as const } : {})}
        {...(animsEnabled ? { whileHover: { scale: 1.005 } as const } : {})}
        transition={{ type: 'tween' }}
      >
        <motion.div
          className="molecula left"
          aria-hidden={true}
          {...(animsEnabled && animations?.floatDecorations !== false
            ? {
              animate: { y: [0, -6, 0] } as const,
              transition: { duration: 4, repeat: Infinity, ease: easeInOut } as const
            }
            : {
              animate: {} as const
            })}
        >
          <Image
            width={100}
            height={100}
            src={moleculaImg}
            alt="Decoración molécula izquierda"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div
          className="molecula right"
          aria-hidden={true}
          {...(animsEnabled && animations?.floatDecorations !== false
            ? {
              animate: { y: [0, 6, 0] } as const,
              transition: { duration: 4.5, repeat: Infinity, ease: easeInOut } as const
            }
            : {
              animate: {} as const
            })}
        >
          <Image
            width={100}
            height={100}
            src={moleculaImg}
            alt="Decoración molécula derecha"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Imagen principal */}
        <motion.div
          className="visual_wrapper"
          {...(animsEnabled ? { whileHover: { scale: 1.015 } as const } : {})}
          transition={{ duration: 0.25 }}
        >
          <Image
            className="dog_group"
            width={480}
            height={420}
            src={dogGroupImg}
            alt="Grupo de mascotas"
            priority
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 480px"
          />
        </motion.div>

        {/* Contenido */}
        <div className={`anuncio_content ${align === 'center' ? 'center' : ''}`}>
          <h3 className="anuncio_title">{title}</h3>
          {subtitle && <p className="anuncio_subtitle">{subtitle}</p>}

          <motion.ul
            className="features_list"
            variants={dynFeaturesContainer}
            {...(animsEnabled && animations?.revealFeatures !== false
              ? { initial: 'hidden' as const, animate: 'visible' as const }
              : {})}
          >
            {features.map((feature, index) => (
              <motion.li
                key={`feature-${index}`}
                className="feature_item"
                variants={featureItem}
                {...(animsEnabled ? { whileHover: { x: 4 } as const } : {})}
              >
                <span className={`feature_ball ${feature.color}`} />
                <p className="feature_text">{feature.text}</p>
              </motion.li>
            ))}
          </motion.ul>

          {showCTA && (
            <div className="cta_area">
              {ctaComponent}
              <motion.div
                className="hueso_holder"
                aria-hidden={true}
                {...(animsEnabled
                  ? {
                    animate: { rotate: [0, -6, 0, 6, 0] } as const,
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    } as const
                  }
                  : {})}
              >
                <Image
                  className="hueso_decoration"
                  width={90}
                  height={90}
                  src={huesoImg}
                  alt="Decoración hueso"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default memo(AnuncioClient)
