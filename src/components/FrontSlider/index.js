'use client'
import './styles.scss'

import React from 'react'

import AtomSlider from '@/atoms/AtomSlider'
import { IMG_DESKTOP, IMG_MOBILE } from '@/core/frontImages'

const FrontSlider = () => {
  return (
    <>
      <div className="swiper_container">
        <div className="swiper_desktop">
          <AtomSlider items={IMG_DESKTOP} />
        </div>
        <div className="swiper_mobile">
          <AtomSlider items={IMG_MOBILE} />
        </div>
      </div>
    </>
  )
}

export default FrontSlider
