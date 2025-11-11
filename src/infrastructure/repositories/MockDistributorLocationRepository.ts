import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import type {
  DistributorLocationRepository,
  LocationFilters
} from '@/core/domain/repositories/DistributorLocationRepository'

export class MockDistributorLocationRepository implements DistributorLocationRepository {
  private rows: DistributorLocation[]
  private nextId: number

  constructor(seed?: DistributorLocation[]) {
    this.rows = seed ?? [
      {
        id: 1,
        created_at: new Date().toISOString(),
        cellphone: '999111222',
        address: 'Av. Javier Prado 123',
        businessHours: '8:00 a. m. - 6:00 p. m.',
        id_district: 2, // San Isidro
        id_distributor: 1, // Distribuidora Lima Centro
        longitude: '-77.0301',
        latitude: '-12.0922',
        googleUrl: 'https://maps.google.com/?q=-12.0922,-77.0301',
        distributor: { id: 1, name: 'Distribuidora Lima Centro' },
        district: { id: 2, name: 'San Isidro' }
      },
      {
        id: 2,
        created_at: new Date().toISOString(),
        cellphone: '988777666',
        address: 'Av. La Fontana 789',
        businessHours: '9:00 a. m. - 7:00 p. m.',
        id_district: 1, // La Molina
        id_distributor: 2, // Vetfar Peru
        longitude: '-76.9421',
        latitude: '-12.0705',
        googleUrl: 'https://maps.google.com/?q=-12.0705,-76.9421',
        distributor: { id: 2, name: 'Vetfar Peru S.A.C.' },
        district: { id: 1, name: 'La Molina' }
      }
    ]

    this.nextId = (this.rows.at(-1)?.id ?? 0) + 1
  }

  private async delay(ms = 80): Promise<void> {
    await new Promise<void>(r => setTimeout(r, ms))
  }

  private matchFilters(row: DistributorLocation, f?: LocationFilters): boolean {
    if (!f) return true
    if (f.distributorIds?.length) {
      if (row.id_distributor == null || !f.distributorIds.includes(row.id_distributor)) return false
    }
    if (
      f.districtIds?.length &&
      (row.id_district == null || !f.districtIds.includes(row.id_district))
    )
      return false
    if (f.text && f.text.trim() !== '') {
      const t = f.text.trim().toLowerCase()
      const hay =
        (row.address ?? '').toLowerCase().includes(t) ||
        (row.cellphone ?? '').toLowerCase().includes(t)
      if (!hay) return false
    }
    return true
  }

  // ======== READS ========

  async findAll(filters?: LocationFilters): Promise<DistributorLocation[]> {
    await this.delay()
    return this.rows.filter(r => this.matchFilters(r, filters)).map(r => ({ ...r }))
  }

  async findById(id: number): Promise<DistributorLocation | null> {
    await this.delay()
    const found = this.rows.find(r => r.id === id)
    return found ? { ...found } : null
  }

  async findByDistributor(distributorId: number): Promise<DistributorLocation[]> {
    await this.delay()
    return this.rows.filter(r => r.id_distributor === distributorId).map(r => ({ ...r }))
  }

  // ======== STUBS / NO-OPS ========
  // (para cumplir la interfaz sin implementar lógica que no usarás)

  async upsert(
    _loc: Partial<DistributorLocation> & { id_distributor: number }
  ): Promise<DistributorLocation> {
    await this.delay()
    throw new Error('upsert() no está implementado en MockDistributorLocationRepository')
  }

  async batchUpdateGeo(
    _rows: Array<{
      id: number
      latitude?: string | null
      longitude?: string | null
      googleUrl?: string | null
    }>
  ): Promise<void> {
    await this.delay()
    // no-op intencional
  }

  async delete(id: number): Promise<void> {
    await this.delay()
    const idx = this.rows.findIndex(r => r.id === id)
    if (idx >= 0) this.rows.splice(idx, 1)
  }
}

export default MockDistributorLocationRepository
