'use client'

import './mobile.scss'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaUser, FaUserTimes } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoClose, IoMenuOutline } from 'react-icons/io5'

import { APP_ROUTES, MAIN_NAV_ROUTES, SOCIAL_LINKS } from '@/config/routes'
import { useAuth } from '@/hooks/auth/useAuthSession.hook'
import { useAuthStore } from '@/stores/authStore'

import { NavLink } from './NavLink'

const ICONS_SIZE = 14
const MENU_SIZE = 26
const NAV_HEIGHT = 70 // mantener sincronizado con el SCSS

const NavbarMobileClient = (): React.JSX.Element => {
  const [open, setOpen] = useState(false)
  const user = useAuthStore(state => state.user)
  const { logout } = useAuth()
  const router = useRouter()

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const toggle = (): void => setOpen(v => !v)
  const close = (): void => setOpen(false)

  const handleLogout = (): void => {
    logout()
    close()
    router.push(APP_ROUTES.HOME)
  }

  const handleProfile = (): void => {
    close()
    router.push(APP_ROUTES.PERFIL)
  }

  return (
    <div className="navbar_mobile_container" style={{ ['--nav-h' as string]: `${NAV_HEIGHT}px` }}>
      <nav className="nav">
        <Link href={APP_ROUTES.HOME} className="logo_link" onClick={close}>
          <Image
            className="logo"
            height={50}
            width={120}
            src="/assets/images/business/logo.png"
            alt="Pharmek logo"
            priority
          />
        </Link>

        <div className="right_container">
          {user ? (
            <button onClick={handleProfile} className="user_button bordered">
              <FaUser size={ICONS_SIZE} />
              <span>{user.email?.split('@')[0]}</span>
            </button>
          ) : (
            <Link href={APP_ROUTES.LOGIN} onClick={close} className="login_button bordered">
              <FaUser size={ICONS_SIZE} />
              <span>Ingresar</span>
            </Link>
          )}

          <button
            className="toggle"
            onClick={toggle}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <IoClose size={MENU_SIZE} /> : <IoMenuOutline size={MENU_SIZE} />}
          </button>
        </div>
      </nav>

      {/* Espaciador para que el contenido no quede bajo el navbar fijo */}
      <div aria-hidden className="nav_spacer" />

      <div className="toggle_menu">
        <div className={`mobile_bar ${open ? 'show' : ''}`}>
          <ul className="menu_bar">
            {MAIN_NAV_ROUTES.filter(route => route.showInMobile).map(route => (
              <li key={route.href}>
                <NavLink href={route.href} onClick={close}>
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {user && (
            <div className="user_actions">
              <button onClick={handleProfile} className="profile_button">
                <FaUser size={16} />
                <span>Mi Perfil</span>
              </button>
              <button onClick={handleLogout} className="logout_button">
                <FaUserTimes size={16} />
                <span>Cerrar Sesión</span>
              </button>
            </div>
          )}

          <div className="socials_container">
            <ul className="socials">
              <li>
                <a
                  href={SOCIAL_LINKS.TIKTOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok size={MENU_SIZE} />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook size={MENU_SIZE} />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={MENU_SIZE} />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <IoLogoWhatsapp size={MENU_SIZE} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobileClient
