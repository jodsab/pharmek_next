import { Distributor } from './Distributor'
import { District } from './District'
import { Product } from './Product'

export type DistributorLocation = {
  id: number
  created_at?: string
  cellphone?: string
  address?: string
  businessHours?: string
  id_district?: number
  id_distributor?: number
  longitude?: string
  latitude?: string
  googleUrl?: string
  district?: District
  distributor?: Distributor
  products?: Product[]
}
