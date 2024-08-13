import React from "react";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { FaTiktok, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import SOCIAL_NETWORKS from "@/core/socialNetworks";

import "./styles.scss";

const SIZE_SOCIAL_NETWORK = 33;
const SIZE_CONTACT = 20;

const Footer = () => {
  return (
    <footer>
      <div className="footer_container content">
        <div>
          <p className="section_header">CONTACTO</p>
          <div>
            <div className="footer_area">
              <FiPhoneCall size={20} />
              <p>(+51) 974-587-086</p>
            </div>
            <div className="footer_area">
              <IoMdMail size={20} />
              <p>ventas@pharmek.com</p>
            </div>
          </div>
        </div>
        <div>
          <p className="section_header">REDES SOCIALES</p>
          <div className="buttons_socials">
            <Link href={SOCIAL_NETWORKS.tiktok.url} target="_blank">
              <FaTiktok />
            </Link>
            {/*           <Link href={SOCIAL_NETWORKS.y.url}>
            <FaYoutube />
          </Link> */}
            <Link href={SOCIAL_NETWORKS.facebook.url} target="_blank">
              <FaFacebookF />
            </Link>
            <Link href={SOCIAL_NETWORKS.instagram.url} target="_blank">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div>
          <p className="section_header">NOSOTROS</p>
          <div className="nosotros">
            <Link href="/">
              <p>Quienes somos</p>
            </Link>
            <Link href="/">
              <p>Misión</p>
            </Link>
            <Link href="/">
              <p>Visión</p>
            </Link>
          </div>
        </div>
        <div className="footer-pharmek">
          <p>PHARMEK</p>
        </div>
      </div>
      <div className="linea_blanca"></div>
    </footer>
  );
};

export default Footer;
