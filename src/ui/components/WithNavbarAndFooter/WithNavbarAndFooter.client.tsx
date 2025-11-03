'use client'

import './styles.scss'

import React from 'react'

import { useGetCategories } from '@/hooks/categories/useGetCategories'
import { useGetDistributors } from '@/hooks/distributors/useGetDistributors'
import { useGetProducts } from '@/hooks/products/useGetProducts'

import NavbarDesktopClient from '../../components/Navbar/NavbarDesktop.client'
import NavbarMobileClient from '../../components/Navbar/NavbarMobile.client'
import AnimatedBackground from './components/AnimatedBackground'
import Chatbot from './components/ChatBot/ChatBot.client'
import ChatWhatsapp from './components/ChatWhatsapp'
import Footer from './components/Footer'

interface WithNavbarAndFooterClientProps {
  children: React.ReactNode
}

const WithNavbarAndFooterClient = ({ children }: WithNavbarAndFooterClientProps) => {
  const { data: categories, isLoading: loadingCategories } = useGetCategories()
  const { data: products, isLoading: loadingProductsCategories } = useGetProducts()
  const { data: distributors, isLoading: loadingDistributors } = useGetDistributors()

  return (
    <div className="withnavbarandfooter_container">
      <AnimatedBackground />

      <ChatWhatsapp />
      <Chatbot />

      <div className="withnavbarandfooter_content">
        <div className="navbar_wrapper">
          <div className="mobile_menu">
            <NavbarMobileClient />
          </div>
          <div className="desktop_menu">
            <NavbarDesktopClient />
          </div>
        </div>

        <main className="main_content">{children}</main>

        <Footer />
      </div>
    </div>
  )
}

export default WithNavbarAndFooterClient
