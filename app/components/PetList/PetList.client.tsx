'use client'

// ❌ No importes CSS global en un Client Component en App Router
// import 'aos/dist/aos.css'
// import './styles.scss'

// ✅ Usa un CSS Module local (crea petlist.module.scss)
import SectionHeader from '@components/SectionHeader'
import Aos from 'aos'
import React, { useEffect } from 'react'

// Si quieres usar la imagen estática aquí, mejor con <Image />,
// pero si SectionHeader acepta string|StaticImport, esto está OK.
import hogar from './assets/hogar.png'
import styles from './petlist.module.scss'

export interface Pet {
  id: string
  name: string
  breed?: string
  age?: number
}

interface PetListClientProps {
  pets?: Pet[]
  isLoading?: boolean
}

const PetListClient = ({ pets = [], isLoading = false }: PetListClientProps) => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true })
  }, [])

  const displayPets = pets.length > 0 ? pets : Array(3).fill(null)

  return (
    <section className={styles.section_hogar}>
      <SectionHeader
        title="HOGAR ADOPCIÓN"
        subtitle="Conoce a tu nuevo compañero de vida"
        src={hogar}
      />

      {/* Ejemplo de render (descomenta cuando tengas PetCard tipado) */}
      {/* <ul className={styles.pet_list} data-aos="fade-up">
        {displayPets.map((pet, index) => (
          <li key={(pet as Pet)?.id ?? `pet-skeleton-${index}`}>
            <PetCard pet={pet as Pet | null} isLoading={isLoading || !pet} />
          </li>
        ))}
      </ul> */}
    </section>
  )
}

export default PetListClient
