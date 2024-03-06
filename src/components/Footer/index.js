import React from "react";
import {
  FaMobileAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./styles.scss";

const SIZE_SOCIAL_NETWORK = 33;
const SIZE_CONTACT = 20;

const Footer = () => {
  return (
    <footer>
      <section className="footer-contenido ">
        <section className="footer-contacto ">
          <h2>CONTACTO</h2>
          <section className="contenido-contacto">
            <p>
              <FaMobileAlt size={SIZE_CONTACT} />
              Móvil:974-587-086
            </p>
            <p>
              <FaEnvelope size={SIZE_CONTACT} />
              ventas@pharmek.com
            </p>
          </section>
        </section>
        <section className="footer-redes ">
          <h2>REDES SOCIALES</h2>
          <div className="socials_icons">
            <a href="# ">
              <FaFacebookSquare size={SIZE_SOCIAL_NETWORK} />
            </a>
            <a href="# ">
              <FaInstagram size={SIZE_SOCIAL_NETWORK} />
            </a>
            <a href="# ">
              <FaWhatsapp size={SIZE_SOCIAL_NETWORK} />
            </a>
          </div>
        </section>
        <section className="footer-pharmek ">
          <p>PHARMEK</p>
        </section>
      </section>
      <section className="footer-derechos ">
        &copy2021 Pharmek. Todos los derechos reservados.
      </section>
    </footer>
  );
};

export default Footer;
