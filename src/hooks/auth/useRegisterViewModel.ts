import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'

import { APP_ROUTES } from '@/config/routes'
import { type RegisterFormData, registerSchema } from '@/libs/validations/registerSchema'

import { useRegister } from './useRegister'

type RegisterViewModel = {
  form: UseFormReturn<RegisterFormData>
  showPassword: boolean
  showConfirmPassword: boolean
  togglePassword: () => void
  toggleConfirmPassword: () => void
  onSubmit: (e?: React.BaseSyntheticEvent) => void
  isPending: boolean
  error: string | null
}

export const useRegisterViewModel = (): RegisterViewModel => {
  const router = useRouter()
  const { mutate: registerUser, isPending } = useRegister()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [backendError, setBackendError] = useState<string | null>(null)

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: '',
      user_name: '',
      email: '',
      celular: '',
      password: '',
      confirmPassword: ''
    }
  })

  const togglePassword = (): void => setShowPassword(prev => !prev)
  const toggleConfirmPassword = (): void => setShowConfirmPassword(prev => !prev)

  const onSubmit = (data: RegisterFormData): void => {
    setBackendError(null)
    const { confirmPassword, ...registerData } = data

    registerUser(registerData, {
      onSuccess: response => {
        if (response.ok) {
          router.push(APP_ROUTES.HOME)
        } else {
          setBackendError(response.message ?? 'No se pudo completar el registro')
        }
      },
      onError: err => {
        const msg = err instanceof Error ? err.message : 'No se pudo completar el registro'
        setBackendError(msg)
      }
    })
  }

  return {
    form,
    showPassword,
    showConfirmPassword,
    togglePassword,
    toggleConfirmPassword,
    onSubmit: form.handleSubmit(onSubmit),
    isPending,
    error: backendError
  }
}
