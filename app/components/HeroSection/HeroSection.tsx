'use client'

import './styles.scss'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaHeart, FaLeaf, FaShieldAlt, FaStar } from 'react-icons/fa'

const HeroSection = () => {
  const features = [
    { icon: <FaShieldAlt />, text: 'Calidad Certificada', color: 'blue' },
    { icon: <FaHeart />, text: 'Cuidado Animal', color: 'red' },
    { icon: <FaLeaf />, text: 'Productos Naturales', color: 'green' }
  ]

  return (
    <section className="hero_section">
      {/* Elementos flotantes decorativos */}
      <div className="floating_elements">
        <div className="float_pill pill_1"></div>
        <div className="float_pill pill_2"></div>
        <div className="float_pill pill_3"></div>
        <div className="float_circle circle_1"></div>
        <div className="float_circle circle_2"></div>
      </div>

      <div className="hero_container">
        {/* Contenido principal */}
        <div className="hero_content">
          {/* Badge superior */}
          <motion.div
            className="hero_badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaStar className="badge_icon" />
            <span>Más de 25 años de experiencia</span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            className="hero_title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Salud Animal
            <span className="title_highlight"> de Excelencia</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="hero_subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Productos veterinarios de alta calidad para el cuidado y bienestar de tus animales.
            Innovación y confianza garantizada.
          </motion.p>

          {/* Features */}
          <motion.div
            className="hero_features"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <div key={index} className={`feature_item ${feature.color}`}>
                <div className="feature_icon">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Botones CTA */}
          <motion.div
            className="hero_actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Link href="/productos" className="btn_primary">
              <span>Ver Productos</span>
              <FaArrowRight className="btn_icon" />
            </Link>
            <Link href="/contactenos" className="btn_secondary">
              <span>Contactar</span>
            </Link>
          </motion.div>
        </div>

        {/* Imagen del héroe */}
        <motion.div
          className="hero_image_container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image_glow"></div>
          <div className="image_wrapper">
            <Image
              src="/assets/images/home/hero-product.png"
              alt="Productos Pharmek"
              fill
              priority
              className="hero_image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Cards flotantes de información */}
          <motion.div
            className="info_card card_1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="card_number">500+</div>
            <div className="card_label">Productos</div>
          </motion.div>

          <motion.div
            className="info_card card_2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="card_number">100%</div>
            <div className="card_label">Garantía</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
