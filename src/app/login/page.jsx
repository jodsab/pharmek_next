'use client'

import './styles.scss'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import WithNavbarAndFooter from '@/HOC/WithNavbarAndFooter'
import { useAuth } from '@/hooks/auth/useAuthSession.hook'

import logo from '../../../public/img/logo.png'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const router = useRouter()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setError(null)
    setLoading(true)

    try {
      const res = await login({ email, password })

      if (res.error) {
        setError(res.message)
        setLoading(false)
        return
      }

      // Login exitoso
      router.push('/')
    } catch (err) {
      setError('Ocurrió un error inesperado')
      console.error(err)
    } finally {
      setLoading(false)
    }
  })

  return (
    <WithNavbarAndFooter>
      <div className="login_container">
        <div className="login_area p-10">
          <Image className="mx-auto" src={logo} width={0} height={0} alt="logo" />
          <p className="text-3xl mx-auto my-4">Inicia sesión</p>

          <form onSubmit={onSubmit} className="w-100">
            {error && <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>}

            <label className="text-slate-500 mb-2 block text-sm">Email:</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required'
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="user@email.com"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}

            <label className="text-slate-500 mb-2 block text-sm">Password:</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required'
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="******"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password.message}</span>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-lg mt-2 text-white ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green hover:bg-blue'
              }`}
            >
              {loading ? 'Iniciando sesión...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </WithNavbarAndFooter>
  )
}

export default Login
