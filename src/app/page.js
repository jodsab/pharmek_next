// app/page.js (Assuming App Router)
'use client'

import 'aos/dist/aos.css'
import './styles.scss'

import Aos from 'aos'
import Script from 'next/script' // Import Script component
import { useEffect } from 'react'

import PetList from '@/components/PetList'
import HeroSection from '@/components/Portada'
import SectionHeader from '@/components/SectionHeader'
import CardCategorie from '@/components/Skeletons/CardCategories/CardCategorie'
import WithNavbarAndFooter from '@/HOC/WithNavbarAndFooter'
import { useGetCategories } from '@/hooks/categories/useGetCategories.hook'
import { useGetProducts } from '@/hooks/categories/useGetProducts.hook'
import { useGetProductsDestacados } from '@/hooks/categories/useGetProductsDestacados.hook'

import productos from './assets/productos.png'
import tiktok from './assets/tiktok.png'
import Slider from './components/Slider'
// import Tiktok from "./components/Tiktok"; // Remove the old Tiktok import
import TiktokEmbed from './components/TiktokEmbed' // Import the new component

const tiktokVideoIds = ['7382760567544548613', '7380443882275753222', '7377833903316389125']
// --- FIN DE SIMULACIÓN ---

export default function Home({ session }) {
  const { loading: loadingCategories, categories } = useGetCategories()
  const { loading: loadingProducts, products: productsHook } = useGetProducts()
  const { loading: loadingProductsDestacados, productsDestacados } = useGetProductsDestacados()

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <main className="main">
      {/* Load the TikTok embed script ONCE for this page (or ideally higher up) */}
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="afterInteractive" // Or "lazyOnload" depending on when you need embeds to render
      />

      <WithNavbarAndFooter>
        <HeroSection />
        <div className="home_container">
          <section className="section_slider content" data-aos="zoom-out">
            {loadingProductsDestacados ? (
              <Slider loadingProductsDestacados={loadingProductsDestacados} />
            ) : (
              productsDestacados && <Slider productsDestacados={productsDestacados} />
            )}
          </section>

          <section className="section_productos content">
            <SectionHeader
              title="PRODUCTOS"
              subtitle="Tenemos todo lo que necesitas aquí"
              src={productos}
            />
            <div className="productos_section mt-3" data-aos="fade-up">
              {loadingCategories ? (
                <CardCategorie loadingCategories={loadingCategories} />
              ) : (
                categories &&
                categories?.map((category, index) => {
                  return <CardCategorie key={index} category={category} />
                })
              )}
            </div>
          </section>

          {/* TikTok Section */}
          <section className="section_tiktok content">
            <SectionHeader title="TIKTOK" subtitle="Síguenos para ver más contenido" src={tiktok} />
            {/* Render the list of TikTok embeds */}
            <ul className="tiktok_list" data-aos="fade-up">
              {/* Map over your array of video data */}
              {tiktokVideoIds.map((videoId, index) => (
                <li key={videoId || index}>
                  <TiktokEmbed videoId={videoId} />
                </li>
              ))}
            </ul>
          </section>
          <PetList />
        </div>
      </WithNavbarAndFooter>
    </main>
  )
}
