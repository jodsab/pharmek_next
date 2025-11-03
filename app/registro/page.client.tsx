'use client'

import './styles.scss'

import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { APP_ROUTES } from '@/config/routes'
import { useRegisterViewModel } from '@/hooks/auth/useRegisterViewModel'

const RegistroClient = (): React.JSX.Element => {
  const {
    form: {
      register,
      formState: { errors }
    },
    showPassword,
    showConfirmPassword,
    togglePassword,
    toggleConfirmPassword,
    onSubmit,
    isPending,
    error
  } = useRegisterViewModel()

  return (
    <div className="registro_container">
      <div className="registro_area">
        <Image
          className="logo"
          src="/assets/images/business/logo.png"
          width={150}
          height={60}
          alt="logo"
          priority
        />
        <h1 className="title">Regístrate en Pharmek</h1>

        <form onSubmit={onSubmit} className="registro_form">
          {error && <div className="error_message">{error}</div>}

          <div className="form_group">
            <label>Nombre completo:</label>
            <input
              type="text"
              {...register('full_name')}
              placeholder="Ingresa tu nombre completo"
              disabled={isPending}
            />
            {errors.full_name && <span className="error_text">{errors.full_name.message}</span>}
          </div>

          <div className="form_group">
            <label>Nombre de usuario:</label>
            <input
              type="text"
              {...register('user_name')}
              placeholder="Ej: juan_perez"
              disabled={isPending}
            />
            {errors.user_name && <span className="error_text">{errors.user_name.message}</span>}
          </div>

          <div className="form_group">
            <label>Email:</label>
            <input
              type="email"
              {...register('email')}
              placeholder="correo@ejemplo.com"
              disabled={isPending}
            />
            {errors.email && <span className="error_text">{errors.email.message}</span>}
          </div>

          <div className="form_group">
            <label>Celular:</label>
            <input
              type="text"
              {...register('celular')}
              placeholder="999999999"
              disabled={isPending}
            />
            {errors.celular && <span className="error_text">{errors.celular.message}</span>}
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
                onClick={togglePassword}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                disabled={isPending}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <span className="error_text">{errors.password.message}</span>}
          </div>

          <div className="form_group">
            <label>Confirma tu contraseña:</label>
            <div className="password_input_wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="••••••••"
                disabled={isPending}
              />
              <button
                type="button"
                className="toggle_password"
                onClick={toggleConfirmPassword}
                aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                disabled={isPending}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="error_text">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button type="submit" className="submit_button" disabled={isPending}>
            {isPending ? 'Registrando...' : 'Registrarme'}
          </button>

          <div className="links">
            <p className="login_text">
              ¿Ya tienes una cuenta?{' '}
              <Link href={APP_ROUTES.LOGIN} className="login_link">
                Inicia sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistroClient
