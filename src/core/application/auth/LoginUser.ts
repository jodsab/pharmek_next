import type { AuthResponse, LoginDto } from '@/core/domain/entities/User'
import type { AuthRepository } from '@/core/domain/repositories/AuthRepository'

export class LoginUser {
  constructor(private authRepository: AuthRepository) { }

  async execute(data: LoginDto): Promise<AuthResponse> {
    if (!this.isValidEmail(data.email)) {
      return {
        ok: false,
        message: 'El formato del email no es válido'
      }
    }

    if (!data.password || data.password.length < 6) {
      return {
        ok: false,
        message: 'La contraseña debe tener al menos 6 caracteres'
      }
    }

    return await this.authRepository.login(data.email, data.password)
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
}
