import { useMutation, type UseMutationResult } from '@tanstack/react-query'

import { RegisterUser } from '@/core/application/auth/RegisterUser'
import type { AuthResponse, RegisterUserDto } from '@/core/domain/entities/User'
import { MockAuthRepository } from '@/infrastructure/repositories/MockAuthRepository'
import { SupabaseAuthRepository } from '@/infrastructure/repositories/SupabaseAuthRepository'
import { useAuthStore } from '@/stores/authStore'

const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === 'true'

export const useRegister = (): UseMutationResult<
  AuthResponse,
  unknown,
  RegisterUserDto,
  unknown
> => {
  const setUser = useAuthStore(state => state.setUser)
  const authRepository = USE_MOCKS ? new MockAuthRepository() : new SupabaseAuthRepository()
  const registerUseCase = new RegisterUser(authRepository)

  return useMutation({
    mutationFn: (data: RegisterUserDto) => registerUseCase.execute(data),
    onSuccess: response => {
      if (response.ok && response.user) {
        // Solo actualiza el store, NO navega
        setUser(response.user)
      }
    }
  })
}
