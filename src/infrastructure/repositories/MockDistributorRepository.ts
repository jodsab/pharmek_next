import type { DistributorRepository } from '@/core/domain/repositories/DistributorRepository'

export class MockDistributorRepository implements DistributorRepository {
  private rows: import('@/core/domain/entities/DistributorLocation').DistributorLocation[]
  private nextId: number

  constructor(
    seed?: import('@/core/domain/entities/DistributorLocation').DistributorLocation[]
  ) {
    this.rows = seed ?? [
      {
        id: 1,
        created_at: new Date().toISOString(),
        cellphone: '999111222',
        address: 'Av. Javier Prado 123',
        businessHours: '8:00 a. m. - 6:00 a. m.',
        id_district: 2,
        id_distributor: 1,
        longitude: '-77.0301',
        latitude: '-12.0922',
        googleUrl: 'https://maps.google.com/?q=-12.0922,-77.0301',
        distributor: { id: 1, name: 'Distribuidora Lima Centro' }
      },
      {
        id: 2,
        created_at: new Date().toISOString(),
        cellphone: '988777666',
        address: 'Av. La Fontana 789',
        businessHours: '9:00 a. m. - 7:00 p. m.',
        id_district: 1,
        id_distributor: 2,
        longitude: '-76.9421',
        latitude: '-12.0705',
        googleUrl: 'https://maps.google.com/?q=-12.0705,-76.9421',
        distributor: { id: 2, name: 'Vetfar Peru S.A.C.' }
      }
    ]

    this.nextId = (this.rows.at(-1)?.id ?? 0) + 1
  }

  private async delay(ms = 120): Promise<void> {
    await new Promise<void>(r => {
      setTimeout(() => r(), ms)
    })
  }

  async findAll(): Promise<import('@/core/domain/entities/DistributorLocation').DistributorLocation[]> {
    await this.delay()
    return this.rows.map(r => ({ ...r }))
  }

  async findById(
    id: number
  ): Promise<import('@/core/domain/entities/DistributorLocation').DistributorLocation | null> {
    await this.delay()
    const found = this.rows.find(r => r.id === id)
    return found ? { ...found } : null
  }

  async findByDistrict(
    districtId: number
  ): Promise<import('@/core/domain/entities/DistributorLocation').DistributorLocation[]> {
    await this.delay()
    return this.rows.filter(r => r.id_district === districtId).map(r => ({ ...r }))
  }
}

export default MockDistributorRepository
