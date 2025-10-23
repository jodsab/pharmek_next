'use client'
import './styles.scss'

import Link from 'next/link'
import React, { JSX } from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { IoMdMail } from 'react-icons/io'

import SOCIAL_NETWORKS from '@/core/socialNetworks'

const SIZE_CONTACT = 20

export default function FooterClient(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer_container content">
        <div>
          <p className="section_header">CONTACTO</p>
          <div>
            <div className="footer_area">
              <FiPhoneCall size={SIZE_CONTACT} />
              <p>(+51) 974-587-086</p>
            </div>
            <div className="footer_area">
              <IoMdMail size={SIZE_CONTACT} />
              <p>ventas@pharmek.com</p>
            </div>
          </div>
        </div>

        <div>
          <p className="section_header">REDES SOCIALES</p>
          <div className="buttons_socials">
            <Link
              href={SOCIAL_NETWORKS.tiktok.url}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </Link>
            <Link
              href={SOCIAL_NETWORKS.facebook.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={SOCIAL_NETWORKS.instagram.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div>
          <p className="section_header">NOSOTROS</p>
          <div className="nosotros">
            <Link href="/">
              <p>Quienes somos</p>
            </Link>
            <Link href="/">
              <p>Misión</p>
            </Link>
            <Link href="/">
              <p>Visión</p>
            </Link>
          </div>
        </div>

        <div className="footer_pharmek">
          <p className="logo_footer">PHARMEK</p>
          <div className="footer_mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.871972329881!2d-77.04279338459884!3d-12.109681191424235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c542e2d4c1%3A0xd7c997d9f3d7a99!2sAv.%20Pardo%20y%20Aliaga%2C%20San%20Isidro%2015073!5e0!3m2!1ses!2spe!4v1718733370260!5m2!1ses!2spe"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Pharmek"
            />
          </div>
        </div>
      </div>

      <div className="linea_blanca" />
    </footer>
  )
}
