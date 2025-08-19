"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/img/logo.png";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import supabase from "@/libs/supabase";

import "./styles.scss";

const Regitro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const { email, password, username, celular } = data;

    // 1. Registrar usuario en auth
    const { data: signupData, error: signupError } = await supabase.auth.signUp(
      {
        email,
        password,
      }
    );

    if (signupError) {
      alert("Error registrando: " + signupError.message);
      return;
    }

    const user = signupData.user;

    // 2. Guardar datos adicionales en tu tabla `usuarios`
    const { error: insertError } = await supabase.from("usuarios").insert([
      {
        id_user: user.id, // debe coincidir con el campo de tu tabla
        nombre: username,
        celular: celular,
        email: email,
      },
    ]);

    if (insertError) {
      alert("Error guardando datos del usuario: " + insertError.message);
      return;
    }

    alert("¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.");
    router.push("/login"); // o a donde quieras redirigir
  });

  return (
    <WithNavbarAndFooter>
      <div className="login_container">
        <div className="login_area p-10">
          <Image
            className="mx-auto"
            src={logo}
            width={0}
            height={0}
            alt="logo"
          />
          <p className="text-3xl mx-auto my-4">Registrate en Pharmek</p>
          <form onSubmit={onSubmit} className="w-200">
            <label
              htmlFor="username"
              className="text-slate-500 mb-2 block text-sm"
            >
              Nombre:
            </label>
            <input
              type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="Ingresa tu nombre"
            />

            {errors.username && (
              <span className="text-red-500 text-xs">
                {errors.username.message}
              </span>
            )}

            <label
              htmlFor="email"
              className="text-slate-500 mb-2 block text-sm"
            >
              Email:
            </label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El correo es requerido",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="Ingresa tu correo electrónico"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}

            <label
              htmlFor="celular"
              className="text-slate-500 mb-2 block text-sm"
            >
              Celular:
            </label>
            <input
              type="text"
              {...register("celular", {
                required: {
                  value: true,
                  message: "El celular es requerido",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="Ingresa tu número de celular"
            />
            {errors.celular && (
              <span className="text-red-500 text-xs">
                {errors.celular.message}
              </span>
            )}

            <label
              htmlFor="password"
              className="text-slate-500 mb-2 block text-sm"
            >
              Contraseña:
            </label>
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="********"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            <label
              htmlFor="confirmPassword"
              className="text-slate-500 mb-2 block text-sm"
            >
              Confirma tu contraseña:
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirmar las contraseña es requerida",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="********"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}

            <button className="w-full bg-green hover:bg-blue text-white p-3 rounded-lg mt-2">
              Registrarme
            </button>
          </form>
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default Regitro;
