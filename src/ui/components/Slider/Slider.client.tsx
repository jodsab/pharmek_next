'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './styles.scss'

import Image from 'next/image'
import React, { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SlideItem {
  id: string
  imagenPrincipal?: {
    url: string
  }
  [key: string]: any
}

interface SliderClientProps<T extends SlideItem> {
  items: T[]
  isLoading?: boolean
  defaultImageUrl?: string
  maxThumbnails?: number
  renderSlide: (item: T) => React.ReactNode
  getImageUrl?: (item: T) => string
  getAltText?: (item: T) => string
  onSlideChange?: (activeIndex: number, realIndex: number) => void
  emptyMessage?: string
  loadingMessage?: string
}

const SliderClient = <T extends SlideItem>({
  items = [],
  isLoading = false,
  defaultImageUrl = '/images/defaultproduct.png',
  maxThumbnails = 5,
  renderSlide,
  getImageUrl,
  getAltText,
  onSlideChange,
  emptyMessage = 'No hay elementos disponibles.',
  loadingMessage = 'Cargando...'
}: SliderClientProps<T>) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const defaultGetImageUrl = (item: T): string => {
    return item?.imagenPrincipal?.url || defaultImageUrl
  }

  const defaultGetAltText = (item: T): string => {
    return `Imagen de ${item.id}`
  }

  const imageUrlGetter = getImageUrl || defaultGetImageUrl
  const altTextGetter = getAltText || defaultGetAltText

  const handleSlideChange = (swiper: SwiperType) => {
    onSlideChange?.(swiper.activeIndex, swiper.realIndex)
  }

  if (isLoading) {
    return (
      <div className="slider_loading">
        <div className="loading_content">
          <div className="spinner" />
          <p>{loadingMessage}</p>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="slider_empty">
        <p>{emptyMessage}</p>
      </div>
    )
  }

  const slidesPerView = Math.min(items.length, maxThumbnails)

  return (
    <div className="slider_container">
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000'
          } as React.CSSProperties
        }
        loop={items.length > 1}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        onSlideChange={handleSlideChange}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>{renderSlide(item)}</SwiperSlide>
        ))}
      </Swiper>

      {items.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={items.length > maxThumbnails}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {items.map(item => {
            const imageUrl = imageUrlGetter(item)
            const altText = altTextGetter(item)

            return (
              <SwiperSlide key={item.id}>
                <Image
                  src={imageUrl}
                  alt={altText}
                  width={100}
                  height={100}
                  className="imageSlide"
                  style={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </div>
  )
}

export default SliderClient
