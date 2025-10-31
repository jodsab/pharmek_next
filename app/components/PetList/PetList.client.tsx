'use client'

import 'aos/dist/aos.css'
import './styles.scss'

import SectionHeader from '@components/SectionHeader'
import Aos from 'aos'
import React, { useEffect } from 'react'

import hogar from './assets/hogar.png'

interface Pet {
  id: string
  name: string
  breed?: string
  age?: number
  // Agrega otros campos según tu modelo
}

interface PetListClientProps {
  pets?: Pet[]
  isLoading?: boolean
}

const PetListClient = ({ pets = [], isLoading = false }: PetListClientProps) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true
    })
  }, [])

  const displayPets = pets.length > 0 ? pets : Array(3).fill(null)

  return (
    <section className="section_hogar content">
      <SectionHeader
        title="HOGAR ADOPCIÓN"
        subtitle="Conoce a tu nuevo compañero de vida"
        src={hogar}
      />
      {/*       <ul className="pet_list" data-aos="fade-up">
        {displayPets.map((pet, index) => (
          <li key={pet?.id || `pet-skeleton-${index}`}>
            <PetCard pet={pet} isLoading={isLoading || !pet} />
          </li>
        ))}
      </ul> */}
    </section>
  )
}

export default PetListClient
