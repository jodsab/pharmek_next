"use client";
import React from "react";
import Image from "next/image";
import AtomInput from "@/atoms/AtomInput";
import { Formik, Form } from "formik";
import logo from "../../../public/img/logo.png";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import { validationSchema } from "./validation";

import "./styles.scss";

const Regitro = () => {
  return (
    <WithNavbarAndFooter>
      <WithNavbarAndFooter>
        <div className="login_container">
          <div className="login_area">
            <Image src={logo} width={0} height={0} alt="logo" />
            <p className="inicia_sesion">Registrate en Pharmek</p>
            <div className="black_line"></div>
            <Formik
              initialValues={{
                nombre: "",
                email: "",
                celular: "",
                password: "",
                rePassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <AtomInput
                    placeholder="Escriba su nombre"
                    label="Nombre completo"
                    name="nombre"
                    error={errors.nombre}
                    touched={touched.nombre}
                  />
                  <AtomInput
                    placeholder="Escriba su celular"
                    label="Numero de celular"
                    name="celular"
                    error={errors.celular}
                    touched={touched.celular}
                  />
                  <AtomInput
                    placeholder="Escriba su correo electrónico"
                    label="Correo electrónico"
                    name="email"
                    error={errors.email}
                    touched={touched.email}
                  />
                  <AtomInput
                    placeholder="Escriba su contraseña"
                    label="Contraseña"
                    name="password"
                    type="password"
                    error={errors.password}
                    touched={touched.password}
                  />
                  <AtomInput
                    placeholder="Repita su contraseña"
                    label="Confirmar contraseña"
                    name="rePassword"
                    type="password"
                    error={errors.rePassword}
                    touched={touched.rePassword}
                  />
                  <button className="submit" type="submit">
                    <p>Registrarme</p>
                  </button>
                  <button className="btn_forget">
                    <p>¿Ya tienes una cuenta?</p>
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </WithNavbarAndFooter>
    </WithNavbarAndFooter>
  );
};

export default Regitro;
