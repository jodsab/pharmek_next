import React from 'react'

import ChatWhatsappClient from './ChatWhatsapp.client'

interface ChatWhatsappProps {
  // Define tus props aquí
}

const ChatWhatsapp = (props: ChatWhatsappProps) => {
  // Fetch de datos del servidor aquí
  // const data = await fetchData()

  return <ChatWhatsappClient {...props} />
}

export default ChatWhatsapp
