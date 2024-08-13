import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import pracanex from "./pracanex.png";
import "./styles.scss";

const Slide = () => {
  return (
    <div className="slide_container">
      <div className="title">
        <h3 className="product_name">PRACANEX</h3>
        <div className="product_content">
          <p className="product_message">
            ¡ELIMINA LOS PARÁSITOS Y MANTÉN
            <span className="green">SANO A TU MASCOTA!</span>
          </p>
          <p className="product_description">
            Lorem ipsum dolor sit amet consectetur. Morbi aliquam id amet eget
            a. Lectus mattis dis scelerisque pellentesque aliquam viverra augue
            faucibus tortor. Id quis mattis ut orci in sapien risus. Lectus
            aliquam diam eu auctor et nisi nisl.
          </p>
        </div>
        <button className="button_cto_ask">
          <span>
            <p>Solicítalo ahora</p>
            <FaWhatsapp size={22} color={"white"} />
          </span>
        </button>
      </div>
      <div className="imagen_container">
        <Image
          src={pracanex}
          alt="producto pracanex"
          width={0}
          height={0}
          className="imagen"
        />
      </div>
    </div>
  );
};

export default Slide;
