import React from "react";
import Image from "next/image";
import adegan from "./adegan.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";

import pracanex from "../../assets/pracanex.jpeg";
import "./styles.scss";

const ProductoSolo = ({ data }) => {
  const { nombre } = data;

  return (
    <div className="productoSolo_container">
      <h1 className="m-2">{data.nombre}</h1>
      <div className="product_container">
        <div className="desktop_left">
          <div className="big_foto_container">
            <Image className="big_foto" src={adegan} alt="foto de producto" />
          </div>
          <div className="miniaturas">
            <div className="miniaturas_container">
              <Image
                className="foto_miniatura"
                src={adegan}
                alt="foto de producto"
              />
            </div>
            <div className="miniaturas_container">
              <Image
                className="foto_miniatura"
                src={adegan}
                alt="foto de producto"
              />
            </div>
            <div className="miniaturas_container">
              <Image
                className="foto_miniatura"
                src={adegan}
                alt="foto de producto"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="description">
            <p>
              <strong>Descripción: </strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <p>
              <strong>Suspensión Oral - </strong>Antiparasitario
            </p>
            <p>
              <strong>Tipo: </strong>Lorem ipsum
            </p>
            <p>
              <strong>Características: </strong>Lorem ipsum
            </p>
            <p>
              <strong>Indicaciones: </strong>
              Lorem ipsum dolor sit amet consectetur. Curabitur tristique
              pulvinar mauris in ac. Duis pellentesque sagittis quam egestas
              viverra ut morbi.
            </p>
          </div>
          <div className="additional">
            <button className="solicitalo">
              <p>Solicitalo ahora</p>
              <FaWhatsapp />
            </button>
            <div className="contacta">
              <strong>Contacta al distribuidor</strong>
              <div className="icons">
                <FaBuildingCircleArrowRight />
                <p>Buscar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoSolo;
