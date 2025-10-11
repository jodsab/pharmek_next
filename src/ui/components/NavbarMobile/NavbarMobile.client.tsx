'use client';
import React, { JSX, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import './styles.scss';

const ICONS_SIZE = 14;
const MENU_SIZE = 26;

export default function NavbarMobileClient(): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <div className="navbar_mobile_container">
      <nav className="nav">
        <Link href="/" className="logo_link" onClick={close}>
          <Image className="logo" height={50} width={120} src="/assets/images/business/logo.jpg" alt="logo" />
        </Link>

        <div className="rigth_container">
          <Link href="/" onClick={close}>
            <div className="login_user bordered" role="button" aria-label="Tu cuenta">
              <FaUser size={ICONS_SIZE} />
              <p>Tu cuenta</p>
            </div>
          </Link>

          <button className="toggle" onClick={toggle} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
            {open ? <IoClose size={MENU_SIZE} /> : <IoMenuOutline size={MENU_SIZE} />}
          </button>
        </div>
      </nav>

      <div className="toggle_menu">
        <div className={open ? 'mobile_bar show' : 'mobile_bar'}>
          <ul className="menu_bar" onClick={close}>
            <li><Link href="/productos">PRODUCTOS</Link></li>
            <li><Link href="/distribuidores">DISTRIBUIDORES</Link></li>
            <li><Link href="/contactenos">CONTÁCTENOS</Link></li>
            <li><Link href="/nosotros">NOSOTROS</Link></li>
            <li><Link href="/">ASESORÍA</Link></li>
            <li><Link href="/blog">BLOG</Link></li>
          </ul>

          <div>
            <ul className="socials">
              <li><a href="#" aria-label="TikTok" onClick={(e) => e.preventDefault()}><FaTiktok size={MENU_SIZE} /></a></li>
              <li><a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}><FaFacebook size={MENU_SIZE} /></a></li>
              <li><a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}><FaInstagram size={MENU_SIZE} /></a></li>
              <li><a href="#" aria-label="WhatsApp" onClick={(e) => e.preventDefault()}><IoLogoWhatsapp size={MENU_SIZE} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
