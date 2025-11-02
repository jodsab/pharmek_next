import type { Product } from '@/core/domain/entities/Product'

export interface DistributorRow {
  id: number
  createdAt: string
  name: string
}

export interface DistributorsLocationRow {
  id: number
  createdAt: string
  cellphone?: string
  address?: string
  businessHours?: string
  latitude: number
  longitude: number
  googleMapUrl?: string
  distributor?: {
    name?: string
  }
  idDistrict?: number
  products?: Product[]
}
