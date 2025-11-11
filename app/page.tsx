/* eslint-disable prettier/prettier */
'use client'

import SectionHeader from '@components/SectionHeader'
import Aos from 'aos'
import Script from 'next/script'
import React, { useEffect } from 'react'

import { useGetCategories } from '@/hooks/categories/useGetCategories'

import CardCategorie from './components/CardCategorie'
import CardSkeleton from './components/CardCategorie/CardSkeleton.client'
import HeroSection from './components/HeroSection/HeroSection'
import PetList from './components/PetList'
import TiktokEmbed from './components/TiktokEmbed' // Import the new component

const tiktokVideoIds = ['7382760567544548613', '7380443882275753222', '7377833903316389125']

export default function Home(): React.JSX.Element {
  const { data: categories, isLoading: loadingCategories } = useGetCategories()
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
      <HeroSection />
      <div className="home_container content">
        {/*         <section className="section_slider content" data-aos="zoom-out">
          {loadingProductsDestacados ? (
            <Slider loadingProductsDestacados={loadingProductsDestacados} />
          ) : (
            productsDestacados && <Slider productsDestacados={productsDestacados} />
          )}
        </section> */}

        <section className="section_productos">
          <SectionHeader
            title="PRODUCTOS"
            subtitle="Tenemos todo lo que necesitas aquí"
            src="/assets/images/home/productos.png"
          />
          <div className="productos_section mt-3" data-aos="fade-up">
            {loadingCategories
              ? Array(4)
                .fill(null)
                .map((_, index) => (
                  <CardSkeleton key={index} />
                ))
              :
              categories?.map((category, index) => {
                return (
                  <div key={index}>
                    <CardCategorie category={category} />
                  </div>
                )
              })}
          </div>
        </section>

        <section className="section_tiktok">
          <SectionHeader
            title="TIKTOK"
            subtitle="Síguenos para ver más contenido"
            src="/assets/images/home/tiktok.png"
          />
          <ul className="tiktok_list" data-aos="fade-up">
            {tiktokVideoIds.map((videoId, index) => (
              <li key={videoId || index}>
                <TiktokEmbed videoId={videoId} />
              </li>
            ))}
          </ul>
        </section>
        <PetList />
      </div>
    </main>
  )
}
