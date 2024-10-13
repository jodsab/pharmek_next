import React from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import masNoticias from "./mas-noticias.jpeg";

import "./styles.scss";

const MasNoticias = () => {
  return (
    <div className="masNoticias_container">
      <p>23 de Junio 2024</p>
      <hr />
      <p className="masNoticias">MÁS NOTICIAS</p>
      <div className="lista_noticias">
        {Array(3)
          .fill("")
          .map((noticia, index) => {
            return (
              <div className="noticia" key={index}>
                <Image src={masNoticias} alt="mas noticias portada" />
                <div className="destacada">
                  <p>Noticia-destacada</p>
                </div>
                <div className="black_area">
                  <div className="left">
                    <p>Hábitos saludables para mascotas</p>
                    <div className="fecha">
                      <CiCalendar />
                      <p>10 de Abril 2023</p>
                    </div>
                  </div>
                  <div className="right">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MasNoticias;
