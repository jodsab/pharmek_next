'use client'
import './styles.scss'

import { Form, Formik } from 'formik'
import React, { useState } from 'react'

import AtomInput from '@/atoms/AtomInput'

import { validationSchema } from './validation'

const ContactenosClient = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true)

    // Simula el envío (aquí va tu lógica real)
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    resetForm()

    setTimeout(() => {
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <div className="contactenos_modern_container container">
      <section className="contactenos_main_section">
        <div className="contactenos_grid">
          {/* Info Cards */}
          <div className="contactenos_info_section">
            <h2 className="contactenos_section_title">Información de Contacto</h2>

            <div className="contactenos_info_cards">
              <div className="contactenos_info_card">
                <div className="contactenos_info_icon">📍</div>
                <div className="contactenos_info_content">
                  <h3>Dirección</h3>
                  <p>Lima, Perú</p>
                </div>
              </div>

              <div className="contactenos_info_card">
                <div className="contactenos_info_icon">📞</div>
                <div className="contactenos_info_content">
                  <h3>Teléfono</h3>
                  <p>+51 XXX XXX XXX</p>
                </div>
              </div>

              <div className="contactenos_info_card">
                <div className="contactenos_info_icon">✉️</div>
                <div className="contactenos_info_content">
                  <h3>Email</h3>
                  <p>contacto@pharmek.com</p>
                </div>
              </div>

              <div className="contactenos_info_card">
                <div className="contactenos_info_icon">⏰</div>
                <div className="contactenos_info_content">
                  <h3>Horario</h3>
                  <p>Lun - Vie: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="contactenos_map_wrapper">
              <h3 className="contactenos_map_title">Encuéntranos</h3>
              <div className="contactenos_map_container">
                <iframe
                  className="contactenos_map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.57749855627856!2d-77.02219066785051!3d-12.13813271657013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74f6307fa3294706!2sProyecto%20Connect%20%7C%20Inmobiliaria%20Edifica!5e0!3m2!1ses-419!2spe!4v1624846760578!5m2!1ses-419!2spe"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contactenos_form_section">
            <div className="contactenos_form_card">
              <div className="contactenos_form_header">
                <h2>Envíanos un Mensaje</h2>
                <p>Completa el formulario y nos pondremos en contacto contigo</p>
              </div>

              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  celular: '',
                  asunto: '',
                  mensaje: ''
                }}
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
                      />
                    </div>

                    <button
                      className={`contactenos_submit_btn ${isSubmitting ? 'contactenos_submitting' : ''
                        } ${submitSuccess ? 'contactenos_success' : ''}`}
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
