import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { APP_ROUTES } from '@/config/routes'
import { type LoginFormData, loginSchema } from '@/libs/validations/loginSchema'

import { useLogin } from './useLogin'

export const useLoginViewModel = () => {
  const router = useRouter()
  const { mutate: loginUser, isPending, error } = useLogin()
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  const onSubmit = (data: LoginFormData) => {
    loginUser(data, {
      onSuccess: response => {
        if (response.ok) {
          // Lógica de navegación aquí (capa de presentación)
          router.push(APP_ROUTES.HOME)

          // Opcional: toast notification
          // toast.success('¡Bienvenido!')
        }
      },
      onError: err => {
        // Manejo de errores específicos de la UI
        console.error('Error en login:', err)
        // toast.error('Error al iniciar sesión')
      }
    })
  }

  return {
    form,
    showPassword,
    togglePasswordVisibility,
    onSubmit: form.handleSubmit(onSubmit),
    isPending,
    error
  }
}
