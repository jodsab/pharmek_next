"use client";
import React from "react";
import Image from "next/image";
import AtomInput from "@/atoms/AtomInput";
import { Formik, Form } from "formik";
import logo from "../../../public/img/logo.png";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import { validationSchema } from "./validation";

import "./styles.scss";

const Login = () => {
  return (
    <WithNavbarAndFooter>
      <div className="login_container">
        <div className="login_area">
          <Image src={logo} width={0} height={0} alt="logo" />
          <p className="inicia_sesion">Inicia sesión en Pharmek</p>
          <div className="black_line"></div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
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
                <button className="submit" type="submit">
                  <p>Iniciar sesión</p>
                </button>
                <button className="btn_forget">
                  <p>¿Has olvidado la contraseña?</p>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default Login;
