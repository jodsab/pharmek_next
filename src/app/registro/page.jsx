"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import logo from "../../../public/img/logo.png";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";

import "./styles.scss";

const Regitro = () => {
  const { data: session, status } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resJson = await res.json();

      if (res.ok) {
        router.push("/login");
      } else {
        alert(resJson);
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (status === "loading") {
    }

    if (!session) {
    } else {
      router.push("/");
    }
  }, [session]);

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
