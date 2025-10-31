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

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AnimalProfile({ animal }) {
  const [isLiked, setIsLiked] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = section => {
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
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className={`glass-effect ${isLiked ? 'text-red-500' : 'text-white'}`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
          <Button variant="secondary" size="sm" className="glass-effect text-white">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Story Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Mi Historia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">{animal.story}</p>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Galería de Fotos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {animal.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                        index === currentImageIndex ? 'ring-2 ring-primary' : ''
                      }`}
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
              </CardContent>
            </Card>

            {/* Detailed Information */}
            <Card>
              <CardHeader>
                <CardTitle>Información Detallada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Personality */}
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection('personality')}
                    className="w-full justify-between p-0 h-auto text-left"
                  >
                    <span className="font-semibold">Personalidad y Comportamiento</span>
                    <span>{expandedSection === 'personality' ? '−' : '+'}</span>
                  </Button>
                  {expandedSection === 'personality' && (
                    <div className="mt-3 p-4 bg-muted rounded-lg">
                      <div className="flex flex-wrap gap-2">
                        {animal.personality.map((trait, index) => (
                          <Badge key={index} variant="secondary">
                            {trait}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Special Needs */}
                {animal.specialNeeds && (
                  <div>
                    <Button
                      variant="ghost"
                      onClick={() => toggleSection('needs')}
                      className="w-full justify-between p-0 h-auto text-left"
                    >
                      <span className="font-semibold">Cuidados Especiales</span>
                      <span>{expandedSection === 'needs' ? '−' : '+'}</span>
                    </Button>
                    {expandedSection === 'needs' && (
                      <div className="mt-3 p-4 bg-muted rounded-lg">
                        <p className="text-muted-foreground">{animal.specialNeeds}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Información Básica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>

            {/* Health Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  Información Médica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Estado de Salud</p>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {animal.healthStatus}
                  </Badge>
                </div>
                <div>
                  <p className="font-semibold mb-2">Vacunas</p>
                  <div className="space-y-1">
                    {animal.vaccinations.map((vaccine, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{vaccine}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                <Button className="w-full" size="lg">
                  ¡Quiero Adoptarlo!
                </Button>
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Mapa interactivo</p>
                    <p className="text-xs text-muted-foreground">{animal.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
