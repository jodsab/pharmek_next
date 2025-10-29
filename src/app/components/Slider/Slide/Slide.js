import './styles.scss'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { WHATSAPP } from '@/core/whatsapp'

const Slide = ({ productDestacado }) => {
  const {
    product,
    titulo = 'MENSAJE DE ANUNCIO',
    descripcion,
    imagenPrincipal = ''
  } = productDestacado

  const { nombre = 'Nombre no disponible' } = product

  return (
    <div className="slide_container">
      <div className="title">
        <h3 className="product_name mb-5">{nombre}</h3>
        <div className="product_content">
          <p className="product_message">
            {titulo}
            <span className="green"> Y MANTÉN SANO A TU MASCOTA!</span>
          </p>
          <p className="product_description">
            {!descripcion ? 'La descripción del producto no está disponible ahora' : descripcion}
          </p>
        </div>
        <Link
          href={WHATSAPP}
          target="_blank"
          className="bg-green py-2 px-4 rounded hover:bg-blue mt-5"
        >
          <span className="flex gap-3">
            <p className="text-white">Solicítalo ahora</p>
            <FaWhatsapp size={22} color={'white'} />
          </span>
        </Link>
      </div>
      <div className="imagen_container">
        <Image
          src={imagenPrincipal?.url || '/images/products/defaultproduct.png'}
          alt="producto pracanex"
          width={400}
          height={400}
          className="imagen"
        />
      </div>
    </div>
  )
}

export default Slide
