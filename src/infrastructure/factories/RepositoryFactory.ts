import type { AuthRepository } from '@/core/domain/repositories/AuthRepository'
import type { CategoryRepository } from '@/core/domain/repositories/CategoryRepository'
import type { DistributorLocationRepository } from '@/core/domain/repositories/DistributorLocationRepository'
import type { DistributorRepository } from '@/core/domain/repositories/DistributorRepository'
import type { DistrictRepository } from '@/core/domain/repositories/DistrictRepository'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

import { MockAuthRepository } from '../repositories/MockAuthRepository'
import { MockCategoryRepository } from '../repositories/MockCategoryRepository'
import { MockDistributorLocationRepository } from '../repositories/MockDistributorLocationRepository'
import { MockDistributorRepository } from '../repositories/MockDistributorRepository'
import { MockDistrictRepository } from '../repositories/MockDistrictRepository'
import { MockProductRepository } from '../repositories/MockProductRepository'
import { SupabaseAuthRepository } from '../repositories/SupabaseAuthRepository'
import { SupabaseCategoryRepository } from '../repositories/SupabaseCategoryRepository'
import { SupabaseDistributorLocationRepository } from '../repositories/SupabaseDistributorLocationRepository'
import { SupabaseDistributorRepository } from '../repositories/SupabaseDistributorRepository'
import { SupabaseDistrictRepository } from '../repositories/SupabaseDistrictRepository'
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

  static getDistributorRepository(): DistributorRepository {
    return USE_MOCKS ? new MockDistributorRepository() : new SupabaseDistributorRepository()
  }

  static getDistrictRepository(): DistrictRepository {
    return USE_MOCKS ? new MockDistrictRepository() : new SupabaseDistrictRepository()
  }

  static getDistributorLocationRepository(): DistributorLocationRepository {
    return USE_MOCKS
      ? new MockDistributorLocationRepository()
      : new SupabaseDistributorLocationRepository()
  }
}
