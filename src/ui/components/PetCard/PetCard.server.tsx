import { StaticImageData } from 'next/image'
import React from 'react'

import PetCardClient from './PetCard.client'

interface Pet {
  id: string
  name: string
  breed: string
  image?: string | StaticImageData
  age?: number
}

interface PetCardProps {
  pet?: Pet
  isLoading?: boolean
}

const PetCard = ({ pet, isLoading = false }: PetCardProps) => {
  return <PetCardClient pet={pet} isLoading={isLoading} />
}

export default PetCard
