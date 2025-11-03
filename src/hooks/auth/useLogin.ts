import { useMutation, type UseMutationResult } from '@tanstack/react-query'

import { LoginUser } from '@/core/application/auth/LoginUser'
import type { AuthResponse, LoginDto } from '@/core/domain/entities/User'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'
import { useAuthStore } from '@/stores/authStore'

export const useLogin = (): UseMutationResult<AuthResponse, Error, LoginDto, unknown> => {
  const setUser = useAuthStore(state => state.setUser)
  const authRepository = RepositoryFactory.getAuthRepository() // ← Usa factory
  const loginUseCase = new LoginUser(authRepository)

  return useMutation<AuthResponse, Error, LoginDto>({
    mutationFn: (data: LoginDto) => loginUseCase.execute(data),
    onSuccess: response => {
      if (response.ok && response.user) {
        setUser(response.user)
      }
    }
  })
}
