"use client";
import { validationSchema } from "./validation";
import React from "react";
import { Formik, Form, Field } from "formik";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import AtomInput from "@/atoms/AtomInput";
import "./styles.scss";

const ContactenosPage = () => {
  return (
    <WithNavbarAndFooter>
      <div className="contactanos_container content">
        <Formik
          initialValues={{
            name: "",
            email: "",
            celular: "",
            asunto: "",
            mensaje: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {}}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form_container">
                <h3>FORMULARIO</h3>
                <AtomInput
                  placeholder="Nombre completo"
                  name="name"
                  error={errors.name}
                  touched={touched.name}
                />
                <AtomInput
                  placeholder="Correo electrónico"
                  name="email"
                  error={errors.email}
                  touched={touched.email}
                />
                <AtomInput
                  placeholder="Número de celular"
                  name="celular"
                  error={errors.celular}
                  touched={touched.celular}
                />
                <AtomInput
                  placeholder="Asunto"
                  name="asunto"
                  error={errors.asunto}
                  touched={touched.asunto}
                />
                <AtomInput
                  placeholder="Escriba su mensaje"
                  name="mensaje"
                  error={errors.mensaje}
                  touched={touched.mensaje}
                />
                <div className="btn_container">
                  <button className="formulario-input-enviar" type="submit">
                    <p>ENVIAR</p>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mapa_container">
          <iframe
            className="contactenos-mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.57749855627856!2d-77.02219066785051!3d-12.13813271657013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74f6307fa3294706!2sProyecto%20Connect%20%7C%20Inmobiliaria%20Edifica!5e0!3m2!1ses-419!2spe!4v1624846760578!5m2!1ses-419!2spe"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default ContactenosPage;
