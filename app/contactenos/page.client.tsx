'use client'

import './styles.scss'

import { Form, Formik } from 'formik'
import React, { useState } from 'react'

import AtomInput from '@/ui/components/AtomInput'

import { validationSchema } from './validation'

const ContactenosClient = (): React.JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (values: any, { resetForm }: any): Promise<void> => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    resetForm()
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  return (
    <div className="contactenos_modern_container container">
      <section className="contactenos_main_section">
        <div className="contactenos_grid">
          {/* ...tu bloque de info, mapa, etc... */}

          <div className="contactenos_form_section">
            <div className="contactenos_form_card">
              <div className="contactenos_form_header">
                <h2>Envíanos un Mensaje</h2>
                <p>Completa el formulario y nos pondremos en contacto contigo</p>
              </div>

              <Formik
                initialValues={{ name: '', email: '', celular: '', asunto: '', mensaje: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="contactenos_form">
                    <div className="contactenos_input_group">
                      <label className="contactenos_label">
                        <span className="contactenos_label_icon">👤</span>
                        Nombre completo
                      </label>
                      <AtomInput
                        placeholder="Ingresa tu nombre"
                        name="name"
                        error={errors.name}
                        touched={touched.name}
                        type="text"
                        className="formulario-input"
                      />
                    </div>

                    <div className="contactenos_input_group">
                      <label className="contactenos_label">
                        <span className="contactenos_label_icon">📧</span>
                        Correo electrónico
                      </label>
                      <AtomInput
                        placeholder="ejemplo@correo.com"
                        name="email"
                        error={errors.email}
                        touched={touched.email}
                        type="email"
                        className="formulario-input"
                      />
                    </div>

                    <div className="contactenos_input_group">
                      <label className="contactenos_label">
                        <span className="contactenos_label_icon">📱</span>
                        Número de celular
                      </label>
                      <AtomInput
                        placeholder="+51 XXX XXX XXX"
                        name="celular"
                        error={errors.celular}
                        touched={touched.celular}
                        type="tel"
                        className="formulario-input"
                      />
                    </div>

                    <div className="contactenos_input_group">
                      <label className="contactenos_label">
                        <span className="contactenos_label_icon">📝</span>
                        Asunto
                      </label>
                      <AtomInput
                        placeholder="¿Sobre qué quieres consultarnos?"
                        name="asunto"
                        error={errors.asunto}
                        touched={touched.asunto}
                        type="text"
                        className="formulario-input"
                      />
                    </div>

                    <div className="contactenos_input_group">
                      <label className="contactenos_label">
                        <span className="contactenos_label_icon">💬</span>
                        Mensaje
                      </label>
                      <AtomInput
                        placeholder="Escribe tu mensaje aquí..."
                        name="mensaje"
                        error={errors.mensaje}
                        touched={touched.mensaje}
                        type="text"
                        className="formulario-input"
                      />
                    </div>

                    <button
                      className={`contactenos_submit_btn ${isSubmitting ? 'contactenos_submitting' : ''} ${submitSuccess ? 'contactenos_success' : ''}`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="contactenos_spinner"></span>
                          Enviando...
                        </>
                      ) : submitSuccess ? (
                        <>
                          <span>✓</span>
                          ¡Mensaje Enviado!
                        </>
                      ) : (
                        <>
                          <span>📤</span>
                          Enviar Mensaje
                        </>
                      )}
                    </button>

                    {submitSuccess && (
                      <div className="contactenos_success_message">
                        ¡Gracias por contactarnos! Te responderemos pronto.
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactenosClient
