import type { Distributor } from '@/core/domain/entities/Distributor'
import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import type { District } from '@/core/domain/entities/District'

import { mockProducts } from './products.mock'

export const DISTRIBUTORS_MOCK: Distributor[] = [
  { id: 1, created_at: '2024-01-01T00:00:00Z', name: 'Vet Salud' },
  { id: 2, created_at: '2024-01-05T00:00:00Z', name: 'Mascotas Center' }
]

export const DISTRICTS_MOCK: District[] = [
  { id: 1, created_at: '2024-01-01T00:00:00Z', name: 'San Isidro' },
  { id: 2, created_at: '2024-01-01T00:00:00Z', name: 'Miraflores' }
]

export const DISTRIBUTOR_LOCATIONS_MOCK: DistributorLocation[] = [
  {
    id: 101,
    created_at: '2024-02-01T00:00:00Z',
    id_distributor: 1,
    address: 'Av. Pardo y Aliaga 123',
    businessHours: '9:00 a. m. - 7:00 p. m.',
    cellphone: '+51 987 654 321',
    latitude: '-12.1023', // Convertido a string
    longitude: '-77.0421', // Convertido a string
    googleUrl: 'https://maps.google.com/?q=-12.1023,-77.0421',
    distributor: DISTRIBUTORS_MOCK[0],
    district: DISTRICTS_MOCK[0],
    products: mockProducts.slice(0, 2)
  },
  {
    id: 102,
    created_at: '2024-02-02T00:00:00Z',
    id_distributor: 2,
    address: 'Av. Larco 456',
    businessHours: '8:00 a. m. - 6:00 p. m.',
    cellphone: '+51 912 345 678',
    latitude: '-12.1254', // Convertido a string
    longitude: '-77.0309', // Convertido a string
    googleUrl: 'https://maps.google.com/?q=-12.1254,-77.0309',
    distributor: DISTRIBUTORS_MOCK[1],
    district: DISTRICTS_MOCK[1],
    products: mockProducts.slice(1)
  }
]
