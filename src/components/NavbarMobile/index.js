"use client";
import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { WHATSAPP } from "@/core/whatsapp";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { FaUser, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import {} from "react-icons/io5";
import logo from "@public/img/logo.jpg";

import "./styles.scss";

const ICONS_SIZE = 14;
const MENU_SIZE = 26;

const NavbarMobile = () => {
  const [menuMobileClass, setMenuMobileClass] = useState(false);

  const showDrawer = () => {
    setMenuMobileClass(!menuMobileClass);
  };
  const onClose = () => {
    setMenuMobileClass(false);
  };

  return (
    <div className="navbar_mobile_container">
      <nav className="nav">
        <Link className="logo_link" href="/">
          <Image
            className="logo"
            height={500}
            width={500}
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="rigth_container">
          <Link href="/">
            <div className="login_user bordered">
              <FaUser size={ICONS_SIZE} />
              <p>Tu cuenta</p>
            </div>
          </Link>

          <button
            className="toggle"
            onClick={() => {
              showDrawer();
            }}
          >
            {menuMobileClass ? <IoClose /> : <IoMenuOutline />}
          </button>
        </div>
      </nav>
      <div className="toggle_menu">
        {/* <div className="black_background"></div> */}
        <div
          className={`${menuMobileClass ? "mobile_bar show" : "mobile_bar"}  `}
        >
          <ul className="menu_bar">
            <li>
              <Link href="/productos">
                <p>PRODUCTOS</p>
              </Link>
            </li>
            <li>
              <Link href="/distribuidores">
                <p>DISTRIBUIDORES</p>
              </Link>
            </li>
            <li>
              <Link href="/contactenos">
                <p>CONTÁCTENOS</p>
              </Link>
            </li>
            <li>
              <Link href="/nosotros">
                <p>NOSOTROS</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>ASESORÍA</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p>BLOG</p>
              </Link>
            </li>
          </ul>
          <div>
            <ul className="socials">
              <li>
                <button>
                  <FaTiktok size={MENU_SIZE} />
                </button>
              </li>
              <li>
                <button>
                  <FaFacebook size={MENU_SIZE} />
                </button>
              </li>
              <li>
                <button>
                  <FaInstagram size={MENU_SIZE} />
                </button>
              </li>
              <li>
                <button>
                  <IoLogoWhatsapp size={MENU_SIZE} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
