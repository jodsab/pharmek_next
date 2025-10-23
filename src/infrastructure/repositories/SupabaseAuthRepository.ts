import { createClient } from '@supabase/supabase-js'

import type { AuthResponse, RegisterUserDto, User } from '@/core/domain/entities/User'
import type { AuthRepository } from '@/core/domain/repositories/AuthRepository'

export class SupabaseAuthRepository implements AuthRepository {
  private supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  async register(data: RegisterUserDto): Promise<AuthResponse> {
    try {
      const { data: authData, error: authError } = await this.supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.full_name,
            user_name: data.user_name,
            celular: data.celular
          }
        }
      })

      if (authError) {
        return {
          ok: false,
          message: this.parseSupabaseError(authError)
        }
      }

      return {
        ok: true,
        message: 'Usuario registrado exitosamente',
        user: authData.user as any
      }
    } catch (error) {
      return {
        ok: false,
        message: 'Error inesperado al registrar usuario'
      }
    }
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      return {
        ok: false,
        message: this.parseSupabaseError(error)
      }
    }

    return {
      ok: true,
      message: 'Inicio de sesión exitoso',
      user: data.user as any
    }
  }

  async logout(): Promise<void> {
    await this.supabase.auth.signOut()
  }

  async getCurrentUser(): Promise<User | null> {
    const { data } = await this.supabase.auth.getUser()
    return data.user as any
  }

  private parseSupabaseError(error: any): string {
    const errorMessages: Record<string, string> = {
      'User already registered': 'Este correo ya está registrado',
      'Invalid login credentials': 'Credenciales inválidas',
      'Email not confirmed': 'Por favor confirma tu correo electrónico'
    }

    return errorMessages[error.message] || error.message || 'Error desconocido'
  }
}
