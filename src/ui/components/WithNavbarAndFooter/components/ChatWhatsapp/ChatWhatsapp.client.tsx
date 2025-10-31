'use client'

import './styles.scss'

import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { SOCIAL_LINKS } from '@/config/routes'

interface ChatWhatsappClientProps {
  // Define tus props aquí
}

const ChatWhatsappClient = (props: ChatWhatsappClientProps) => {
  return (
    <Link
      href={SOCIAL_LINKS.WHATSAPP}
      className="btn_float btn_wsp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </Link>
  )
}

export default ChatWhatsappClient
