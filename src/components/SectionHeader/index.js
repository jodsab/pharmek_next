import React, { useEffect } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const SectionHeader = ({ title, subtitle, src }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    // Contenedor principal
    <div className="section_header_container">
      {/* >>>>>> Nuevo contenedor para agrupar la imagen y el título <<<<<< */}
      <div className="image_and_title_container">
        {/* Contenedor de la imagen (ya existía) */}
        <div className="img_container">
          <Image
            className="front" // Mantén las clases existentes si las necesitas
            data-aos="fade-right" // Mantén las animaciones de AOS
            src={src}
            width={100} // Ajusta el width/height aquí si necesitas que el Image sea diferente del contenedor
            height={100} // Ajusta el width/height aquí
            alt="section header"
          />
        </div>
        {/* Título principal (movido aquí) */}
        <h2 data-aos="fade-up">{title}</h2>{" "}
        {/* Mantén las animaciones de AOS */}
      </div>
      {/* >>>>>> Fin del nuevo contenedor <<<<<< */}

      {/* Contenedor del subtítulo (ya existía) */}
      {/* Lo mostraremos directamente debajo del nuevo contenedor "image_and_title_container" */}
      <div className="green_space bordered">
        <p data-aos="fade-left">{subtitle}</p>{" "}
        {/* Mantén las animaciones de AOS */}
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default SectionHeader;
