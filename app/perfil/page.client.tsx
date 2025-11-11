'use client'

import { Filter, Heart, MapPin, Package, Settings, Store, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { useState, type ReactNode } from 'react'

type TabId = 'pets' | 'products' | 'locations' | 'distributors' | 'settings'
type Tab = { id: TabId; label: string; icon: LucideIcon }

const tabs: readonly Tab[] = [
  { id: 'pets', label: 'Mascotas', icon: Heart },
  { id: 'products', label: 'Productos', icon: Package },
  { id: 'locations', label: 'Ubicaciones', icon: MapPin },
  { id: 'distributors', label: 'Distribuidores', icon: Store },
  { id: 'settings', label: 'Configuración', icon: Settings }
] as const

export default function PerfilCLient() {
  const [activeTab, setActiveTab] = useState<TabId>('pets')

  const renderContent = (): ReactNode => {
    switch (activeTab) {
      case 'pets':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <input
                type="text"
                placeholder="Buscar mascotas..."
                className="flex-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                aria-label="Filtrar"
              >
                <Filter className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(pet => (
                <div key={pet} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-muted relative">
                    <Image
                      src="/images/auximages/cute-puppy-daisies.png"
                      alt={`Mascota ${pet}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <button
                      className="absolute top-2 right-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 w-10"
                      aria-label="Favorito"
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{pet % 2 === 0 ? 'Max' : 'Luna'}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pet % 2 === 0 ? 'Golden Retriever' : 'Gato Persa'}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">2 años</span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Adoptable</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'products':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="flex-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                aria-label="Filtrar"
              >
                <Filter className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4].map(product => (
                <div key={product} className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow">
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                        <Image
                          src="/images/auximages/veterinary-medicine-bottle.png"
                          alt={`Producto ${product}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Ivermectina Plus</h3>
                        <p className="text-sm text-muted-foreground">
                          Antiparasitario de amplio espectro
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Bovinos</span>
                          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground p-0 h-auto">
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'locations':
        return (
          <div className="space-y-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <MapPin className="h-5 w-5" />
                  Ubicaciones Guardadas
                </div>
              </div>
              <div className="space-y-4 p-6">
                {[1, 2, 3].map(location => (
                  <div
                    key={location}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">
                        Clínica Veterinaria{' '}
                        {location === 1 ? 'Central' : location === 2 ? 'Norte' : 'Sur'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location === 1
                          ? 'Av. Principal 123'
                          : location === 2
                            ? 'Calle Norte 456'
                            : 'Zona Sur 789'}
                      </p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                      Ver en mapa
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'distributors':
        return (
          <div className="space-y-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Store className="h-5 w-5" />
                  Distribuidores Favoritos
                </div>
              </div>
              <div className="space-y-4 p-6">
                {[1, 2, 3].map(distributor => (
                  <div
                    key={distributor}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">
                        Distribuidora{' '}
                        {distributor === 1
                          ? 'VetMed'
                          : distributor === 2
                            ? 'AnimalCare'
                            : 'PetHealth'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Especializada en{' '}
                        {distributor === 1
                          ? 'medicamentos bovinos'
                          : distributor === 2
                            ? 'productos caninos'
                            : 'dermatología veterinaria'}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">⭐ 4.8</span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Entrega rápida</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                      Contactar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'settings':
        return (
          <div className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="text-lg font-semibold">Información Personal</div>
              </div>
              <div className="space-y-4 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nombre</label>
                    <input
                      type="text"
                      defaultValue="Dr. Camilo Bermúdez"
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      defaultValue="camilo.b.g@hotmail.com"
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Teléfono</label>
                    <input
                      type="tel"
                      defaultValue="+57 300 123 4567"
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Especialidad</label>
                    <input
                      type="text"
                      defaultValue="Medicina Veterinaria General"
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <div className="text-lg font-semibold">Preferencias</div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <span>Notificaciones por email</span>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                    Activado
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Modo oscuro</span>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                    Desactivado
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Alertas de productos</span>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                    Activado
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text">Mi Perfil</h1>
        <p className="text-muted-foreground mt-2">Gestiona tus preferencias y configuración</p>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[400px]">{renderContent()}</div>
    </div>
  )
}
