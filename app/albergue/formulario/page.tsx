'use client'

import { ArrowLeft, ArrowRight, Building2, CheckCircle, User, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import type React from 'react'


type FormData = {
  userType: 'regular' | 'shelter' | null
  personalInfo: {
    name: string
    email: string
    phone: string
    organization: string
    location: string
  }
  caseInfo: {
    title: string
    description: string
    animalType: string
    urgency: 'low' | 'medium' | 'high'
    category: string
  }
  images: File[]
}

export default function SubmissionForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    userType: null,
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      location: ''
    },
    caseInfo: {
      title: '',
      description: '',
      animalType: '',
      urgency: 'medium',
      category: ''
    },
    images: []
  })

  const animalTypes = ['Perro', 'Gato', 'Caballo', 'Vaca', 'Oveja', 'Cerdo', 'Ave', 'Otro']
  const categories = [
    'Emergencia Médica',
    'Adopción',
    'Maltrato Animal',
    'Animal Perdido',
    'Consulta General'
  ]
  type Urgency = 'low' | 'medium' | 'high'
  const urgencyLevels: { value: Urgency; label: string; color: string }[] = [
    { value: 'low', label: 'Baja', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Media', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'Alta', color: 'bg-red-100 text-red-800' }
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 5)
    }))
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = () => {
    // Aquí enviarías los datos a tu backend
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {[1, 2, 3, 4, 5].map(step => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${step <= currentStep
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
              }`}
          >
            {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 5 && (
            <div
              className={`w-12 h-1 mx-2 transition-all ${step < currentStep ? 'bg-primary' : 'bg-muted'
                }`}
            />
          )}
        </div>
      ))}
    </div>
  )

  const renderStep1 = () => (
    <div className="max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 border-b text-center">
        <div className="text-2xl gradient-text">¿Qué tipo de usuario eres?</div>
        <p className="text-muted-foreground">Selecciona la opción que mejor te describa</p>
      </div>
      <div className="space-y-6 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, userType: 'regular' }))}
            className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${formData.userType === 'regular'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
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
            onClick={() => setFormData(prev => ({ ...prev, userType: 'shelter' }))}
            className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${formData.userType === 'shelter'
                ? 'border-secondary bg-secondary/5'
                : 'border-border hover:border-secondary/50'
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
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 border-b text-center">
        <div className="text-2xl gradient-text">Datos Personales</div>
        <p className="text-muted-foreground">Cuéntanos quién eres</p>
      </div>
      <div className="space-y-4 p-6">
        <input
          placeholder="Nombre completo"
          value={formData.personalInfo.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, name: e.target.value }
            }))
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={formData.personalInfo.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, email: e.target.value }
            }))
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
        <input
          placeholder="Teléfono"
          value={formData.personalInfo.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, phone: e.target.value }
            }))
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
        <input
          placeholder="Ubicación"
          value={formData.personalInfo.location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, location: e.target.value }
            }))
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
        {formData.userType === 'shelter' && (
          <input
            placeholder="Nombre del albergue"
            value={formData.personalInfo.organization}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData(prev => ({
                ...prev,
                personalInfo: {
                  ...prev.personalInfo,
                  organization: e.target.value
                }
              }))
            }
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        )}
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 border-b text-center">
        <div className="text-2xl gradient-text">Detalles del Caso</div>
        <p className="text-muted-foreground">Cuéntanos qué ocurre</p>
      </div>
      <div className="space-y-4 p-6">
        <input
          placeholder="Título del caso"
          value={formData.caseInfo.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData(prev => ({
              ...prev,
              caseInfo: { ...prev.caseInfo, title: e.target.value }
            }))
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
        <textarea
          placeholder="Descripción detallada"
          className="w-full rounded-md border p-2"
          rows={4}
          value={formData.caseInfo.description}
          onChange={e =>
            setFormData(prev => ({
              ...prev,
              caseInfo: { ...prev.caseInfo, description: e.target.value }
            }))
          }
        />
        <div className="flex flex-wrap gap-2">
          {animalTypes.map(animal => (
            <span
              key={animal}
              onClick={() =>
                setFormData(prev => ({
                  ...prev,
                  caseInfo: { ...prev.caseInfo, animalType: animal }
                }))
              }
              className={`cursor-pointer inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${formData.caseInfo.animalType === animal ? 'bg-primary text-primary-foreground border-transparent' : ''}`}
            >
              {animal}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <span
              key={cat}
              onClick={() =>
                setFormData(prev => ({
                  ...prev,
                  caseInfo: { ...prev.caseInfo, category: cat }
                }))
              }
              className={`cursor-pointer inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${formData.caseInfo.category === cat ? 'bg-primary text-primary-foreground border-transparent' : ''}`}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {urgencyLevels.map(level => (
            <span
              key={level.value}
              className={`cursor-pointer inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${level.color}`}
              onClick={() =>
                setFormData(prev => ({
                  ...prev,
                  caseInfo: { ...prev.caseInfo, urgency: level.value }
                }))
              }
            >
              {level.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 border-b text-center">
        <div className="text-2xl gradient-text">Subir Imágenes</div>
        <p className="text-muted-foreground">Máximo 5 imágenes</p>
      </div>
      <div className="space-y-4 p-6">
        <input type="file" multiple accept="image/*" onChange={handleFileUpload} className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-sm file:font-medium file:text-secondary-foreground hover:file:bg-secondary/80" />
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
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div className="max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 border-b text-center">
        <div className="text-2xl gradient-text">Revisión Final</div>
        <p className="text-muted-foreground">Revisa tus datos antes de enviar</p>
      </div>
      <div className="p-6">
        <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            {formData.userType === 'shelter'
              ? 'Publicar Animal en Adopción'
              : 'Enviar Reporte de Caso'}
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
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 bg-transparent inline-flex justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input hover:bg-accent hover:text-accent-foreground h-9 px-3 disabled:opacity-50 disabled:pointer-events-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !formData.userType) ||
                (currentStep === 2 &&
                  (!formData.personalInfo.name || !formData.personalInfo.email)) ||
                (currentStep === 3 && (!formData.caseInfo.title || !formData.caseInfo.description))
              }
              className="flex items-center space-x-2 inline-flex justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 disabled:opacity-50 disabled:pointer-events-none"
            >
              <span>Siguiente</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center space-x-2 inline-flex justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent hover:bg-accent/90 text-accent-foreground h-9 px-4"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Enviar Formulario</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
