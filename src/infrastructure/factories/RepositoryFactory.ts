import type { AuthRepository } from '@/core/domain/repositories/AuthRepository'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

import { MockAuthRepository } from '../repositories/MockAuthRepository'
import { MockProductRepository } from '../repositories/MockProductRepository'
import { SupabaseAuthRepository } from '../repositories/SupabaseAuthRepository'
import { SupabaseProductRepository } from '../repositories/SupabaseProductRepository'

const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === 'true'

export class RepositoryFactory {
  static getAuthRepository(): AuthRepository {
    return USE_MOCKS ? new MockAuthRepository() : new SupabaseAuthRepository()
  }

  static getProductRepository(): ProductRepository {
    return USE_MOCKS ? new MockProductRepository() : new SupabaseProductRepository()
  }

  static getCategoryRepository() {
    // ... mismo patrón
  }

  static getDistribuidorRepository() {
    // ... mismo patrón
  }
}
