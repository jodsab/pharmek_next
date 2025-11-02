'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type SubmitHandler, useForm, type UseFormReturn } from 'react-hook-form'

import { APP_ROUTES } from '@/config/routes'
import { type LoginFormData, loginSchema } from '@/libs/validations/loginSchema'

import { useLogin } from './useLogin'

/** Forma del ViewModel que devuelve el hook */
type LoginViewModel = {
  form: UseFormReturn<LoginFormData>
  showPassword: boolean
  togglePasswordVisibility: () => void
  /** función lista para pasar a <form onSubmit={...}> */
  onSubmit: (e?: React.BaseSyntheticEvent) => void
  isPending: boolean
  error: string | null
}

export const useLoginViewModel = (): LoginViewModel => {
  const router = useRouter()
  const { mutate: loginUser, isPending } = useLogin()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [errMessage, setErrMessage] = useState<string | null>(null)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })

  const togglePasswordVisibility = (): void => {
    setShowPassword(prev => !prev)
  }

  const submitHandler: SubmitHandler<LoginFormData> = data => {
    loginUser(data, {
      onSuccess: response => {
        if (response.ok) {
          router.push(APP_ROUTES.HOME)
        } else {
          setErrMessage(response.message ?? 'No se pudo iniciar sesión')
        }
      },
      onError: err => {
        setErrMessage(err instanceof Error ? err.message : 'Error desconocido')
      }
    })
  }

  return {
    form,
    showPassword,
    togglePasswordVisibility,
    onSubmit: form.handleSubmit(submitHandler),
    isPending,
    error: errMessage
  }
}
