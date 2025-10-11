"use client";

import { useState } from "react";
import {
  Heart,
  MapPin,
  Calendar,
  Filter,
  Search,
  Plus,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const mockAnimals = [
  {
    id: "1",
    name: "Luna",
    type: "dog",
    age: "2 años",
    breed: "Golden Retriever Mix",
    description:
      "Luna es una perrita muy cariñosa que fue encontrada en las calles. Necesita un hogar lleno de amor.",
    location: "Bogotá, Colombia",
    image: "/golden-retriever-mix-dog-sitting-in-grass-looking-.png",
    status: "urgent",
    dateAdded: "2024-01-15",
    likes: 24,
    isLiked: false,
  },
  {
    id: "2",
    name: "Milo",
    type: "cat",
    age: "1 año",
    breed: "Gato Doméstico",
    description:
      "Milo es un gatito juguetón que busca una familia que lo cuide y lo ame.",
    location: "Medellín, Colombia",
    image: "/golden-retriever-mix-dog-sitting-in-grass-looking-.png",
    status: "available",
    dateAdded: "2024-01-10",
    likes: 18,
    isLiked: true,
  },
  {
    id: "3",
    name: "Bella",
    type: "dog",
    age: "3 años",
    breed: "Labrador Mix",
    description:
      "Bella se está recuperando de una cirugía menor y pronto estará lista para adopción.",
    location: "Cali, Colombia",
    image: "/golden-retriever-mix-dog-sitting-in-grass-looking-.png",
    status: "recovering",
    dateAdded: "2024-01-08",
    likes: 31,
    isLiked: false,
  },
];

export default function AnimalsGallery() {
  const [animals, setAnimals] = useState(mockAnimals);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleLike = (animalId) => {
    setAnimals((prev) =>
      prev.map((animal) =>
        animal.id === animalId
          ? {
              ...animal,
              isLiked: !animal.isLiked,
              likes: animal.isLiked ? animal.likes - 1 : animal.likes + 1,
            }
          : animal
      )
    );
  };

  const filteredAnimals = animals.filter((animal) => {
    const matchesSearch =
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || animal.type === selectedType;
    const matchesStatus =
      selectedStatus === "all" || animal.status === selectedStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "urgent":
        return "bg-destructive text-destructive-foreground";
      case "available":
        return "bg-primary text-primary-foreground";
      case "recovering":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "urgent":
        return "Urgente";
      case "available":
        return "Disponible";
      case "recovering":
        return "Recuperándose";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with CTAs */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Animales que Necesitan tu{" "}
              <span className="gradient-text">Ayuda</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Cada animal tiene una historia única. Ayúdanos a encontrarles el
              hogar que merecen o reporta casos que requieran atención
              veterinaria.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Reportar Animal en Peligro
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg bg-transparent"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Busco Ayuda
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent-foreground hover:bg-accent px-8 py-4 text-lg bg-transparent"
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Tengo un Caso
            </Button>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-xl p-6 mb-8 shadow-sm border">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar por nombre o raza..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
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
                onChange={(e) => setSelectedStatus(e.target.value)}
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
          {filteredAnimals.map((animal) => (
            <Card
              key={animal.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={`/images/auximages${animal.image}` || "/placeholder.svg"}
                  alt={animal.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-3 left-3 ${getStatusColor(
                    animal.status
                  )}`}
                >
                  {getStatusText(animal.status)}
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className={`absolute top-3 right-3 bg-background/80 hover:bg-background ${
                    animal.isLiked ? "text-red-500" : "text-muted-foreground"
                  }`}
                  onClick={() => handleLike(animal.id)}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      animal.isLiked ? "fill-current" : ""
                    }`}
                  />
                </Button>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {animal.name}
                    </h3>
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
              </CardHeader>

              <CardContent className="pt-0">
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
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Ver Perfil
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  >
                    Seguir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">
                No se encontraron animales con los filtros seleccionados
              </p>
              <p className="text-sm">
                Intenta ajustar tus criterios de búsqueda
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
