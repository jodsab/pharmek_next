// app/components/PetList/PetList.server.tsx
import PetListClient, { type Pet } from './PetList.client'

// Si luego vas a pedir del backend:
// const pets = await fetchPets(limit)

export default function PetList() {
  // TIPADO explícito para evitar "implicitly has type 'any[]'"
  const pets: Pet[] = []

  return <PetListClient pets={pets} isLoading={false} />
}
