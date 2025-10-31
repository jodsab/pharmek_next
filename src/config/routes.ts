export interface NavRoute {
  label: string
  href: string
  icon?: React.ReactNode
  requiresAuth?: boolean
  showInMobile?: boolean
  showInDesktop?: boolean
}

export const APP_ROUTES = {
  HOME: '/',
  PRODUCTOS: '/productos',
  DISTRIBUIDORES: '/distribuidores',
  CONTACTENOS: '/contactenos',
  NOSOTROS: '/nosotros',
  ALBERGUE: '/albergue',
  ASESORIA: '/asesoria',
  BLOG: '/blog',
  LOGIN: '/ingreso',
  REGISTRO: '/registro',
  PERFIL: '/perfil',
  FORGOT_PASSWORD: '/forgot-password'
} as const

export const MAIN_NAV_ROUTES: NavRoute[] = [
  {
    label: 'Productos',
    href: APP_ROUTES.PRODUCTOS,
    showInMobile: true,
    showInDesktop: true
  },
  {
    label: 'Distribuidores',
    href: APP_ROUTES.DISTRIBUIDORES,
    showInMobile: true,
    showInDesktop: true
  },
  {
    label: 'Contáctenos',
    href: APP_ROUTES.CONTACTENOS,
    showInMobile: true,
    showInDesktop: true
  },
  {
    label: 'Nosotros',
    href: APP_ROUTES.NOSOTROS,
    showInMobile: true,
    showInDesktop: true
  },
  {
    label: 'Albergue',
    href: APP_ROUTES.ALBERGUE,
    showInMobile: true,
    showInDesktop: true
  }
  /*   {
    label: 'Asesoría',
    href: APP_ROUTES.ASESORIA,
    showInMobile: true,
    showInDesktop: true
  }, */
  /*   {
    label: 'Blog',
    href: APP_ROUTES.BLOG,
    showInMobile: true,
    showInDesktop: true
  } */
]

export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/pharmek',
  INSTAGRAM: 'https://instagram.com/pharmek',
  TIKTOK: 'https://tiktok.com/@pharmek',
  WHATSAPP: 'https://wa.me/51999999999'
} as const
