'use client'

import 'aos/dist/aos.css'
import './styles.scss'

import Aos from 'aos'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

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
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="section_header_container">
      <div className="image_and_title_container">
        <div className="img_container">
          <Image
            className="front"
            data-aos="fade-right"
            src={src}
            width={imageSize}
            height={imageSize}
            alt={`${title} icon`}
            priority
          />
        </div>
        <h2 data-aos="fade-up">{title}</h2>
      </div>

      <div className="green_space bordered">
        <p data-aos="fade-left">{subtitle}</p>
        <IoIosArrowForward />
      </div>
    </div>
  )
}

export default SectionHeaderClient
