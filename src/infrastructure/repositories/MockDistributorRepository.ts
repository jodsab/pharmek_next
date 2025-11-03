import type { Distributor } from '@/core/domain/entities/Distributor'
import type { DistributorRepository } from '@/core/domain/repositories/DistributorRepository'

export class MockDistributorRepository implements DistributorRepository {
  private rows: Distributor[]
  private nextId: number

  constructor(seed?: Distributor[]) {
    this.rows = seed ?? [
      { id: 1, name: 'Distribuidora Lima Centro', created_at: new Date().toISOString() },
      { id: 2, name: 'Vetfar Peru S.A.C.', created_at: new Date().toISOString() },
      { id: 3, name: 'Cantitop E.I.R.L', created_at: new Date().toISOString() }
    ]

    this.nextId = (this.rows.at(-1)?.id ?? 0) + 1
  }

  private async delay(ms = 120): Promise<void> {
    await new Promise<void>(r => {
      setTimeout(() => r(), ms)
    })
  }

  async findAll(): Promise<Distributor[]> {
    await this.delay()
    return [...this.rows]
  }

  async findById(id: number): Promise<Distributor | null> {
    await this.delay()
    const found = this.rows.find(r => r.id === id)
    return found ? { ...found } : null
  }

  async findByName(name: string): Promise<Distributor | null> {
    await this.delay()
    const n = name.trim().toLowerCase()
    const found = this.rows.find(r => r.name.toLowerCase() === n)
    return found ? { ...found } : null
  }

  async create(input: Omit<Distributor, 'id' | 'created_at'>): Promise<Distributor> {
    await this.delay()
    const row: Distributor = {
      id: this.nextId++,
      created_at: new Date().toISOString(),
      ...input
    }
    this.rows.push(row)
    return { ...row }
  }

  async delete(id: number): Promise<void> {
    await this.delay()
    const idx = this.rows.findIndex(r => r.id === id)
    if (idx >= 0) this.rows.splice(idx, 1)
  }
}

export default MockDistributorRepository
