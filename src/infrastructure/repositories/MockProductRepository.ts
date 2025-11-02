import type { Category } from '@/core/domain/entities/Category'
import type { Product } from '@/core/domain/entities/Product'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

import { mockProducts } from '../mocks/products.mock'

// Solo para este mock:
type ProductWithCategories = Product & {
  categoriesOnProducts?: Array<Category>
}

export class MockProductRepository implements ProductRepository {
  private products: ProductWithCategories[] = mockProducts as ProductWithCategories[]

  async findAll(): Promise<Product[]> {
    await this.simulateDelay(800)
    return [...this.products]
  }

  async findById(id: number): Promise<Product | null> {
    await this.simulateDelay(500)
    return this.products.find(p => p.id === id) ?? null
  }

  async findByCategory(categoryId: number): Promise<Product[]> {
    await this.simulateDelay(600)
    return this.products.filter(
      p =>
        Array.isArray(p.categoriesOnProducts) &&
        p.categoriesOnProducts!.some(c => c?.category?.id === categoryId)
    )
  }

  async findFeatured(limit = 4): Promise<Product[]> {
    await this.simulateDelay(700)
    return this.products.slice(0, limit)
  }

  async search(query: string): Promise<Product[]> {
    await this.simulateDelay(500)
    const q = query.toLowerCase()
    return this.products.filter(
      p =>
        (p.nombre ?? '').toLowerCase().includes(q) ||
        (p.indicaciones ?? '').toLowerCase().includes(q) ||
        (p.composicion ?? '').toLowerCase().includes(q)
    )
  }

  private simulateDelay(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms))
  }
}
