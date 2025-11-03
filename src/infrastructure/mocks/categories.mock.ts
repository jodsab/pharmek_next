import type { CategoryWithCount } from '@/core/domain/entities/Category'

export const CATEGORIES_MOCK: CategoryWithCount[] = [
  {
    id: 1,
    created_at: '2024-01-01T00:00:00Z',
    categoryName: 'Alimentos',
    categoryImage: '/assets/images/categories/alimentos.jpg',
    categoriesOnProducts: [],
    products: [],
    count: 5
  },
  {
    id: 2,
    created_at: '2024-01-02T00:00:00Z',
    categoryName: 'Medicamentos',
    categoryImage: '/assets/images/categories/medicamentos.jpg',
    categoriesOnProducts: [],
    products: [],
    count: 3
  }
]
