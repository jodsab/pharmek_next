import type { Product } from '@/core/domain/entities/Product'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

export class GetAllProducts {
  constructor(private productRepository: ProductRepository) { }

  async execute(): Promise<Product[]> {
    return await this.productRepository.findAll()
  }
}

// src/core/application/products/GetFeaturedProducts.ts
export class GetFeaturedProducts {
  constructor(private productRepository: ProductRepository) { }

  async execute(limit: number = 4): Promise<Product[]> {
    return await this.productRepository.findFeatured(limit)
  }
}
