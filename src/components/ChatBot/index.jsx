// components/Chatbot.jsx
'use client'

import './styles.scss'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react' // Asegura useRef importado
import { BsChatDotsFill } from 'react-icons/bs'
import { IoMdClose, IoMdSend } from 'react-icons/io'

import gatito from './gatito.png'
import perfil from './perfil.png'

const MISTRAL_API_URL = '/api/mistral'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! Soy Pharmek Michibot. ¿En qué puedo ayudarte? 🐱💊'
    }
  ])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const fetchMistralResponse = async query => {
    setIsSending(true)
    try {
      const response = await fetch(MISTRAL_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
      const text = await response.text()
      try {
        const result = JSON.parse(text)
        return result?.text || 'No encontré información. 🐱💭🍣'
      } catch (parseError) {
        console.error('Error al parsear respuesta de la API:', parseError, 'Texto recibido:', text)
        return 'Respuesta inesperada de la API. 😿'
      }
    } catch (error) {
      console.error('Error al conectar con Mistral:', error)
      return 'Error al obtener la respuesta. 😿'
    } finally {
      setIsSending(false)
    }
  }

  const handleSendMessage = async () => {
    if (!input.trim() || isSending) return

    const userMessage = { sender: 'user', text: input.trim() }
    setInput('')

    setMessages(prev => [...prev, userMessage])

    const responseText = await fetchMistralResponse(userMessage.text)
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: responseText }])
    }, 500)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    // Contenedor principal flotante
    <div className="chatbot-container">
      {' '}
      {/* Clase SCSS */}
      {/* Overlay oscuro para mobile */}
      <AnimatePresence>
        {' '}
        {/* Usamos AnimatePresence para animar la aparición/desaparición del overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="chatbot-overlay" // Clase SCSS
          ></motion.div>
        )}
      </AnimatePresence>
      {/* Animación de aparición/desaparición de la ventana del chatbot */}
      <AnimatePresence>
        {isOpen && (
          // Ventana del Chatbot
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="chatbot-window" // Clase SCSS
          >
            {/* Botón de cierre */}
            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close-button" // Clase SCSS
            >
              <IoMdClose size={20} />
            </button>

            {/* Título del Chatbot */}
            <div className="chatbot-title">
              {' '}
              {/* Clase SCSS */}
              Pharmek Michibot 🐱
            </div>

            {/* Área de Mensajes con Scroll */}
            <div className="chatbot-messages-area">
              {' '}
              {/* Clase SCSS */}
              {messages.map((msg, index) => (
                // Contenedor individual del mensaje (para alinear izquierda/derecha)
                <div
                  key={index} // Considera usar un ID único si es posible en lugar del index
                  className={`message-row ${msg.sender === 'bot' ? 'bot' : 'user'}`} // Clase SCSS para alineación
                >
                  {/* Avatar del Bot */}
                  {msg.sender === 'bot' && (
                    <Image
                      src={gatito}
                      alt="Bot"
                      width={32} // Mantén width/height para next/image
                      height={32} // Mantén width/height
                      className="message-avatar" // Clase SCSS
                    />
                  )}
                  {/* Contenido del Mensaje (la "burbuja") */}
                  <div className="message-bubble">
                    {' '}
                    {/* Clase SCSS */}
                    {msg.text}
                  </div>
                  {/* Avatar del Usuario */}
                  {msg.sender === 'user' && (
                    <Image
                      src={perfil}
                      alt="User"
                      width={32} // Mantén width/height
                      height={32} // Mantén width/height
                      className="message-avatar" // Clase SCSS
                    />
                  )}
                </div>
              ))}
              {/* Ref para el scroll automático */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input y Botón de Enviar */}
            <div className="chatbot-input-area">
              {' '}
              {/* Clase SCSS */}
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="chatbot-input" // Clase SCSS
                placeholder="Escribe un mensaje..."
                disabled={isSending}
              />
              <button
                onClick={handleSendMessage}
                className="chatbot-send-button" // Clase SCSS
                disabled={isSending}
              >
                <IoMdSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Botón flotante para abrir/cerrar chatbot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle-button" // Clase SCSS
      >
        {isOpen ? <IoMdClose size={24} /> : <BsChatDotsFill size={24} />}
      </button>
    </div>
  )
}

export default Chatbot
