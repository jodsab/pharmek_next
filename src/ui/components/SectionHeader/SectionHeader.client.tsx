'use client'

import './styles.scss'

import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { IoSparklesSharp } from 'react-icons/io5'

interface SectionHeaderClientProps {
  title: string
  subtitle: string
  src: string | StaticImageData
  imageSize?: number
}

const SectionHeaderClient = ({
  title,
  subtitle,
  src,
  imageSize = 100
}: SectionHeaderClientProps) => {
  return (
    <div className="section_header_container">
      {/* Imagen y Título */}
      <motion.div
        className="image_and_title_container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Contenedor de imagen con efecto de brillo */}
        <motion.div
          className="img_container"
          initial={{ scale: 0.5, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.2
          }}
          whileHover={{
            scale: 1.08,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <div className="img_glow" />
          <div className="img_ring ring_1"></div>
          <div className="img_ring ring_2"></div>
          <div className="img_ring ring_3"></div>
          <Image
            className="front"
            src={src}
            width={imageSize}
            height={imageSize}
            alt={`${title} icon`}
            priority
          />
        </motion.div>

        {/* Título con efecto de aparición */}
        <motion.div
          className="title_wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: 'easeOut'
          }}
        >
          <h2 className="section_title">
            <span className="title_text">{title}</span>
            <span className="title_gradient"></span>
          </h2>
        </motion.div>
      </motion.div>

      {/* Subtítulo con diseño moderno */}
      <motion.div
        className="green_space"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: 'easeOut'
        }}
        whileHover={{
          scale: 1.03,
          y: -3,
          transition: { duration: 0.3 }
        }}
      >
        <div className="green_space_bg"></div>
        <div className="subtitle_content">
          <IoSparklesSharp className="sparkle_icon" />
          <p>{subtitle}</p>
        </div>
        <div className="shine_effect" />
        <div className="glow_effect"></div>
      </motion.div>
    </div>
  )
}

export default SectionHeaderClient
