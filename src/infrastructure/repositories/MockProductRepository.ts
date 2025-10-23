import type { Product } from '@/core/domain/entities/Product'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

import { mockProducts } from '../mocks/products.mock'

export class MockProductRepository implements ProductRepository {
  private products: Product[] = mockProducts

  async findAll(): Promise<Product[]> {
    await this.simulateDelay(800)
    return [...this.products]
  }

  async findById(id: string): Promise<Product | null> {
    await this.simulateDelay(500)
    return this.products.find(p => p.id === id) || null
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    await this.simulateDelay(600)
    return this.products.filter(p =>
      p.categoriesOnProducts?.some(c => c.category.id === categoryId)
    )
  }

  async findFeatured(limit: number = 4): Promise<Product[]> {
    await this.simulateDelay(700)
    return this.products.slice(0, limit)
  }

  async search(query: string): Promise<Product[]> {
    await this.simulateDelay(500)
    const lowerQuery = query.toLowerCase()
    return this.products.filter(
      p =>
        p.nombre.toLowerCase().includes(lowerQuery) ||
        p.indicaciones?.toLowerCase().includes(lowerQuery) ||
        p.composicion?.toLowerCase().includes(lowerQuery)
    )
  }

  private simulateDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
