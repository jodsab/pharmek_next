'use client'

import {
  Calendar,
  Camera,
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
  Stethoscope,
  Weight
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function AnimalProfile({ animal }: { animal: any }) {
  const [isLiked, setIsLiked] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={`/images/auximages${animal.images[currentImageIndex + 5]}` || '/placeholder.svg'}
          alt={animal.name}
          width={500} // Ajusta según tu diseño
          height={500} // Ajusta según tu diseño
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold mb-2">{animal.name}</h1>
          <div className="flex items-center gap-2 text-lg">
            <MapPin className="w-5 h-5" />
            <span>{animal.location}</span>
          </div>
        </div>
        <div className="absolute top-6 right-6 flex gap-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`glass-effect inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-secondary text-secondary-foreground h-9 px-3 ${isLiked ? 'text-red-500' : 'text-white'}`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="glass-effect inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-secondary text-white h-9 px-3">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Story Section */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="text-2xl text-primary">Mi Historia</div>
              </div>
              <div className="p-6">
                <p className="text-lg leading-relaxed text-muted-foreground">{animal.story}</p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  <span>Galería de Fotos</span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {animal.images.map((image: string, index: number) => (
                    <div
                      key={index}
                      className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 ${index === currentImageIndex ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={`/images/auximages${image}` || '/placeholder.svg'}
                        alt={`${animal.name} - Foto ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="text-lg font-semibold">Información Detallada</div>
              </div>
              <div className="space-y-4 p-6">
                {/* Personality */}
                <div>
                  <button
                    onClick={() => toggleSection('personality')}
                    className="w-full justify-between p-0 h-auto text-left inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <span className="font-semibold">Personalidad y Comportamiento</span>
                    <span>{expandedSection === 'personality' ? '−' : '+'}</span>
                  </button>
                  {expandedSection === 'personality' && (
                    <div className="mt-3 p-4 bg-muted rounded-lg">
                      <div className="flex flex-wrap gap-2">
                        {animal.personality.map((trait: string, index: number) => (
                          <span key={index} className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Special Needs */}
                {animal.specialNeeds && (
                  <div>
                    <button
                      onClick={() => toggleSection('needs')}
                      className="w-full justify-between p-0 h-auto text-left inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      <span className="font-semibold">Cuidados Especiales</span>
                      <span>{expandedSection === 'needs' ? '−' : '+'}</span>
                    </button>
                    {expandedSection === 'needs' && (
                      <div className="mt-3 p-4 bg-muted rounded-lg">
                        <p className="text-muted-foreground">{animal.specialNeeds}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="text-lg font-semibold">Información Básica</div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Edad</p>
                    <p className="text-muted-foreground">{animal.age}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Weight className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Raza y Tamaño</p>
                    <p className="text-muted-foreground">
                      {animal.breed} • {animal.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">
                      {animal.gender === 'Macho' ? 'M' : 'H'}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">Género</p>
                    <p className="text-muted-foreground">{animal.gender}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Info */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  <span>Información Médica</span>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <p className="font-semibold mb-2">Estado de Salud</p>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                    {animal.healthStatus}
                  </span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Vacunas</p>
                  <div className="space-y-1">
                    {animal.vaccinations.map((vaccine: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{vaccine}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="text-lg font-semibold">Información de Contacto</div>
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <p className="font-semibold mb-2">{animal.contactInfo.shelter}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">{animal.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm">{animal.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-4">
                  ¡Quiero Adoptarlo!
                </button>
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Ubicación</span>
                </div>
              </div>
              <div className="p-6">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Mapa interactivo</p>
                    <p className="text-xs text-muted-foreground">{animal.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
