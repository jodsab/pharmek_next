import type { LoginDto, RegisterUserDto, User as DomainUser } from '@/core/domain/entities/User'
import * as authService from '@/services/authService'
import { useAuthStore } from '@/stores/authStore'
import type { User as SupabaseUser } from '@supabase/supabase-js'

type AuthOk = { ok: true; user: DomainUser; message?: string }
type AuthErr = { ok: false; message?: string }
type AuthResult = AuthOk | AuthErr

type RegisterServiceResult = {
  user: SupabaseUser | null
  message?: string
}
type LoginServiceResult = {
  session: unknown | null
  user: SupabaseUser | null
  message?: string
}
type LogoutServiceResult =
  | { success: true }
  | { success: false; error: true; message?: string; detail?: unknown }

type UseAuthReturn = {
  user: DomainUser | null
  register: (values: RegisterUserDto) => Promise<AuthResult>
  login: (dto: LoginDto) => Promise<AuthResult>
  logout: () => Promise<{ ok: boolean }>
}

const toDomainUser = (u: SupabaseUser): DomainUser => (u as unknown as DomainUser)

export const useAuth = (): UseAuthReturn => {
  const { user, setUser, clearUser } = useAuthStore() as {
    user: DomainUser | null
    setUser: (u: DomainUser) => void
    clearUser: () => void
  }

  const register = async (values: RegisterUserDto): Promise<AuthResult> => {
    const res = (await authService.register(values)) as RegisterServiceResult

    if (res.user) {
      const domainUser = toDomainUser(res.user)
      setUser(domainUser)
      return {
        ok: true,
        user: domainUser,
        ...(res.message ? { message: res.message } : {})
      }
    }

    return {
      ok: false,
      ...(res.message ? { message: res.message } : {})
    }
  }

  const login = async ({ email, password }: LoginDto): Promise<AuthResult> => {
    const res = (await authService.login({ email, password })) as LoginServiceResult

    if (res.user) {
      const domainUser = toDomainUser(res.user)
      setUser(domainUser)
      return {
        ok: true,
        user: domainUser,
        ...(res.message ? { message: res.message } : {})
      }
    }

    return {
      ok: false,
      ...(res.message ? { message: res.message } : {})
    }
  }

  const logout = async (): Promise<{ ok: boolean }> => {
    const res = (await authService.logout()) as LogoutServiceResult
    const ok = res.success === true
    if (ok) clearUser()
    return { ok }
  }

  return { user, register, login, logout }
}
