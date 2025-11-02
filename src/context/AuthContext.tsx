'use client'

import { useEffect, type ReactNode } from 'react'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import type { User as DomainUser } from '@/core/domain/entities/User'

import supabase from '@/libs/supabase'
import { useAuthStore } from '@/stores/authStore'

// Si tu User de dominio difiere, mapea aquí los campos necesarios
const toDomainUser = (u: SupabaseUser): DomainUser => (u as unknown as DomainUser)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps): React.JSX.Element {
  const { setUser, clearUser } = useAuthStore() as {
    setUser: (u: DomainUser) => void
    clearUser: () => void
  }

  useEffect(() => {
    let mounted = true

    // 1) Cargar sesión inicial
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return
      const session = data.session
      if (session?.user) setUser(toDomainUser(session.user))
      else clearUser()
    })

    // 2) Escuchar cambios de sesión (v2: devuelve { data: { subscription } })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) setUser(toDomainUser(session.user))
      else clearUser()
    })

    // 3) Limpieza
    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [setUser, clearUser])

  return <>{ children } </>
}
