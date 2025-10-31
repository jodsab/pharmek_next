'use client'

import './desktop.scss'

import { Dropdown } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaUser, FaUserPlus, FaUserTimes } from 'react-icons/fa'
import { HiOutlineUser } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'

import { APP_ROUTES, MAIN_NAV_ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/auth/useAuthSession.hook'
import { useAuthStore } from '@/stores/authStore'

import { NavLink } from './NavLink'

const ICONS_SIZE = 14

const NavbarDesktopClient = () => {
  const user = useAuthStore(state => state.user)
  const { logout } = useAuth()
  const router = useRouter()

  const handleProfile = () => {
    router.push(APP_ROUTES.PERFIL)
  }

  const handleLogout = () => {
    logout()
    router.push(APP_ROUTES.HOME)
  }

  const userMenuItems = [
    {
      key: '1',
      label: (
        <button onClick={handleProfile} className="dropdown_profile_button">
          <p>
            Hola, <strong>{user?.email}</strong>!
          </p>
        </button>
      )
    },
    {
      key: '2',
      label: (
        <button onClick={handleLogout} className="dropdown_logout_button">
          <FaUserTimes size={16} />
          <span>Cerrar sesión</span>
        </button>
      )
    }
  ]

  return (
    <div className="navbar_desktop_container">
      <div className="desktop_container">
        <nav className="desktop_nav">
          <Link className="logo_link" href={APP_ROUTES.HOME}>
            <Image
              className="logo"
              height={36}
              width={193}
              src="/assets/images/business/logo.png"
              alt="Pharmek logo"
              priority
            />
          </Link>

          <ul className="menu_bar">
            {MAIN_NAV_ROUTES.filter(route => route.showInDesktop).map(route => (
              <li key={route.href}>
                <NavLink href={route.href}>
                  <p>{route.label}</p>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="auth_section">
            {user ? (
              <Dropdown menu={{ items: userMenuItems }} getPopupContainer={() => document.body}>
                <a
                  onClick={e => e.preventDefault()}
                  className="user_dropdown"
                  role="button"
                  aria-label="Menú de usuario"
                >
                  <HiOutlineUser />
                  <span>Mi cuenta</span>
                  <IoMdArrowDropdown />
                </a>
              </Dropdown>
            ) : (
              <div className="auth_buttons">
                <Link href={APP_ROUTES.LOGIN} className="login_btn">
                  <FaUser size={ICONS_SIZE} />
                  <span>Iniciar Sesión</span>
                </Link>
                <Link href={APP_ROUTES.REGISTRO} className="register_btn">
                  <FaUserPlus size={16} />
                  <span>Crear cuenta</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavbarDesktopClient
