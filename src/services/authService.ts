// services/authService.js
import supabase from '@/libs/supabase'

import type { LoginDto, RegisterUserDto } from '@/core/domain/entities/User'


export async function register({ email, password }: RegisterUserDto) {
  try {
    // 1️⃣ Crear usuario en Auth (solo email y password en plan Free)
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password
    })

    if (authError) throw authError

    const user = authData.user
    if (!user) throw new Error('No se pudo crear el usuario en Auth')

    return { user, error: null }
  } catch (error) {
    console.error(error)
    return {
      user: null,
      error: true,
      message: 'ERROR AL REGISTRARTE',
      detail: error
    }
  }
}

// -------------------------
// LOGIN
// -------------------------
export async function login({ email, password }: LoginDto) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error

    return { session: data.session, user: data.user, error: null }
  } catch (error) {
    return {
      session: null,
      user: null,
      error: true,
      message: 'ERROR AL INICIAR SESIÓN',
      detail: error
    }
  }
}

// -------------------------
// LOGOUT
// -------------------------
export async function logout() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: true,
      message: 'ERROR AL CERRAR SESIÓN',
      detail: error
    }
  }
}
