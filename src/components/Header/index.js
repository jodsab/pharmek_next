"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";
import logo from "@public/img/logo.jpg";
import "./styles.scss";
import { WHATSAPP } from "@/core/whatsapp";

const ICONS_SIZE = 30;

const MENU_SHOW = {
  showing: "menu",
  notShowing: "menu menu_visible",
};

const Header = () => {
  const [menuMobileClass, setMenuMobileClass] = useState(false);

  return (
    <div className="header">
      <nav className="nav">
        <Link
          className="logo-link "
          href="/"
          onClick={() => setMenuMobileClass(false)}
        >
          <Image className="logo" src={logo} alt="logo" />
        </Link>
        <button
          className="toggle"
          onClick={() => {
            setMenuMobileClass(!menuMobileClass);
          }}
        >
          <FaBars size={ICONS_SIZE} />
        </button>
        <ul
          className={menuMobileClass ? MENU_SHOW.notShowing : MENU_SHOW.showing}
        >
          <li className="menu-item ">
            <Link
              className="menu-link "
              id="productos"
              href="/productos"
              onClick={() => setMenuMobileClass(false)}
            >
              Productos
            </Link>
          </li>
          <li className="menu-item ">
            <Link
              className="menu-link "
              id="distribuidores"
              href="/distribuidores"
              onClick={() => setMenuMobileClass(false)}
            >
              Distribuidores
            </Link>
          </li>
          <li className="dropdown menu-item ">
            <Link
              className=" menu-link "
              href="/contactenos"
              onClick={() => setMenuMobileClass(false)}
            >
              Contáctenos
            </Link>
            <ul className="dropdown-content ">
              <div className="drop ">
                <li className="menu-item ">
                  <Link
                    className="menu-link "
                    href="/trabaje-con-nosotros"
                    onClick={() => setMenuMobileClass(false)}
                  >
                    Trabaje con nosotros
                  </Link>
                </li>
              </div>
            </ul>
          </li>

          <li className="menu-item-sobre ">
            <Link
              className="menu-link-sobre "
              href="trabaje-con-nosotros"
              onClick={() => setMenuMobileClass(false)}
            >
              Trabaje con nosotros
            </Link>
          </li>
          <li className="menu-item ">
            <Link
              className="menu-link "
              href="/nosotros"
              onClick={() => setMenuMobileClass(false)}
            >
              Nosotros
            </Link>
          </li>
        </ul>
        <section className="redes">
          <Link
            className="redes-link "
            href="https://www.facebook.com/Pharmek-Laboratories-SAC-186380124730653"
            target="_blank"
          >
            <FaFacebookSquare size={ICONS_SIZE} />
          </Link>
          <Link
            className="redes-link "
            href="https://www.instagram.com/pharmek_oficial_/ "
            target="_blank"
          >
            <FaInstagram size={ICONS_SIZE} />
          </Link>
          <Link className="redes-link " href={WHATSAPP} target="_blank">
            <FaWhatsapp size={ICONS_SIZE} />
          </Link>
        </section>
      </nav>
    </div>
  );
};

export default Header;
