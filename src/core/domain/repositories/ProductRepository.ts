import type { Product } from '../entities/Product'

export interface ProductRepository {
  findAll(): Promise<Product[]>
  findById(id: string): Promise<Product | null>
  findByCategory(categoryId: string): Promise<Product[]>
  findFeatured(limit?: number): Promise<Product[]>
  search?(query: string): Promise<Product[]>
  create?(product: Omit<Product, 'id'>): Promise<Product>
  update?(id: string, product: Partial<Product>): Promise<Product>
  delete?(id: string): Promise<void>
}
