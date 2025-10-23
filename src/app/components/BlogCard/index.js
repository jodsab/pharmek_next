import './styles.scss'

import Image from 'next/image'
import React from 'react'
import { CiCalendar, CiHeart } from 'react-icons/ci'

import blog from './assets/blog.jpeg'

const BlogCard = () => {
  return (
    <div className="blogcard_container">
      <div className="blog_top">
        <Image className="blog_img" width={200} height={200} src={blog} alt="img blog" />
        <button className="heart">
          <CiHeart />
        </button>
      </div>
      <div className="blog_bottom">
        <div className="info">
          <div className="date">
            <CiCalendar />
            <p>23/03/2024</p>
          </div>
          <p className="news">Noticia destacada</p>
        </div>
        <p className="title">Rescate de animales en zonas peligrosas de Perú</p>
        <div className="rigth_button">
          <button className="sabermas bordered">
            <p>Saber más</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
