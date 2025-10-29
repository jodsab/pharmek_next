import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const ROUTES = {
  AUTH_ROUTES: ['/ingreso', '/registro'], // Rutas solo para NO autenticados
  PROTECTED_ROUTES: ['/perfil', '/pedidos'] // Rutas solo para autenticados
} as const

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const path = request.nextUrl.pathname

  if (session) {
    // Usuario autenticado intentando acceder a rutas de auth
    if (ROUTES.AUTH_ROUTES.includes(path)) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } else {
    // Usuario NO autenticado intentando acceder a rutas protegidas
    if (ROUTES.PROTECTED_ROUTES.includes(path)) {
      return NextResponse.redirect(new URL('/ingreso', request.url))
    }
  }

  return res
}

export const config = {
  matcher: [...ROUTES.AUTH_ROUTES, ...ROUTES.PROTECTED_ROUTES]
}
