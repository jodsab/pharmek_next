'use client'

import {
  AlertTriangle,
  Calendar,
  Filter,
  Heart,
  HelpCircle,
  MapPin,
  Plus,
  Search
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const mockAnimals = [
  {
    id: '1',
    name: 'Luna',
    type: 'dog',
    age: '2 años',
    breed: 'Golden Retriever Mix',
    description:
      'Luna es una perrita muy cariñosa que fue encontrada en las calles. Necesita un hogar lleno de amor.',
    location: 'Bogotá, Colombia',
    image: '/golden-retriever-mix-dog-sitting-in-grass-looking-.png',
    status: 'urgent',
    dateAdded: '2024-01-15',
    likes: 24,
    isLiked: false
  },
  {
    id: '2',
    name: 'Milo',
    type: 'cat',
    age: '1 año',
    breed: 'Gato Doméstico',
    description: 'Milo es un gatito juguetón que busca una familia que lo cuide y lo ame.',
    location: 'Medellín, Colombia',
    image: '/golden-retriever-mix-dog-sitting-in-grass-looking-.png',
    status: 'available',
    dateAdded: '2024-01-10',
    likes: 18,
    isLiked: true
  },
  {
    id: '3',
    name: 'Bella',
    type: 'dog',
    age: '3 años',
    breed: 'Labrador Mix',
    description:
      'Bella se está recuperando de una cirugía menor y pronto estará lista para adopción.',
    location: 'Cali, Colombia',
    image: '/golden-retriever-mix-dog-sitting-in-grass-looking-.png',
    status: 'recovering',
    dateAdded: '2024-01-08',
    likes: 31,
    isLiked: false
  }
]

export default function AnimalsGallery() {
  const router = useRouter()
  const [animals, setAnimals] = useState(mockAnimals)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const handleLike = (animalId: string) => {
    setAnimals(prev =>
      prev.map(animal =>
        animal.id === animalId
          ? {
            ...animal,
            isLiked: !animal.isLiked,
            likes: animal.isLiked ? animal.likes - 1 : animal.likes + 1
          }
          : animal
      )
    )
  }

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch =
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || animal.type === selectedType
    const matchesStatus = selectedStatus === 'all' || animal.status === selectedStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent':
        return 'bg-destructive text-destructive-foreground'
      case 'available':
        return 'bg-primary text-primary-foreground'
      case 'recovering':
        return 'bg-accent text-accent-foreground'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'urgent':
        return 'Urgente'
      case 'available':
        return 'Disponible'
      case 'recovering':
        return 'Recuperándose'
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with CTAs */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Animales que Necesitan tu <span className="gradient-text">Ayuda</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Cada animal tiene una historia única. Ayúdanos a encontrarles el hogar que merecen o
              reporta casos que requieran atención veterinaria.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-8"
              onClick={() => router.push('/albergue/formulario')}
              aria-label="Reportar Animal en Peligro"
            >
              <Plus className="w-5 h-5 mr-2" />
              Reportar Animal en Peligro
            </button>
            {/*             <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground h-11 px-8 bg-transparent"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Busco Ayuda
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-accent text-accent-foreground hover:bg-accent h-11 px-8 bg-transparent"
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Tengo un Caso
            </button> */}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-xl p-6 mb-8 shadow-sm border">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar por nombre o raza..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                  className="bg-background border border-border rounded-md px-3 py-2 text-sm"
                >
                  <option value="all">Todos los tipos</option>
                  <option value="dog">Perros</option>
                  <option value="cat">Gatos</option>
                  <option value="other">Otros</option>
                </select>
              </div>

              <select
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-2 text-sm"
              >
                <option value="all">Todos los estados</option>
                <option value="urgent">Urgente</option>
                <option value="available">Disponible</option>
                <option value="recovering">Recuperándose</option>
              </select>
            </div>
          </div>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map(animal => (
            <div
              key={animal.id}
              className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => router.push(`/albergue/${animal.id}`)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); router.push(`/albergue/${animal.id}`) } }}
            >
              <div className="relative">
                <Image
                  src={`/images/auximages${animal.image}` || '/placeholder.svg'}
                  alt={animal.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-3 left-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getStatusColor(animal.status)}`}>
                  {getStatusText(animal.status)}
                </span>
                <button
                  className={`absolute top-3 right-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-background bg-background/80 ${animal.isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                  onClick={(e) => { e.stopPropagation(); handleLike(animal.id) }}
                >
                  <Heart className={`w-4 h-4 ${animal.isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="pb-3 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{animal.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {animal.breed} • {animal.age}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Heart className="w-3 h-3 mr-1" />
                      {animal.likes}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-0 p-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {animal.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {animal.location}
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  Agregado el {new Date(animal.dateAdded).toLocaleDateString()}
                </div>

                <div className="flex gap-2">
                  <button
                    className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4"
                    onClick={(e) => { e.stopPropagation(); router.push(`/albergue/${animal.id}`) }}
                  >
                    Ver Perfil
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground h-10 px-4 bg-transparent">Seguir</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No se encontraron animales con los filtros seleccionados</p>
              <p className="text-sm">Intenta ajustar tus criterios de búsqueda</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
