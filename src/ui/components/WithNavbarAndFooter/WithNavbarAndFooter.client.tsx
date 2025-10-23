'use client'

import './styles.scss'

import React, { useEffect } from 'react'

import { useGetCategories } from '@/hooks/categories/useGetCategories.hook'
import { useGetDistribuidores } from '@/hooks/categories/useGetDistribuidores.hook'
import { useGetProducts } from '@/hooks/categories/useGetProducts.hook'
import { useGetProductsDestacados } from '@/hooks/categories/useGetProductsDestacados.hook'
import { useCategoriesStore } from '@/libs/store-categories'
import { useDistribuidoresSTore } from '@/libs/store-distribuidores'
import { useProductsStore } from '@/libs/store-products'

import NavbarDesktopClient from '../../components/Navbar/NavbarDesktop.client'
import NavbarMobileClient from '../../components/Navbar/NavbarMobile.client'
import Chatbot from './components/ChatBot/ChatBot.client'
import ChatWhatsapp from './components/ChatWhatsapp'
import Footer from './components/Footer'

interface WithNavbarAndFooterClientProps {
  children: React.ReactNode
}

const WithNavbarAndFooterClient = ({ children }: WithNavbarAndFooterClientProps) => {
  const { loading: loadingProducts, products } = useGetProducts()
  const { loading: loadingCategories, categories } = useGetCategories()
  const { loading: loadingDistribuidores, distribuidores } = useGetDistribuidores()
  const { loading: loadingProductsDestacados, productsDestacados } = useGetProductsDestacados()

  const setProductsStore = useProductsStore(state => state.setProducts)
  const setCategoriesStore = useCategoriesStore(state => state.setCategories)
  const setDistribuidoresStore = useDistribuidoresSTore(state => state.setDistribuidores)

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) setProductsStore(products)
    if (Array.isArray(categories) && categories.length > 0) setCategoriesStore(categories)
    if (Array.isArray(distribuidores) && distribuidores.length > 0)
      setDistribuidoresStore(distribuidores)
  }, [
    products,
    categories,
    distribuidores,
    setProductsStore,
    setCategoriesStore,
    setDistribuidoresStore
  ])

  return (
    <div className="withnavbarandfooter_container">
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
