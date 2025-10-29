'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
// Asegúrate de importar los estilos de tu componente Slider
import './styles.scss'

import Image from 'next/image'
import React, { useState } from 'react'
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Importa tu componente Slide
import Slide from './Slide/Slide'

// Define la URL de tu imagen de fallback en el directorio public
const DEFAULT_IMAGE_URL = '/images/defaultproduct.png' // <-- Verifica que esta ruta sea correcta

const Slider = ({ loadingProductsDestacados, productsDestacados }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const hasFeaturedProducts =
    !loadingProductsDestacados && productsDestacados && productsDestacados.length > 0

  const getImageUrl = productDestacado => {
    if (productDestacado?.imagenPrincipal?.url) {
      return productDestacado.imagenPrincipal.url
    }
    return DEFAULT_IMAGE_URL
  }

  // Placeholder si está cargando o no hay datos
  if (loadingProductsDestacados) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-100 dark:bg-gray-700 rounded-lg">
        Cargando productos destacados...
      </div>
    )
  }

  if (!hasFeaturedProducts) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">No hay productos destacados disponibles.</p>
      </div>
    )
  }

  return (
    <div className="slider_container">
      {/* Swiper Principal */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000'
        }}
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        // >>>>>> Añadir Listener onSlideChange al Swiper Principal <<<<<<
        onSlideChange={swiper => {}}
      >
        {productsDestacados.map(productDestacado => {
          return (
            // Usar el ID del producto destacado como key
            <SwiperSlide key={productDestacado.id}>
              {/* Pasa el objeto productDestacado completo al componente Slide */}
              <Slide productDestacado={productDestacado} />
            </SwiperSlide>
          )
        })}
      </Swiper>

      {/* Swiper de Miniaturas */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        // Ajusta slidesPerView. Math.min(productsDestacados.length, N) es un buen patrón
        slidesPerView={productsDestacados.length > 0 ? Math.min(productsDestacados.length, 5) : 1}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        // >>>>>> Añadir Listener onSlideChange al Swiper de Miniaturas <<<<<<
        onSlideChange={swiper => {}}
      >
        {productsDestacados.map(productDestacado => {
          const imageUrl = getImageUrl(productDestacado)

          return (
            // Usar el ID del producto destacado como key
            <SwiperSlide key={productDestacado.id}>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={`Miniatura de ${productDestacado.product?.nombre || 'producto'}`}
                  width={100} // Tamaño para next/image
                  height={100} // Tamaño para next/image
                  objectFit="cover" // Cubre el área
                  className="imageSlide" // Mantén tu clase CSS
                />
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Slider
