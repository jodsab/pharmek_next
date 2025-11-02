/* eslint-disable prettier/prettier */
import type { Product } from '@/core/domain/entities/Product'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

export class GetProductsByCategory {
  constructor(private productRepository: ProductRepository) { }

  async execute(categoryId: number): Promise<Product[]> {
    return await this.productRepository.findByCategory(categoryId)
  }
}
