import type { Category } from '@/core/domain/entities/Category' // Updated import
import type { CategoryRepository } from '@/core/domain/repositories/CategoryRepository'

import { mockCategories } from '../mocks/products.mock'

export class MockCategoryRepository implements CategoryRepository {
  private categories: Category[] = mockCategories

  async findAll(): Promise<Category[]> {
    await this.simulateDelay()
    return [...this.categories]
  }

  async findById(id: number): Promise<Category | null> {
    // Updated to number
    await this.simulateDelay()
    return this.categories.find(c => c.id === id) || null
  }

  async findByName(categoryName: string): Promise<Category | null> {
    // Updated param name
    await this.simulateDelay()
    return this.categories.find(c => c.categoryName === categoryName) || null
  }

  async search(query: string): Promise<Category[]> {
    // Added search method
    await this.simulateDelay()
    return this.categories.filter(category =>
      category.categoryName.toLowerCase().includes(query.toLowerCase())
    )
  }

  private simulateDelay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
