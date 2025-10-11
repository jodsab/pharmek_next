"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart, Package, MapPin, Store, Settings, Filter } from "lucide-react";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";

const tabs = [
  { id: "pets", label: "Mascotas", icon: Heart },
  { id: "products", label: "Productos", icon: Package },
  { id: "locations", label: "Ubicaciones", icon: MapPin },
  { id: "distributors", label: "Distribuidores", icon: Store },
  { id: "settings", label: "Configuración", icon: Settings },
];

export default function ProfileTabbed() {
  const [activeTab, setActiveTab] = useState("pets");

  const renderContent = () => {
    switch (activeTab) {
      case "pets":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <Input placeholder="Buscar mascotas..." className="flex-1" />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((pet) => (
                <Card
                  key={pet}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-muted relative">
                    <Image
                      src="/images/auximages/cute-puppy-daisies.png"
                      alt={`Mascota ${pet}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">
                      {pet % 2 === 0 ? "Max" : "Luna"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {pet % 2 === 0 ? "Golden Retriever" : "Gato Persa"}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">2 años</Badge>
                      <Badge variant="outline">Adoptable</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      case "products":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <Input placeholder="Buscar productos..." className="flex-1" />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4].map((product) => (
                <Card
                  key={product}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4">
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
                          <Badge>Bovinos</Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-0 h-auto"
                          >
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      case "locations":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Ubicaciones Guardadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((location) => (
                  <div
                    key={location}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">
                        Clínica Veterinaria{" "}
                        {location === 1
                          ? "Central"
                          : location === 2
                          ? "Norte"
                          : "Sur"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location === 1
                          ? "Av. Principal 123"
                          : location === 2
                          ? "Calle Norte 456"
                          : "Zona Sur 789"}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver en mapa
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );
      case "distributors":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="h-5 w-5" />
                  Distribuidores Favoritos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((distributor) => (
                  <div
                    key={distributor}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">
                        Distribuidora{" "}
                        {distributor === 1
                          ? "VetMed"
                          : distributor === 2
                          ? "AnimalCare"
                          : "PetHealth"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Especializada en{" "}
                        {distributor === 1
                          ? "medicamentos bovinos"
                          : distributor === 2
                          ? "productos caninos"
                          : "dermatología veterinaria"}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">⭐ 4.8</Badge>
                        <Badge variant="outline">Entrega rápida</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Contactar
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nombre</label>
                    <Input defaultValue="Dr. Camilo Bermúdez" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="camilo.b.g@hotmail.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Teléfono</label>
                    <Input defaultValue="+57 300 123 4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Especialidad</label>
                    <Input defaultValue="Medicina Veterinaria General" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferencias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Notificaciones por email</span>
                  <Button variant="outline" size="sm">
                    Activado
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Modo oscuro</span>
                  <Button variant="outline" size="sm">
                    Desactivado
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Alertas de productos</span>
                  <Button variant="outline" size="sm">
                    Activado
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <WithNavbarAndFooter>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text">Mi Perfil</h1>
          <p className="text-muted-foreground mt-2">
            Gestiona tus preferencias y configuración
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b mb-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">{renderContent()}</div>
      </div>
    </WithNavbarAndFooter>
  );
}
