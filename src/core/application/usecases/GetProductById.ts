import type { Product } from '@/core/domain/entities/Product'
import type { ProductRepository } from '@/core/domain/repositories/ProductRepository'

export class GetProductById {
  constructor(private productRepository: ProductRepository) { }

  async execute(id: number): Promise<Product | null> {
    return await this.productRepository.findById(id)
  }
}
