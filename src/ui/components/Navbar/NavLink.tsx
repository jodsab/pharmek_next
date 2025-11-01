'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const NavLink = ({
  href = '/',
  children,
  onClick = () => { },
  className = ''
}: NavLinkProps): React.JSX.Element => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link ${isActive ? 'active' : ''} ${className}`}
    >
      {children}
    </Link>
  )
}
