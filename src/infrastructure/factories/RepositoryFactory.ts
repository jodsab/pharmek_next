import type { AuthRepository } from '@/core/domain/repositories/AuthRepository'
import type { CategoryRepository } from '@/core/domain/repositories/CategoryRepository'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

import { MockAuthRepository } from '../repositories/MockAuthRepository'
import { MockCategoryRepository } from '../repositories/MockCategoryRepository'
import { MockProductRepository } from '../repositories/MockProductRepository'
import { SupabaseAuthRepository } from '../repositories/SupabaseAuthRepository'
import { SupabaseCategoryRepository } from '../repositories/SupabaseCategoryRepository'
import { SupabaseProductRepository } from '../repositories/SupabaseProductRepository'

const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === 'true'

export class RepositoryFactory {
  static getAuthRepository(): AuthRepository {
    return USE_MOCKS ? new MockAuthRepository() : new SupabaseAuthRepository()
  }

  static getProductRepository(): ProductRepository {
    return USE_MOCKS ? new MockProductRepository() : new SupabaseProductRepository()
  }

  static getCategoryRepository(): CategoryRepository {
    return USE_MOCKS ? new MockCategoryRepository() : new SupabaseCategoryRepository()
  }

  static getDistribuidorRepository() {
    return USE_MOCKS ? new MockProductRepository() : new SupabaseProductRepository()
  }
}
