'use client'

import './styles.scss'

import { domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { memo, useMemo } from 'react'
import { FaArrowRight, FaHeart, FaLeaf, FaShieldAlt, FaStar } from 'react-icons/fa'

/**
 * Optimizaciones clave:
 * - Framer Motion via LazyMotion (domAnimation) + variants con stagger.
 * - Disminuye wrappers motion.* (1 contenedor + elementos necesarios).
 * - whileInView + viewport={{ once: true }} para evitar animaciones repetidas.
 * - useReducedMotion para respetar preferencias del usuario.
 * - memo + useMemo para evitar recreaciones y re-renderes.
 * - Mantiene exactamente las mismas classNames para no perder estilos.
 */

const FEATURES = [
  { icon: <FaShieldAlt />, text: 'Calidad Certificada', color: 'blue' },
  { icon: <FaHeart />, text: 'Cuidado Animal', color: 'red' },
  { icon: <FaLeaf />, text: 'Productos Naturales', color: 'green' }
] as const

const HeroSectionComponent: React.FC = () => {
  const shouldReduce = useReducedMotion()

  // Variants con animaciones baratas (opacity/transform) y tiempos cortos
  const container = useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.45,
          ease: 'easeOut',
          when: 'beforeChildren',
          staggerChildren: shouldReduce ? 0 : 0.08
        }
      }
    }),
    [shouldReduce]
  )

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
    }),
    [shouldReduce]
  )

  const imageWrap = useMemo(
    () => ({
      hidden: { opacity: 0, scale: shouldReduce ? 1 : 0.98 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 }
      }
    }),
    [shouldReduce]
  )

  return (
    <section className="hero_section">
      {/* Elementos flotantes puramente con CSS (no JS) */}
      <div className="floating_elements">
        <div className="float_pill pill_1" />
        <div className="float_pill pill_2" />
        <div className="float_pill pill_3" />
        <div className="float_circle circle_1" />
        <div className="float_circle circle_2" />
      </div>

      <div className="hero_container">
        {/* Contenido principal (un solo contenedor con stagger) */}
        <LazyMotion features={domAnimation} strict>
          <m.div
            className="hero_content"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
          >
            <m.div className="hero_badge" variants={item}>
              <FaStar className="badge_icon" />
              <span>Más de 25 años de experiencia</span>
            </m.div>

            <m.h1 className="hero_title" variants={item}>
              Salud Animal
              <span className="title_highlight"> de Excelencia</span>
            </m.h1>

            <m.p className="hero_subtitle" variants={item}>
              Productos veterinarios de alta calidad para el cuidado y bienestar de tus animales.
              Innovación y confianza garantizada.
            </m.p>

            <m.div className="hero_features" variants={item}>
              {FEATURES.map((feature, index) => (
                <div key={index} className={`feature_item ${feature.color}`}>
                  <div className="feature_icon">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </m.div>

            <m.div className="hero_actions" variants={item}>
              <Link href="/productos" className="btn_primary" prefetch={false}>
                <span>Ver Productos</span>
                <FaArrowRight className="btn_icon" />
              </Link>
              <Link href="/contactenos" className="btn_secondary" prefetch={false}>
                <span>Contactar</span>
              </Link>
            </m.div>
          </m.div>

          {/* Imagen del héroe */}
          <m.div
            className="hero_image_container"
            variants={imageWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="image_glow" />
            <div className="image_wrapper">
              <Image
                src="/assets/images/home/doc.webp"
                alt="Productos Pharmek"
                fill
                priority
                className="hero_image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>

            {/* Cards flotantes con entrada simple (evitamos múltiples motions) */}
            <m.div className="info_card card_1" variants={item}>
              <div className="card_number">500+</div>
              <div className="card_label">Productos</div>
            </m.div>

            <m.div className="info_card card_2" variants={item}>
              <div className="card_number">100%</div>
              <div className="card_label">Garantía</div>
            </m.div>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  )
}

// memo para evitar re-renderes si no cambian las props
const HeroSection = memo(HeroSectionComponent)
export default HeroSection
