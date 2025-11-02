/* eslint-disable prettier/prettier */
'use client'

import './styles.scss'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  FaBoxOpen,
  FaBuildingCircleArrowRight,
  FaCapsules,
  FaCertificate,
  FaClipboardList,
  FaSyringe
} from 'react-icons/fa6'

import type { Product, ProductImage } from '@/core/domain/entities/Product'

const DEFAULT_IMAGE_URL = '/images/defaultproduct.png'

const ProductoSolo = ({ data }: { data: Product }): React.JSX.Element => {
  const {
    id,
    nombre,
    composicion,
    dosis_y_via,
    indicaciones,
    presentaciones,
    registro_senasa,
    images = []
  } = data

  const [mainImageUrl, setMainImageUrl] = useState<string>(images?.[0]?.url || DEFAULT_IMAGE_URL)
  const hasRealImages = Array.isArray(images) && images.length > 0

  const infoCards = [
    {
      icon: <FaCapsules />,
      title: 'Composición',
      content: composicion,
      color: 'blue'
    },
    {
      icon: <FaSyringe />,
      title: 'Dosis y Vía',
      content: dosis_y_via,
      color: 'purple'
    },
    {
      icon: <FaClipboardList />,
      title: 'Indicaciones',
      content: indicaciones,
      color: 'green'
    },
    ...(registro_senasa
      ? [
        {
          icon: <FaCertificate />,
          title: 'Registro SENASA',
          content: registro_senasa,
          color: 'orange'
        }
      ]
      : []),
    ...(presentaciones
      ? [
        {
          icon: <FaBoxOpen />,
          title: 'Presentaciones',
          content: presentaciones,
          color: 'cyan'
        }
      ]
      : [])
  ]

  return (
    <div className="producto_solo_container">
      {/* Header del producto */}
      <motion.div
        className="producto_header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="producto_title">{nombre || 'Producto sin nombre'}</h1>
      </motion.div>

      <div className="producto_content">
        {/* Galería de imágenes */}
        <div className="producto_gallery">
          <div className="main_image_container">
            <Image
              src={mainImageUrl}
              alt={`Imagen de ${nombre || 'producto'}`}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="main_image"
              priority
            />
          </div>

          {hasRealImages && images?.length > 1 && (
            <div className="thumbnails_container">
              {images.map((image: ProductImage, index: number) => {
                if (!image.url) return null

                return (
                  <button
                    key={image.id ?? index}
                    type="button"
                    className={`thumbnail ${image.url === mainImageUrl ? 'active' : ''}`}
                    onClick={() => setMainImageUrl(image.url!)} // <-- ahora siempre string
                    aria-label={`Miniatura ${index + 1}`}
                  >
                    <Image
                      src={image.url}
                      alt={`Miniatura ${index + 1}`}
                      width={80}
                      height={80}
                      className="thumbnail_image"
                    />
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="producto_info">
          <div className="info_grid">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                className={`info_card ${card.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="card_header">
                  <div className="card_icon">{card.icon}</div>
                  <h3 className="card_title">{card.title}</h3>
                </div>
                <p className="card_content">{card.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Acciones */}
          <motion.div
            className="producto_actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href={`https://wa.me/?text=Hola, me interesa el producto ${nombre || ''} (ID: ${id || ''}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn_whatsapp"
            >
              <FaWhatsapp />
              <span>Solicítalo ahora</span>
            </a>

            <button className="btn_distribuidor">
              <FaBuildingCircleArrowRight />
              <span>Buscar distribuidor</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductoSolo
