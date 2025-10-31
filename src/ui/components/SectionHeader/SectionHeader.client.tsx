'use client'

import './styles.scss'

import Image, { StaticImageData } from 'next/image'
import React, { memo, useEffect, useRef, useState } from 'react'
import { IoSparklesSharp } from 'react-icons/io5'

interface SectionHeaderClientProps {
  title: string
  subtitle: string
  src: string | StaticImageData
  imageSize?: number
}

function useInView<T extends HTMLElement>(opts: IntersectionObserverInit = { threshold: 0.2 }) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current || visible) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -15% 0px', ...opts }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [opts, visible])
  return { ref, visible }
}

const SectionHeaderClient: React.FC<SectionHeaderClientProps> = ({
  title,
  subtitle,
  src,
  imageSize = 100
}) => {
  const { ref, visible } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`section_header_container section_header_lite ${visible ? 'is-visible' : ''}`}
    >
      <div className="image_and_title_container">
        <div className="img_container" aria-hidden>
          <Image
            className="front"
            src={src}
            width={imageSize}
            height={imageSize}
            alt={`${title} icon`}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 64px, 100px"
          />
        </div>

        <div className="title_wrapper">
          <h2 className="section_title">
            <span className="title_text">{title}</span>
            <span className="title_gradient" />
          </h2>
        </div>
      </div>

      <div className="green_space" role="note">
        <div className="subtitle_content">
          <IoSparklesSharp className="sparkle_icon" />
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default memo(SectionHeaderClient)
