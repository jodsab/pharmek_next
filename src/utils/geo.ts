export const toNumberOrNull = (v: string | null | undefined): number | null => {
  if (v == null || v.trim() === '') return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

// Adaptador de DistributorLocation -> marcador de mapa
import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
export const toMarker = (row: DistributorLocation) => ({
  id: row.id,
  title: row.distributor?.name ?? 'Distribuidor',
  address: row.address ?? '',
  lat: toNumberOrNull(row.latitude),
  lng: toNumberOrNull(row.longitude)
})
