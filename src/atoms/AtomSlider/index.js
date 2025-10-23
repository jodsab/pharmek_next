'use client'
// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import './styles.scss'

import Image from 'next/image'
import React from 'react'
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

export default function AtomSlider({ ...props }) {
  const { slides, items } = props

  const handleSlideChange = swiper => {
    // Puedes hacer lo que quieras con el índice de la diapositiva activa
  }

  const ArrData = items?.map((slide, index) => {
    return (
      <SwiperSlide key={slide.id}>
        <div className="img_container">
          <Image
            src={`/img/${slide.src}`}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <>
      <Swiper
        slidesPerView={slides || 1}
        spaceBetween={10}
        loop
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        threshold={1}
      >
        {ArrData}
      </Swiper>
    </>
  )
}
