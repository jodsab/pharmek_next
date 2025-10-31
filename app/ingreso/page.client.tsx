'use client'

import './styles.scss'

import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { APP_ROUTES } from '@/config/routes'
import { useLoginViewModel } from '@/hooks/auth/useLoginViewModel'

const IngresoClient = () => {
  const {
    form: {
      register,
      formState: { errors }
    },
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    isPending,
    error
  } = useLoginViewModel()

  return (
    <div className="login_container">
      <div className="login_area">
        <Image
          className="logo"
          src="/assets/images/business/logo.png"
          width={150}
          height={60}
          alt="logo"
          priority
        />
        <h1 className="title">Inicia sesión</h1>

        <form onSubmit={onSubmit} className="login_form">
          {error && (
            <div className="error_message">
              {(error as any)?.message || 'Error al iniciar sesión'}
            </div>
          )}

          <div className="form_group">
            <label>Email:</label>
            <input
              type="email"
              {...register('email')}
              placeholder="usuario@email.com"
              disabled={isPending}
            />
            {errors.email && <span className="error_text">{errors.email.message}</span>}
          </div>

          <div className="form_group">
            <label>Contraseña:</label>
            <div className="password_input_wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="••••••••"
                disabled={isPending}
              />
              <button
                type="button"
                className="toggle_password"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                disabled={isPending}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <span className="error_text">{errors.password.message}</span>}
          </div>

          <button type="submit" className="submit_button" disabled={isPending}>
            {isPending ? 'Iniciando sesión...' : 'Entrar'}
          </button>

          <div className="links">
            <Link href={APP_ROUTES.FORGOT_PASSWORD} className="forgot_link">
              ¿Olvidaste tu contraseña?
            </Link>
            <p className="register_text">
              ¿No tienes cuenta?{' '}
              <Link href={APP_ROUTES.REGISTRO} className="register_link">
                Regístrate
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default IngresoClient
