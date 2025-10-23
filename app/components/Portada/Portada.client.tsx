'use client'
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

type Props = {
  title?: string
  subtitle?: string
  images?: { src: string; alt?: string }[]
  primaryColor?: string
  secondaryColor?: string
}

export default function PortadaClient({
  title = 'Cuidamos la Salud de tus Amigos',
  subtitle = 'Soluciones veterinarias innovadoras para el bienestar y la vitalidad.',
  images = [
    {
      src: 'https://placehold.co/400x300/F5F5F5/008556?text=Mascota%20Feliz%201',
      alt: 'Mascota sana'
    },
    {
      src: 'https://placehold.co/400x300/F5F5F5/1226aa?text=Investigacion%20Vet',
      alt: 'Investigación veterinaria'
    }
  ],
  primaryColor = '#008556',
  secondaryColor = '#1226aa'
}: Props) {
  const heroRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLElement | null>(null)
  const subtitleRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLButtonElement | null>(null)
  const image1Ref = useRef<HTMLImageElement | null>(null)
  const image2Ref = useRef<HTMLImageElement | null>(null)
  const cursorRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
        if (existing) {
          existing.addEventListener('load', () => resolve())
          if ((existing as any).loaded) return resolve()
          return
        }
        const s = document.createElement('script')
        s.src = src
        s.onload = () => {
          ; (s as any).loaded = true
          resolve()
        }
        s.onerror = () => reject(new Error(`Failed to load ${src}`))
        document.body.appendChild(s)
      })

    const ensureGsap = async () => {
      try {
        if (typeof window === 'undefined') return
        if (typeof (window as any).gsap === 'undefined') {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js')
        }
        if (typeof (window as any).gsap?.TextPlugin === 'undefined') {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/TextPlugin.min.js')
        }
        if ((window as any).gsap?.registerPlugin && (window as any).TextPlugin) {
          ; (window as any).gsap.registerPlugin((window as any).TextPlugin)
        }
        startAnimations()
      } catch {
        /* silent */
      }
    }

    const startAnimations = () => {
      const gsap = (window as any).gsap
      if (!gsap) return
      const elemsExist =
        heroRef.current &&
        titleRef.current &&
        subtitleRef.current &&
        ctaRef.current &&
        image1Ref.current &&
        image2Ref.current &&
        cursorRef.current
      if (!elemsExist) return
      gsap.set(titleRef.current, { text: '' })
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to(titleRef.current, {
        duration: 2.5,
        text: title,
        ease: 'none'
      })
        .to(cursorRef.current, {
          opacity: 0,
          ease: 'power2.inOut',
          repeat: -1,
          duration: 0.5,
          yoyo: true
        })
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: -1.5 },
          '<0.5'
        )
        .fromTo(
          ctaRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, delay: -0.6, ease: 'back.out(1.7)' },
          '<0.3'
        )
        .fromTo(
          image1Ref.current,
          { x: -100, opacity: 0, rotate: -5 },
          { x: 0, opacity: 1, rotate: 0, duration: 1.5, ease: 'power2.out' },
          '<0.5'
        )
        .fromTo(
          image2Ref.current,
          { x: 100, opacity: 0, rotate: 5 },
          { x: 0, opacity: 1, rotate: 0, duration: 1.5, ease: 'power2.out' },
          '<0'
        )
      gsap.to(heroRef.current, {
        backgroundPosition: '100% 0%',
        duration: 30,
        ease: 'none',
        repeat: -1,
        yoyo: true
      })
    }

    ensureGsap()
    return () => { }
  }, [title])

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden p-4 sm:p-8 md:p-12"
      style={{
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        backgroundSize: '200% 200%'
      }}
      aria-label="Portada"
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1
          ref={titleRef as any}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg inline-block whitespace-nowrap"
          style={{ borderRight: '2px solid' }}
        >
          <span />
          <span ref={cursorRef as any} className="ml-1 animate-pulse">
            |
          </span>
        </h1>
        <p
          ref={subtitleRef as any}
          className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md"
        >
          {subtitle}
        </p>
        <button
          ref={ctaRef}
          className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto shadow-xl"
          onClick={() => undefined}
          aria-label="Ver Productos"
        >
          Ver Productos
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>

      <img
        ref={image1Ref}
        src={images[0].src}
        alt={images[0].alt || ''}
        width={256}
        height={192}
        className="absolute bottom-16 left-16 w-32 h-24 sm:w-48 sm:h-36 md:w-64 md:h-48 rounded-lg shadow-2xl object-cover transform -rotate-6 hidden md:block"
        onError={e =>
        ((e.target as HTMLImageElement).src =
          'https://placehold.co/400x300/F5F5F5/008556?text=Error%20Imagen')
        }
      />
      <img
        ref={image2Ref}
        src={images[1].src}
        alt={images[1].alt || ''}
        width={256}
        height={192}
        className="absolute top-16 right-16 w-32 h-24 sm:w-48 sm:h-36 md:w-64 md:h-48 rounded-lg shadow-2xl object-cover transform rotate-6 hidden md:block"
        onError={e =>
        ((e.target as HTMLImageElement).src =
          'https://placehold.co/400x300/F5F5F5/1226aa?text=Error%20Imagen')
        }
      />

      <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white opacity-10 blur-3xl bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" />
      <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white opacity-10 blur-3xl top-0 right-0 transform translate-x-1/3 -translate-y-1/3" />
    </section>
  )
}
