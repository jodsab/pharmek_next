'use client'

import './styles.scss'

import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { APP_ROUTES, MAIN_NAV_ROUTES } from '@/config/routes'

interface BreadcrumbProps {
  customLabels?: Record<string, string>
  showHome?: boolean
  className?: string
}

export default function Breadcrumb({
  customLabels = {},
  showHome = true,
  className = ''
}: BreadcrumbProps) {
  const pathname = usePathname()

  // Función para obtener el label desde las rutas configuradas
  const getLabelFromRoutes = (path: string): string => {
    const route = MAIN_NAV_ROUTES.find(r => r.href === path)
    if (route) return route.label

    // Buscar en APP_ROUTES
    const routeKey = Object.entries(APP_ROUTES).find(([_, value]) => value === path)
    if (routeKey) {
      return routeKey[0].charAt(0) + routeKey[0].slice(1).toLowerCase().replace('_', ' ')
    }

    // Formatear el segmento si no se encuentra
    return path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Generar breadcrumbs desde el pathname
  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean)

    const breadcrumbs = paths.map((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/')
      const label = customLabels[href] || getLabelFromRoutes(href) || path

      return {
        label,
        href,
        isLast: index === paths.length - 1
      }
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // No mostrar breadcrumb en home
  if (pathname === APP_ROUTES.HOME) return null

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumb-container ${className}`}>
      <ol className="breadcrumb-list">
        {showHome && (
          <li className="breadcrumb-item">
            <Link href={APP_ROUTES.HOME} className="breadcrumb-link home">
              <Home className="breadcrumb-icon" />
              <span className="breadcrumb-text">Inicio</span>
            </Link>
          </li>
        )}

        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="breadcrumb-item">
            <ChevronRight className="breadcrumb-separator" />
            {crumb.isLast ? (
              <span className="breadcrumb-current" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="breadcrumb-link">
                <span className="breadcrumb-text">{crumb.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
