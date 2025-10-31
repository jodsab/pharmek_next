import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { APP_ROUTES } from '@/config/routes'
import { type RegisterFormData, registerSchema } from '@/libs/validations/registerSchema'

import { useRegister } from './useRegister'

export const useRegisterViewModel = () => {
  const router = useRouter()
  const { mutate: registerUser, isPending, error } = useRegister()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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

  const togglePassword = () => setShowPassword(prev => !prev)
  const toggleConfirmPassword = () => setShowConfirmPassword(prev => !prev)

  const onSubmit = (data: RegisterFormData) => {
    const { confirmPassword, ...registerData } = data

    registerUser(registerData, {
      onSuccess: response => {
        if (response.ok) {
          // Aquí puedes usar toast en lugar de alert
          alert('¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.')
          router.push(APP_ROUTES.HOME)
        }
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
    error
  }
}
