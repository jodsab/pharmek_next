import type { District } from '@/core/domain/entities/District'

export interface DistrictRepository {
  findAll(): Promise<District[]>
  findById(id: number): Promise<District | null>
  findByName?(name: string): Promise<District | null>
  create?(input: Omit<District, 'id' | 'created_at'>): Promise<District>
  update?(id: number, patch: Partial<Omit<District, 'id'>>): Promise<District>
  delete?(id: number): Promise<void>
}
