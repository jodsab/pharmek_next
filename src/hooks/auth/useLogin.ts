import { useMutation } from '@tanstack/react-query'

import { LoginUser } from '@/core/application/auth/LoginUser'
import type { LoginDto } from '@/core/domain/entities/User'
import { RepositoryFactory } from '@/infrastructure/factories/RepositoryFactory'
import { useAuthStore } from '@/store/useAuthStore'

export const useLogin = () => {
  const setUser = useAuthStore(state => state.setUser)
  const authRepository = RepositoryFactory.getAuthRepository() // ← Usa factory
  const loginUseCase = new LoginUser(authRepository)

  return useMutation({
    mutationFn: (data: LoginDto) => loginUseCase.execute(data),
    onSuccess: response => {
      if (response.ok && response.user) {
        setUser(response.user)
      }
    }
  })
}
