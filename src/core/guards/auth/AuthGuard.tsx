import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import type { AuthGuardProps } from './types'

export async function AuthGuard({
  children,
  requireAuth = false,
  redirectTo = '/'
}: AuthGuardProps) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const isAuthenticated = !!session

  // Si requiere auth y NO está autenticado -> redirige a login
  if (requireAuth && !isAuthenticated) {
    redirect('/ingreso')
  }

  // Si NO requiere auth y está autenticado -> redirige a home
  if (!requireAuth && isAuthenticated) {
    redirect(redirectTo)
  }

  return children
}
