import { Product } from '@/core/domain/entities/Product'

export function filterProductsByCategories(
  products: Product[],
  selectedCategories: string[]
): Product[] {
  if (!products?.length) return []

  if (selectedCategories.length === 0) return products

  return products.filter(product =>
    product.categoriesOnProducts?.some(link =>
      link.category ? selectedCategories.includes(link.category.categoryName) : false
    )
  )
}
