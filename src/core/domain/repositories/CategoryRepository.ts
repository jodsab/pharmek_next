import type { Category } from '../entities/Category'

export interface CategoryRepository {
  findAll(): Promise<Category[]>
  findById(id: number): Promise<Category | null>
  findByName(categoryName: string): Promise<Category | null>
  search(query: string): Promise<Category[]>
}
