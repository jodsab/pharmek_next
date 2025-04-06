"use client";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/img/logo.png";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";

import "./styles.scss";

const Login = () => {
  const { data: session, status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/");
      router.refresh();
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
          <p className="text-3xl mx-auto my-4">Inicia sesión</p>
          <form onSubmit={onSubmit} className="w-100">
            {error && (
              <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
                {error}
              </p>
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
                  message: "Email is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="user@email.com"
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
              Password:
            </label>
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-100 w-full outline-none"
              placeholder="******"
            />

            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}

            <button className="w-full bg-green hover:bg-blue text-white p-3 rounded-lg mt-2">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default Login;
