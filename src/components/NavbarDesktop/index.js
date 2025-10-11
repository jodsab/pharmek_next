"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUser, FaUserTimes, FaUserPlus, FaHome } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import logo from "@public/img/logo.jpg";
import { Dropdown } from "antd";

import { useAuthStore } from "@/store/useAuthStore";
import { useAuth } from "@/hooks/auth/useAuthSession.hook";

import "./styles.scss";

const ICONS_SIZE = 14;

const NavbarDesktop = () => {
  const user = useAuthStore((state) => state.user);
  const { logout } = useAuth();
  const router = useRouter();

  const handleClickOnProfile = () => {
    router.push("/perfil");
  };

  return (
    <div className="navbar_container_mobile">
      <div className="desktop_container_area"></div>
      <div className="desktop_container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link className="logo_link" href="/">
            <Image
              className="logo"
              height={50}
              width={120}
              src={logo}
              alt="logo"
            />
          </Link>

          {/* Menu */}
          <ul className="menu_bar flex items-center gap-6">
            <li>
              <Link
                href="/productos"
                className="flex items-center gap-2 hover:text-green"
              >
                <p>Productos</p>
              </Link>
            </li>
            <li>
              <Link
                href="/distribuidores"
                className="flex items-center gap-2 hover:text-green"
              >
                <p>Distribuidores</p>
              </Link>
            </li>
            <li>
              <Link
                href="/contactenos"
                className="flex items-center gap-2 hover:text-green"
              >
                <p>Contáctenos</p>
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className="flex items-center gap-2 hover:text-green"
              >
                <p>Nosotros</p>
              </Link>
            </li>
            <li>
              <Link
                href="/albergue"
                className="flex items-center gap-2 hover:text-green"
              >
                <p>Albergue</p>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-green"
              >
                <p>Asesoría</p>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-green"
              >
                <p>Blog</p>
              </Link>
            </li>
          </ul>

          {/* Auth Options */}
          {user ? (
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <button onClick={handleClickOnProfile}>
                        <p>
                          Hola, <strong>{user?.email}</strong>!
                        </p>
                      </button>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <button
                        onClick={logout}
                        className="flex items-center gap-2 border w-full border-red-600 bg-white text-red-600 py-2 px-3 rounded hover:bg-red-600 hover:text-white"
                      >
                        <FaUserTimes size={16} />
                        <p>Cerrar sesión</p>
                      </button>
                    ),
                  },
                ],
              }}
              getPopupContainer={() => document.body}
            >
              <a
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1 cursor-pointer"
              >
                <HiOutlineUser />
                Mi cuenta
                <IoMdArrowDropdown />
              </a>
            </Dropdown>
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
