"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/img/logo.png";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import { useAuth } from "@/hooks/auth/useAuthSession.hook";

import "./styles.scss";

function parseError(err) {
  console.log(err);
  if (!err) return null;
  if (typeof err === "string") return err;
  if (err.message) return err.message;
  if (err.error_description) return err.error_description;
  return "Ha ocurrido un error inesperado";
}

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { register: registerUser } = useAuth();

  const [error, setError] = useState(null); // null | string
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setError(null);
    setLoading(true);

    if (data.password !== data.confirmPassword) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    try {
      const { ok, message } = await registerUser(data);

      if (!ok) {
        setError(message);
        setLoading(false);
        return;
      }

      alert("¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.");
      router.push("/");
    } catch (err) {
      setError(parseError(err));
    } finally {
      setLoading(false);
    }
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
          <p className="text-3xl mx-auto my-4">Regístrate en Pharmek</p>

          <form onSubmit={onSubmit} className="w-200">
            {error && (
              <p className="bg-red-500 text-white p-3 rounded mb-2">{error}</p>
            )}

            {/* full_name */}
            <label className="text-slate-500 mb-2 block text-sm">
              Nombre completo:
            </label>
            <input
              type="text"
              {...register("full_name", {
                required: "El nombre completo es requerido",
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="Ingresa tu nombre completo"
            />
            {errors.full_name && (
              <span className="text-red-500 text-xs">
                {errors.full_name.message}
              </span>
            )}

            {/* user_name */}
            <label className="text-slate-500 mb-2 block text-sm">
              Nombre de usuario:
            </label>
            <input
              type="text"
              {...register("user_name", {
                required: "El nombre de usuario es requerido",
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="Ej: juan_perez"
            />
            {errors.user_name && (
              <span className="text-red-500 text-xs">
                {errors.user_name.message}
              </span>
            )}

            {/* email */}
            <label className="text-slate-500 mb-2 block text-sm">Email:</label>
            <input
              type="email"
              {...register("email", { required: "El correo es requerido" })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="Ingresa tu correo electrónico"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}

            {/* celular */}
            <label className="text-slate-500 mb-2 block text-sm">
              Celular:
            </label>
            <input
              type="text"
              {...register("celular", { required: "El celular es requerido" })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="Ingresa tu número de celular"
            />
            {errors.celular && (
              <span className="text-red-500 text-xs">
                {errors.celular.message}
              </span>
            )}

            {/* password */}
            <label className="text-slate-500 mb-2 block text-sm">
              Contraseña:
            </label>
            <input
              type="password"
              {...register("password", {
                required: "La contraseña es requerida",
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="********"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            {/* confirmPassword */}
            <label className="text-slate-500 mb-2 block text-sm">
              Confirma tu contraseña:
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirmar la contraseña es requerido",
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="********"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-lg mt-2 text-white ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green hover:bg-blue"
              }`}
            >
              {loading ? "Registrando..." : "Registrarme"}
            </button>
          </form>
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default Registro;
