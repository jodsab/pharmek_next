"use client";
import SignupSchema from "./validation";
import React from "react";
import { Formik, Form, Field } from "formik";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import "./styles.scss";

const ContactenosPage = () => {
  return (
    <WithNavbarAndFooter>
      <div>
        <section className="container-contactenos">
          <section className="productos-titulo ">
            <h1>Contáctenos</h1>
          </section>
          <div className="container-contactenos-global">
            <div className="container-contactenos-titulo">
              <div className="container-informacion-personal">
                <p>Información personal</p>
              </div>
              <div className="container-informacion-personal-espacio"></div>
            </div>
            <div className="container-contactenos-contenido">
              <div className="container-contactenos-formulario">
                <div className="container--contactenos-formulario">
                  <Formik
                    initialValues={{
                      Nombre: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values) => {}}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Field
                          placeholder="Nombre"
                          className="formulario-input"
                          name="Nombre"
                        />
                        {errors.Nombre && touched.Nombre ? (
                          <div className="input-error">{errors.Nombre}</div>
                        ) : null}
                        <Field
                          placeholder="Apellido"
                          className="formulario-input"
                          name="Apellido"
                        />
                        {errors.Apellido && touched.Apellido ? (
                          <div className="input-error">{errors.Apellido}</div>
                        ) : null}
                        <Field
                          placeholder="Edad"
                          className="formulario-input"
                          name="Edad"
                        />
                        {errors.Edad && touched.Edad ? (
                          <div className="input-error">{errors.Edad}</div>
                        ) : null}
                        <Field
                          placeholder="Correo electrónico"
                          className="formulario-input"
                          name="Email"
                        />
                        {errors.Email && touched.Email ? (
                          <div className="input-error">{errors.Email}</div>
                        ) : null}
                        <Field
                          placeholder="Teléfono"
                          className="formulario-input"
                          name="Phone"
                        />
                        {errors.Phone && touched.Phone ? (
                          <div className="input-error">{errors.Phone}</div>
                        ) : null}
                        <Field
                          placeholder="Ocupación"
                          className="formulario-input"
                          name="Ocupation"
                        />
                        {errors.Ocupation && touched.Ocupation ? (
                          <div className="input-error">{errors.Ocupation}</div>
                        ) : null}
                        <Field
                          placeholder="Asunto"
                          className="formulario-input"
                          name="Asunto"
                        />
                        {errors.Asunto && touched.Asunto ? (
                          <div className="input-error">{errors.Asunto}</div>
                        ) : null}
                        <Field
                          placeholder="Mensaje"
                          className="formulario-input textarea"
                          name="Mensaje"
                        />
                        {errors.Mensaje && touched.Mensaje ? (
                          <div className="input-error">{errors.Mensaje}</div>
                        ) : null}
                        <div className="btn_container">
                          <button
                            className="formulario-input-enviar"
                            type="submit"
                          >
                            ENVIAR
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="container-contactenos-mapa">
                <div className="container--contactenos-mapa">
                  <iframe
                    className="contactenos-mapa"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.57749855627856!2d-77.02219066785051!3d-12.13813271657013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74f6307fa3294706!2sProyecto%20Connect%20%7C%20Inmobiliaria%20Edifica!5e0!3m2!1ses-419!2spe!4v1624846760578!5m2!1ses-419!2spe"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="container-contactenos-direccion">
                  <p>
                    {" "}
                    <strong>Dirección:</strong> Av Almirante Miguel Grau 1380,
                    Of 706 Barranco
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </WithNavbarAndFooter>
  );
};

export default ContactenosPage;
