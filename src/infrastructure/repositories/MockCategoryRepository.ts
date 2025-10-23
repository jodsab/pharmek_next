import type { Category } from '@/core/domain/entities/Product'
import type { CategoryRepository } from '@/core/domain/repositories/CategoryRepository'
import { mockCategories } from '@/infrastructure/mocks/products.mock'

export class MockCategoryRepository implements CategoryRepository {
  private categories: Category[] = mockCategories

  async findAll(): Promise<Category[]> {
    await this.simulateDelay()
    return [...this.categories]
  }

  async findById(id: string): Promise<Category | null> {
    await this.simulateDelay()
    return this.categories.find(c => c.id === id) || null
  }

  async findByName(name: string): Promise<Category | null> {
    await this.simulateDelay()
    return this.categories.find(c => c.categoryName === name) || null
  }

  private simulateDelay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
