import React from "react";
import Image from "next/image";
import dog_group from "./assets/dog_group.png";
import molecula from "./assets/molecula.png";
import hueso from "./assets/hueso.png";

import "./styles.scss";
import Solicitalo from "../Solicitalo";

const Anuncio = () => {
  return (
    <div className="anuncio_background">
      <div className="anuncio_container content">
        <Image
          className="molecula left"
          width={0}
          height={0}
          src={molecula}
          alt="molecula"
        />
        <Image
          className="molecula rigth"
          width={0}
          height={0}
          src={molecula}
          alt="molecula"
        />
        <Image
          className="dog_group"
          width={0}
          height={0}
          src={dog_group}
          alt="grupo perro"
        />
        <div className="parrafos">
          <h3>
            Lorem ipsum dolor sit amet consecte turmagnis metus blandids a
          </h3>
          <ul>
            <li>
              <div className="balls" id="red"></div>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <div className="balls" id="blue"></div>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <div className="balls" id="green"></div>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
          <div className="solicitalo_area">
            <Solicitalo />
            <Image
              className="hueso bottom"
              width={0}
              height={0}
              src={hueso}
              alt="hueso"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncio;
