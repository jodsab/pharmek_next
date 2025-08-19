"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaUserTimes, FaUserPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "@public/img/logo.jpg";
import { useAuthStore } from "@/store/useAuthStore";

import "./styles.scss";

const ICONS_SIZE = 14;

const NavbarDesktop = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="navbar_container_mobile">
      <div className="desktop_container_area"></div>
      <div className="desktop_container">
        <nav>
          <Link className="logo_link" href="/">
            <Image
              className="logo"
              height={500}
              width={"100%"}
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="buscador">
            <input placeholder="Ingrese su búsqueda aquí" />
            <button className="button_icon">
              <CiSearch />
            </button>
          </div>
          <ul className="menu_bar">
            <li>
              <Link href="/productos">
                <p>Productos</p>
              </Link>
            </li>
            <li>
              <Link href="/distribuidores">
                <p>Distribuidores</p>
              </Link>
            </li>
            <li>
              <Link href="/contactenos">
                <p>Contáctenos</p>
              </Link>
            </li>
            <li>
              <Link href="/nosotros">
                <p>Nosotros</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>Asesoría</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>Blog</p>
              </Link>
            </li>
          </ul>
          {user ? (
            <div className="flex items-center gap-4">
              <p>
                Hola, <strong>{user?.email}</strong>!
              </p>
              <button
                onClick={logout}
                className="flex items-center gap-2 border border-red-600 bg-white text-red-600 py-2 px-3 rounded hover:bg-red-600 hover:text-white"
              >
                <FaUserTimes size={16} />
                <p>Cerrar sesión</p>
              </button>
            </div>
          ) : (
            <div className="flex gap-5">
              <Link
                className="group rounded bg-white border border-green p-2 flex items-center hover:bg-green"
                href="/login"
              >
                <div className="flex items-center gap-2 text-green group-hover:text-white">
                  <FaUser size={ICONS_SIZE} />
                  <p>Iniciar Sesión</p>
                </div>
              </Link>
              <Link
                className="group rounded bg-white border border-blue p-2 flex items-center hover:text-white hover:bg-blue"
                href="/registro"
              >
                <div className="flex items-center gap-2 text-blue group-hover:text-white">
                  <FaUserPlus size={16} />
                  <p>Crear cuenta</p>
                </div>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavbarDesktop;
