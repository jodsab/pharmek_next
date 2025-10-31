'use client'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function CallToActionButton() {
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { y: 10 },
      {
        y: 0,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut'
      }
    )
  }, [])

  return (
    <button ref={buttonRef} className="cta-button">
      Ver productos
    </button>
  )
}
