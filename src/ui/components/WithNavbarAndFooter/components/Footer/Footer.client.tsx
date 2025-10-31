'use client'

// FooterClient.tsx — versión profesional y moderna para farmacéutica veterinaria
// * Sin CSS Modules: usa clases globales en styles.scss (classnames)
// * Semántico + accesible + responsive + SEO JSON‑LD

import './styles.scss'

import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { IoMdMail } from 'react-icons/io'

import SOCIAL_NETWORKS from '@/core/socialNetworks'

const SIZE_CONTACT = 20
const currentYear = new Date().getFullYear()

export default function FooterClient(): React.JSX.Element {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PHARMEK',
    url: 'https://pharmek.com',
    email: 'ventas@pharmek.com',
    telephone: '+51 974 587 086',
    sameAs: [
      SOCIAL_NETWORKS?.tiktok?.url,
      SOCIAL_NETWORKS?.facebook?.url,
      SOCIAL_NETWORKS?.instagram?.url
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Pardo y Aliaga',
      addressLocality: 'San Isidro',
      postalCode: '15073',
      addressCountry: 'PE'
    }
  }

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Información de contacto y navegación secundaria
      </h2>

      {/* JSON‑LD para SEO */}
      <Script
        id="pharmek-org-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />

      <div className="footer-container content">
        {/* Contacto */}
        <section className="footer-col" aria-labelledby="contacto-heading">
          <h3 id="contacto-heading" className="section-header">
            Contacto
          </h3>
          <ul className="footer-list">
            <li className="footer-row">
              <FiPhoneCall size={SIZE_CONTACT} aria-hidden />
              <Link className="footer-link" href="tel:+51974587086">
                (+51) 974‑587‑086
              </Link>
            </li>
            <li className="footer-row">
              <IoMdMail size={SIZE_CONTACT} aria-hidden />
              <Link className="footer-link" href="mailto:ventas@pharmek.com">
                ventas@pharmek.com
              </Link>
            </li>
          </ul>
        </section>

        {/* Redes sociales */}
        <nav className="footer-col" aria-labelledby="redes-heading">
          <h3 id="redes-heading" className="section-header">
            Redes sociales
          </h3>
          <ul className="footer-socials">
            <li>
              <Link
                href={SOCIAL_NETWORKS.tiktok.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TikTok de Pharmek"
              >
                <FaTiktok aria-hidden />
                <span className="sr-only">TikTok</span>
              </Link>
            </li>
            <li>
              <Link
                href={SOCIAL_NETWORKS.facebook.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook de Pharmek"
              >
                <FaFacebookF aria-hidden />
                <span className="sr-only">Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                href={SOCIAL_NETWORKS.instagram.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram de Pharmek"
              >
                <FaInstagram aria-hidden />
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Nosotros */}
        <section className="footer-col" aria-labelledby="nosotros-heading">
          <h3 id="nosotros-heading" className="section-header">
            Nosotros
          </h3>
          <ul className="footer-list-links">
            <li>
              <Link href="/quienes-somos" className="footer-link">
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link href="/mision" className="footer-link">
                Misión
              </Link>
            </li>
            <li>
              <Link href="/vision" className="footer-link">
                Visión
              </Link>
            </li>
          </ul>
        </section>

        {/* Marca + mapa */}
        <section className="footer-brand" aria-labelledby="ubicacion-heading">
          <p className="logo-footer" aria-label="PHARMEK">
            PHARMEK
          </p>
          <h3 id="ubicacion-heading" className="sr-only">
            Ubicación
          </h3>
          <div className="footer-map-wrap">
            <iframe
              className="footer-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.871972329881!2d-77.04279338459884!3d-12.109681191424235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c542e2d4c1%3A0xd7c997d9f3d7a99!2sAv.%20Pardo%20y%20Aliaga%2C%20San%20Isidro%2015073!5e0!3m2!1ses!2spe!4v1718733370260!5m2!1ses!2spe"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Pharmek"
            />
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {currentYear} PHARMEK.</p>
        <ul className="footer-legal">
          <li>
            <Link href="/privacidad" className="footer-link">
              Privacidad
            </Link>
          </li>
          <li>
            <Link href="/terminos" className="footer-link">
              Términos
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
