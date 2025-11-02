import type { AuthResponse, RegisterUserDto, User } from '@/core/domain/entities/User'
import type { AuthRepository } from '@/core/domain/repositories/AuthRepository'

import { MOCK_USERS } from '../mocks/auth.mock'

export class MockAuthRepository implements AuthRepository {
  logout(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  getCurrentUser(): Promise<User | null> {
    throw new Error('Method not implemented.')
  }
  private users = [...MOCK_USERS]

  async login(email: string, password: string): Promise<AuthResponse> {
    await this.simulateDelay(800) // Simula latencia de red

    const user = this.users.find(u => u.email === email)

    if (!user || password !== 'password123') {
      return {
        ok: false,
        message: 'Credenciales inválidas'
      }
    }

    return {
      ok: true,
      message: 'Login exitoso',
      user
    }
  }

  async register(data: RegisterUserDto): Promise<AuthResponse> {
    await this.simulateDelay(1000)

    const exists = this.users.find(u => u.email === data.email)
    if (exists) {
      return {
        ok: false,
        message: 'El email ya está registrado'
      }
    }

    const newUser: User = {
      id: parseInt(Math.random().toString(36).substr(2, 9)),
      email: data.email,
      full_name: data.full_name,
      user_name: data.user_name,
      celular: data.celular,
      created_at: new Date().toISOString()
    }

    this.users.push(newUser)

    return {
      ok: true,
      message: 'Usuario registrado',
      user: newUser
    }
  }

  private simulateDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
