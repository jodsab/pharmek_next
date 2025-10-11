"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Upload,
  User,
  Building2,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  X,
} from "lucide-react";

export default function SubmissionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: null,
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      location: "",
    },
    caseInfo: {
      title: "",
      description: "",
      animalType: "",
      urgency: "medium",
      category: "",
    },
    images: [],
  });

  const animalTypes = [
    "Perro",
    "Gato",
    "Caballo",
    "Vaca",
    "Oveja",
    "Cerdo",
    "Ave",
    "Otro",
  ];
  const categories = [
    "Emergencia Médica",
    "Adopción",
    "Maltrato Animal",
    "Animal Perdido",
    "Consulta General",
  ];
  const urgencyLevels = [
    { value: "low", label: "Baja", color: "bg-green-100 text-green-800" },
    { value: "medium", label: "Media", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "Alta", color: "bg-red-100 text-red-800" },
  ];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files || []);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 5),
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Aquí enviarías los datos a tu backend
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
              step <= currentStep
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 5 && (
            <div
              className={`w-12 h-1 mx-2 transition-all ${
                step < currentStep ? "bg-primary" : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl gradient-text">
          ¿Qué tipo de usuario eres?
        </CardTitle>
        <p className="text-muted-foreground">
          Selecciona la opción que mejor te describa
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, userType: "regular" }))
            }
            className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
              formData.userType === "regular"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Usuario Regular</h3>
                <p className="text-sm text-muted-foreground">
                  Propietario de mascota o persona que necesita reportar un caso
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, userType: "shelter" }))
            }
            className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
              formData.userType === "shelter"
                ? "border-secondary bg-secondary/5"
                : "border-border hover:border-secondary/50"
            }`}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Albergue/Refugio</h3>
                <p className="text-sm text-muted-foreground">
                  Organización que rescata animales y busca adopciones
                </p>
              </div>
            </div>
          </button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl gradient-text">
          Datos Personales
        </CardTitle>
        <p className="text-muted-foreground">Cuéntanos quién eres</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Nombre completo"
          value={formData.personalInfo.name}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, name: e.target.value },
            }))
          }
        />
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={formData.personalInfo.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, email: e.target.value },
            }))
          }
        />
        <Input
          placeholder="Teléfono"
          value={formData.personalInfo.phone}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, phone: e.target.value },
            }))
          }
        />
        <Input
          placeholder="Ubicación"
          value={formData.personalInfo.location}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, location: e.target.value },
            }))
          }
        />
        {formData.userType === "shelter" && (
          <Input
            placeholder="Nombre del albergue"
            value={formData.personalInfo.organization}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                personalInfo: {
                  ...prev.personalInfo,
                  organization: e.target.value,
                },
              }))
            }
          />
        )}
      </CardContent>
    </Card>
  );

  const renderStep3 = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl gradient-text">
          Detalles del Caso
        </CardTitle>
        <p className="text-muted-foreground">Cuéntanos qué ocurre</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Título del caso"
          value={formData.caseInfo.title}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              caseInfo: { ...prev.caseInfo, title: e.target.value },
            }))
          }
        />
        <textarea
          placeholder="Descripción detallada"
          className="w-full rounded-md border p-2"
          rows="4"
          value={formData.caseInfo.description}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              caseInfo: { ...prev.caseInfo, description: e.target.value },
            }))
          }
        />
        <div className="flex flex-wrap gap-2">
          {animalTypes.map((animal) => (
            <Badge
              key={animal}
              variant={
                formData.caseInfo.animalType === animal ? "default" : "outline"
              }
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  caseInfo: { ...prev.caseInfo, animalType: animal },
                }))
              }
              className="cursor-pointer"
            >
              {animal}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={
                formData.caseInfo.category === cat ? "default" : "outline"
              }
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  caseInfo: { ...prev.caseInfo, category: cat },
                }))
              }
              className="cursor-pointer"
            >
              {cat}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {urgencyLevels.map((level) => (
            <Badge
              key={level.value}
              className={`cursor-pointer ${level.color}`}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  caseInfo: { ...prev.caseInfo, urgency: level.value },
                }))
              }
            >
              {level.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderStep4 = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl gradient-text">Subir Imágenes</CardTitle>
        <p className="text-muted-foreground">Máximo 5 imágenes</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileUpload}
        />
        <div className="grid grid-cols-3 gap-4">
          {formData.images.map((file, index) => (
            <div key={index} className="relative">
              <Image
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                width={200} // ajusta el tamaño según lo necesites
                height={100}
                className="w-full h-24 object-cover rounded"
                unoptimized
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderStep5 = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl gradient-text">Revisión Final</CardTitle>
        <p className="text-muted-foreground">
          Revisa tus datos antes de enviar
        </p>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            {formData.userType === "shelter"
              ? "Publicar Animal en Adopción"
              : "Enviar Reporte de Caso"}
          </h1>
          <p className="text-xl text-muted-foreground">
            Completa el formulario para que nuestro equipo pueda ayudarte
          </p>
        </div>

        {renderStepIndicator()}

        <div className="mb-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
        </div>

        <div className="flex justify-between max-w-2xl mx-auto">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </Button>

          {currentStep < 5 ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !formData.userType) ||
                (currentStep === 2 &&
                  (!formData.personalInfo.name ||
                    !formData.personalInfo.email)) ||
                (currentStep === 3 &&
                  (!formData.caseInfo.title || !formData.caseInfo.description))
              }
              className="flex items-center space-x-2"
            >
              <span>Siguiente</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              className="flex items-center space-x-2 bg-accent hover:bg-accent/90"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Enviar Formulario</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
