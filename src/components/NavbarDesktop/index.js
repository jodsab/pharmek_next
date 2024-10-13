"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "@public/img/logo.jpg";

import "./styles.scss";

const ICONS_SIZE = 14;

const NavbarDesktop = () => {
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
          <Link href="/">
            <div className="login_user bordered">
              <FaUser size={ICONS_SIZE} />
              <p>Tu cuenta</p>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavbarDesktop;
