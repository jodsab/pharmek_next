'use client'
import './styles.scss'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { JSX, useCallback, useEffect, useRef, useState } from 'react'
import { BsChatDotsFill } from 'react-icons/bs'
import { IoMdClose, IoMdSend } from 'react-icons/io'

import gatito from './assets/gatito.png'
import perfil from './assets/perfil.png'

type Message = {
  sender: 'bot' | 'user'
  text: string
}

const MISTRAL_API_URL = '/api/mistral'

export default function Chatbot(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: '¡Hola! Soy Pharmek Michibot. ¿En qué puedo ayudarte? 🐱💊' }
  ])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const fetchMistralResponse = useCallback(async (query: string) => {
    setIsSending(true)
    try {
      const res = await fetch(MISTRAL_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
      const text = await res.text()
      try {
        const parsed = JSON.parse(text)
        return parsed?.text ?? 'No encontré información. 🐱'
      } catch {
        return text || 'Respuesta inesperada de la API. 😿'
      }
    } catch {
      return 'Error al obtener la respuesta. 😿'
    } finally {
      setIsSending(false)
    }
  }, [])

  const handleSendMessage = useCallback(async () => {
    const trimmed = input.trim()
    if (!trimmed || isSending) return
    const userMessage: Message = { sender: 'user', text: trimmed }
    setInput('')
    setMessages(prev => [...prev, userMessage])

    const responseText = await fetchMistralResponse(trimmed)
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: responseText }])
    }, 500)
  }, [input, isSending, fetchMistralResponse])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="chatbot-overlay"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="chatbot-window"
            role="dialog"
            aria-label="Chatbot"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close-button"
              aria-label="Cerrar chat"
            >
              <IoMdClose size={20} />
            </button>

            <div className="chatbot-title">Pharmek Michibot 🐱</div>

            <div className="chatbot-messages-area" role="log" aria-live="polite">
              {messages.map((msg, i) => (
                <div key={i} className={`message-row ${msg.sender === 'bot' ? 'bot' : 'user'}`}>
                  {msg.sender === 'bot' && (
                    <Image
                      src={gatito}
                      alt="Bot"
                      width={32}
                      height={32}
                      className="message-avatar"
                    />
                  )}
                  <div className="message-bubble">{msg.text}</div>
                  {msg.sender === 'user' && (
                    <Image
                      src={perfil}
                      alt="Usuario"
                      width={32}
                      height={32}
                      className="message-avatar"
                    />
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-area">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="chatbot-input"
                placeholder="Escribe un mensaje..."
                disabled={isSending}
                aria-label="Mensaje"
              />
              <button
                onClick={handleSendMessage}
                className="chatbot-send-button"
                disabled={isSending}
                aria-label="Enviar mensaje"
              >
                <IoMdSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(v => !v)}
        className="chatbot-toggle-button"
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isOpen ? <IoMdClose size={24} /> : <BsChatDotsFill size={24} />}
      </button>
    </div>
  )
}
