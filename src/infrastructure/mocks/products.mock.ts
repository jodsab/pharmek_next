import type { Category } from '@/core/domain/entities/Category'
import type { Product } from '@/core/domain/entities/Product'

export const mockCategories: Category[] = [
  { id: 1, categoryName: 'Perros' },
  { id: 2, categoryName: 'Gatos' },
  { id: 3, categoryName: 'Aves' },
  { id: 4, categoryName: 'Ganadería' }
]

export const mockProducts: Product[] = [
  {
    id: 1,
    created_at: '2025-08-09T06:31:43.679995Z',
    nombre: 'Vermífugo Plus',
    composicion: 'Ivermectina 1%, Praziquantel 5%',
    indicaciones: 'Tratamiento y control de parásitos internos en perros y gatos',
    dosis_y_via: '1ml por cada 10kg de peso corporal, vía oral',
    registro_senasa: 'A-0123-SENASA',
    animal_mayor_menor: 'Mayor',
    presentaciones: 'Frasco 50ml, Frasco 100ml',
    precio: 45.9,
    stock: 25,
    productsImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500',
        alt: 'Vermífugo Plus'
      }
    ],
    categoriesOnProducts: [{ category: mockCategories[0] }, { category: mockCategories[1] }]
  },
  {
    id: 2,
    created_at: '2025-08-09T06:32:02.424277Z',
    nombre: 'Antipulgas Total',
    composicion: 'Fipronil 10%, Metopreno 5%',
    indicaciones: 'Elimina pulgas, garrapatas y piojos en perros',
    dosis_y_via: 'Aplicación tópica según peso del animal',
    registro_senasa: 'A-0124-SENASA',
    animal_mayor_menor: 'Mayor',
    presentaciones: 'Pipeta 1ml, Pipeta 2ml',
    precio: 28.5,
    stock: 40,
    productsImages: [
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500',
        alt: 'Antipulgas'
      }
    ],
    categoriesOnProducts: [{ category: mockCategories[0] }]
  },
  {
    id: 3,
    created_at: '2025-08-10T08:15:30.123456Z',
    nombre: 'Vitaminas Avícolas Premium',
    composicion: 'Vitaminas A, D3, E, B12, Aminoácidos esenciales',
    indicaciones: 'Suplemento vitamínico para aves de corral y ornamentales',
    dosis_y_via: '5ml por litro de agua de bebida',
    registro_senasa: 'A-0125-SENASA',
    animal_mayor_menor: 'Menor',
    presentaciones: 'Frasco 250ml, Frasco 500ml, Frasco 1L',
    precio: 35.0,
    stock: 30,
    productsImages: [
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500',
        alt: 'Vitaminas Avícolas'
      }
    ],
    categoriesOnProducts: [{ category: mockCategories[2] }]
  },
  {
    id: 4,
    created_at: '2025-08-11T10:20:15.789012Z',
    nombre: 'Antibiótico Ganadero',
    composicion: 'Oxitetraciclina 20%, Excipientes c.s.p.',
    indicaciones: 'Tratamiento de infecciones bacterianas en ganado bovino',
    dosis_y_via: '1ml por cada 20kg de peso, vía intramuscular',
    registro_senasa: 'A-0126-SENASA',
    animal_mayor_menor: 'Mayor',
    presentaciones: 'Frasco 100ml, Frasco 250ml',
    precio: 89.9,
    stock: 15,
    productsImages: [
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500',
        alt: 'Antibiótico Ganadero'
      }
    ],
    categoriesOnProducts: [{ category: mockCategories[3] }]
  },
  {
    id: 5,
    created_at: '2025-08-12T14:30:45.345678Z',
    nombre: 'Shampoo Medicado',
    composicion: 'Clorhexidina 2%, Aloe vera, Vitamina E',
    indicaciones: 'Tratamiento de dermatitis y problemas de piel en perros y gatos',
    dosis_y_via: 'Aplicar sobre pelaje húmedo, masajear y enjuagar',
    registro_senasa: 'A-0127-SENASA',
    animal_mayor_menor: 'Mayor',
    presentaciones: 'Frasco 250ml, Frasco 500ml',
    precio: 22.0,
    stock: 50,
    productsImages: [
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500',
        alt: 'Shampoo Medicado'
      }
    ],
    categoriesOnProducts: [{ category: mockCategories[0] }, { category: mockCategories[1] }]
  },
  {
    id: 6,
    created_at: '2025-08-13T09:45:20.567890Z',
    nombre: 'Alimento Balanceado Premium',
    composicion: 'Proteína 28%, Grasa 15%, Fibra 4%, Vitaminas y minerales',
    indicaciones: 'Alimento completo para perros adultos de todas las razas',
    dosis_y_via: 'Según tabla de dosificación por peso',
    registro_senasa: 'A-0128-SENASA',
    animal_mayor_menor: 'Mayor',
    presentaciones: 'Bolsa 3kg, Bolsa 15kg, Bolsa 20kg',
    precio: 125.0,
    stock: 20,
    productsImages: [
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500',
        alt: 'Alimento Premium'
      }
    ],
    categoriesOnProducts: [{ category: mockCategories[0] }]
  },
  {
    id: 7,
    created_at: '2025-08-14T11:20:30.234567Z',
    nombre: 'Collar Antipulgas',
    composicion: 'Deltametrina 4%, Permetrina 2%',
    indicaciones: 'Protección prolongada contra pulgas y garrapatas',
    dosis_y_via: 'Colocar alrededor del cuello, ajustar correctamente',
    registro_senasa: 'A-0129-SENASA',
    animal_mayor_menor: 'Mayor',
    presentaciones: 'Collar ajustable (hasta 8 meses de protección)',
    precio: 38.9,
    stock: 35,
    productsImages: [
      {
        id: 7,
        url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500',
        alt: 'Collar Antipulgas'
      }
    ],
    categoriesOnProducts: [{ category: mockCategories[0] }, { category: mockCategories[1] }]
  },
  {
    id: 8,
    created_at: '2025-08-15T15:10:40.890123Z',
    nombre: 'Suplemento Articular',
    composicion: 'Glucosamina 500mg, Condroitina 400mg, MSM 200mg',
    indicaciones: 'Apoyo articular para perros mayores o con problemas de movilidad',
    dosis_y_via: '1 tableta por cada 10kg, vía oral con alimento',
    registro_senasa: 'A-0130-SENASA',
    animal_mayor_menor: 'Mayor',
    presentaciones: 'Frasco 60 tabletas, Frasco 120 tabletas',
    precio: 65.0,
    stock: 18,
    productsImages: [
      {
        id: 8,
        url: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500',
        alt: 'Suplemento Articular'
      }
    ],
    categoriesOnProducts: [{ category: mockCategories[0] }]
  }
]
