import type { District } from '@/core/domain/entities/District'
import type { DistrictRepository } from '@/core/domain/repositories/DistrictRepository'

export class MockDistrictRepository implements DistrictRepository {
  private rows: District[]
  private nextId: number

  constructor(seed?: District[]) {
    this.rows = seed ?? [
      { id: 1, name: 'La Molina', created_at: new Date().toISOString() },
      { id: 2, name: 'San Isidro', created_at: new Date().toISOString() },
      { id: 3, name: 'Miraflores', created_at: new Date().toISOString() },
      { id: 4, name: 'Ate', created_at: new Date().toISOString() }
    ]

    this.nextId = (this.rows.at(-1)?.id ?? 0) + 1
  }

  private async delay(ms = 100): Promise<void> {
    await new Promise<void>(r => {
      setTimeout(() => r(), ms)
    })
  }

  async findAll(): Promise<District[]> {
    await this.delay()
    return [...this.rows].sort((a, b) => a.name.localeCompare(b.name))
  }

  async findById(id: number): Promise<District | null> {
    await this.delay()
    const found = this.rows.find(r => r.id === id)
    return found ? { ...found } : null
  }

  async findByName(name: string): Promise<District | null> {
    await this.delay()
    const n = name.trim().toLowerCase()
    const found = this.rows.find(r => r.name.toLowerCase() === n)
    return found ? { ...found } : null
  }

  async create(input: Omit<District, 'id' | 'created_at'>): Promise<District> {
    await this.delay()
    const row: District = { id: this.nextId++, created_at: new Date().toISOString(), ...input }
    this.rows.push(row)
    return { ...row }
  }
  async delete(id: number): Promise<void> {
    await this.delay()
    const idx = this.rows.findIndex(r => r.id === id)
    if (idx >= 0) this.rows.splice(idx, 1)
  }
}

export default MockDistrictRepository
