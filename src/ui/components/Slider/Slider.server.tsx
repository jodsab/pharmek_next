import React from 'react'

import SliderClient from './Slider.client'

interface SlideItem {
  id: string
  imagenPrincipal?: {
    url: string
  }
  [key: string]: any
}

interface SliderProps<T extends SlideItem> {
  items?: T[]
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

const Slider = <T extends SlideItem>({
  items = [],
  isLoading = false,
  ...props
}: SliderProps<T>) => {
  return <SliderClient items={items} isLoading={isLoading} {...props} />
}

export default Slider
