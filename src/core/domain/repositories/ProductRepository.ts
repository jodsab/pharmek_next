import type { Product } from '../entities/Product'

export interface ProductRepository {
  findAll(): Promise<Product[]>
  findById(id: number): Promise<Product | null>
  findByCategory(categoryId: string): Promise<Product[]>
  findFeatured(limit?: number): Promise<Product[]>
  search?(query: string): Promise<Product[]>
  create?(product: Omit<Product, 'id'>): Promise<Product>
  update?(id: number, product: Partial<Product>): Promise<Product>
  delete?(id: number): Promise<void>
}
