import type { User } from '@/core/domain/entities/User'

//password -> password123

export const MOCK_USERS: User[] = [
  {
    id: 1,
    email: 'admin@pharmek.com',
    full_name: 'Admin Pharmek',
    user_name: 'admin',
    celular: '999888777',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    email: 'user@test.com',
    full_name: 'Usuario Test',
    user_name: 'testuser',
    celular: '999777666',
    created_at: '2024-01-15T00:00:00Z'
  }
]
