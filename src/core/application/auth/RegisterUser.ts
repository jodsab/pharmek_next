import type { AuthResponse, RegisterUserDto } from '@/core/domain/entities/User'
import type { AuthRepository } from '@/core/domain/repositories/AuthRepository'

export class RegisterUser {
  constructor(private authRepository: AuthRepository) { }

  async execute(data: RegisterUserDto): Promise<AuthResponse> {
    // Validaciones de negocio
    if (!this.isValidEmail(data.email)) {
      return {
        ok: false,
        message: 'El formato del email no es válido'
      }
    }

    if (!this.isValidPassword(data.password)) {
      return {
        ok: false,
        message: 'La contraseña debe tener al menos 6 caracteres'
      }
    }

    if (!this.isValidPhone(data.celular)) {
      return {
        ok: false,
        message: 'El número de celular no es válido'
      }
    }

    return await this.authRepository.register(data)
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  private isValidPassword(password: string): boolean {
    return password.length >= 6
  }

  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^[0-9]{9}$/
    return phoneRegex.test(phone)
  }
}
