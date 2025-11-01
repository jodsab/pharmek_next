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

function useInView<T extends HTMLElement>(
  opts: IntersectionObserverInit = { threshold: 0.2 }
): { ref: React.MutableRefObject<T | null>; visible: boolean } {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      entries => {
        const first = entries[0] // puede no existir, lo checamos
        if (first && first.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -15% 0px', ...opts }
    )

    observer.observe(node)
    return () => observer.disconnect()
    // Si te molesta la advertencia por objeto `opts`, sustituye deps por campos atómicos:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, opts])

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
