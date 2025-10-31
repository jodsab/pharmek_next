'use client'
import './styles.scss'
import 'aos/dist/aos.css'

import Aos from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'

import PetList from '@/components/PetList'
import WithNavbarAndFooter from '@/HOC/WithNavbarAndFooter'

import BlogCard from '../components/BlogCard'
import blogPortada from './assets/blog-portada.png'
import BlogNews from './components/BlogNews'

export default function Blog() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <main className="blog_content">
      <WithNavbarAndFooter>
        <div className="blog_spaced">
          <div className="blog_portadas">
            <Image src={blogPortada} alt="portada del blog" />
            <div className="card_contents">
              <BlogNews />
            </div>
          </div>
          <div className="noticias content">
            <div className="blogs_list">
              {Array(3)
                .fill('')
                .map((item, index) => {
                  return <BlogCard key={index} />
                })}
            </div>
            <div className="content">
              <h3>MÁS NOTICIAS</h3>
            </div>
            <div className="noticias_list content">
              {Array(3)
                .fill('')
                .map((item, index) => {
                  return <BlogCard key={index} />
                })}
            </div>
          </div>

          <PetList />
        </div>
      </WithNavbarAndFooter>
    </main>
  )
}
