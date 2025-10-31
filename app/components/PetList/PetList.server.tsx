import React from 'react'

import PetListClient from './PetList.client'

interface PetListProps {
  limit?: number
}

const PetList = ({ limit = 3 }: PetListProps) => {
  // Si necesitas fetch real, hazlo así:
  // const pets = await fetchPets(limit)

  const pets = []

  return <PetListClient pets={pets} isLoading={false} />
}

export default PetList
