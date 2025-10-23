'use client'
import './styles.scss'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const PageClient = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    quienes: true // Primera sección visible desde el inicio
  })
  const [isMounted, setIsMounted] = useState(false)
  const observerRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    setIsMounted(true)

    const observers: IntersectionObserver[] = []

    Object.keys(observerRefs.current).forEach(key => {
      const element = observerRefs.current[key]
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }))
            }
          },
          { threshold: 0.15, rootMargin: '50px' }
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  const setRef = (key: string) => (el: HTMLElement | null) => {
    observerRefs.current[key] = el
  }

  return (
    <div className="nosotros_modern_container content">
      {/* Quienes Somos */}
      <section
        className={`nosotros_section nosotros_quienes_somos ${isVisible['quienes'] ? 'nosotros_visible' : ''
          }`}
        ref={setRef('quienes')}
      >
        <div className="nosotros_content_wrapper">
          <div className="nosotros_text_block">
            <div className="nosotros_section_tag">Nuestra Historia</div>
            <h2 className="nosotros_section_title">¿QUIENES SOMOS?</h2>
            <div className="nosotros_text_content">
              <p className="nosotros_description">
                Pharmek International Corporation SAC es una empresa y laboratorio peruano fundado
                en octubre de 2020, dedicado a la fabricación, distribución y comercialización de
                productos veterinarios propios. Comprometido con la salud animal, desarrolla
                soluciones seguras, eficaces y de alta calidad para clínicas, distribuidores y
                productores pecuarios. Gracias a materias primas certificadas, tecnología moderna e
                innovación constante, Pharmek se ha consolidado como una alternativa confiable y
                competitiva en el mercado veterinario.
              </p>
            </div>
          </div>

          <div className="nosotros_image_block">
            <div className="nosotros_image_card nosotros_float_animation">
              <Image
                src={'/grupo.png'}
                alt="Equipo Pharmek International"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                className="nosotros_image"
              />
              <div className="nosotros_image_shine"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section
        className={`nosotros_section nosotros_mision ${isVisible['mision'] ? 'nosotros_visible' : ''
          }`}
        ref={setRef('mision')}
      >
        <div className="nosotros_content_wrapper nosotros_reversed">
          <div className="nosotros_image_block">
            <div className="nosotros_image_card nosotros_float_animation nosotros_delay_1">
              <Image
                src={'/mision.jpeg'}
                alt="Misión Pharmek"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                className="nosotros_image"
              />
              <div className="nosotros_image_shine"></div>
              <div className="nosotros_corner_badge">🎯</div>
            </div>
          </div>

          <div className="nosotros_text_block">
            <div className="nosotros_section_tag">Nuestro Propósito</div>
            <h2 className="nosotros_section_title">MISIÓN</h2>
            <p className="nosotros_description">
              Desarrollar, fabricar y comercializar productos veterinarios de excelencia que
              contribuyan a la salud y bienestar animal, respaldados por procesos productivos
              eficientes, materias primas certificadas y un equipo comprometido con la mejora
              continua y la satisfacción del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section
        className={`nosotros_section nosotros_vision ${isVisible['vision'] ? 'nosotros_visible' : ''
          }`}
        ref={setRef('vision')}
      >
        <div className="nosotros_content_wrapper">
          <div className="nosotros_text_block">
            <div className="nosotros_section_tag">Nuestro Futuro</div>
            <h2 className="nosotros_section_title">VISIÓN</h2>
            <p className="nosotros_description">
              Ser una empresa líder en el sector veterinario latinoamericano, reconocida por la
              calidad, eficacia y seguridad de nuestros productos, el compromiso con nuestros
              clientes y el impulso constante hacia la innovación científica.
            </p>
          </div>

          <div className="nosotros_image_block">
            <div className="nosotros_image_card nosotros_float_animation nosotros_delay_2">
              <Image
                src={'/vision.jpeg'}
                alt="Visión Pharmek"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                className="nosotros_image"
              />
              <div className="nosotros_image_shine"></div>
              <div className="nosotros_corner_badge">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué confiar */}
      <section
        className={`nosotros_section nosotros_confianza ${isVisible['confianza'] ? 'nosotros_visible' : ''
          }`}
        ref={setRef('confianza')}
      >
        <div className="nosotros_content_wrapper nosotros_reversed">
          <div className="nosotros_image_block">
            <div className="nosotros_image_card nosotros_float_animation nosotros_delay_3">
              <Image
                src={'/grupo.png'}
                alt="Confianza Pharmek"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                className="nosotros_image"
              />
              <div className="nosotros_image_shine"></div>
            </div>
          </div>

          <div className="nosotros_text_block">
            <div className="nosotros_section_tag">Nuestro Compromiso</div>
            <h2 className="nosotros_section_title">PORQUE CONFIAR EN NOSOTROS?</h2>

            <div className="nosotros_features_list">
              <div className="nosotros_feature_item nosotros_stagger_1">
                <div className="nosotros_feature_icon">✅</div>
                <p>Fabricación propia con control total de calidad</p>
              </div>

              <div className="nosotros_feature_item nosotros_stagger_2">
                <div className="nosotros_feature_icon">✅</div>
                <p>Insumos de proveedores certificados</p>
              </div>

              <div className="nosotros_feature_item nosotros_stagger_3">
                <div className="nosotros_feature_icon">✅</div>
                <p>Fórmulas seguras y efectivas</p>
              </div>

              <div className="nosotros_feature_item nosotros_stagger_4">
                <div className="nosotros_feature_icon">✅</div>
                <p>Atención personalizada y soporte técnico</p>
              </div>

              <div className="nosotros_feature_item nosotros_stagger_5">
                <div className="nosotros_feature_icon">✅</div>
                <p>Comprometidos con el bienestar animal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageClient
