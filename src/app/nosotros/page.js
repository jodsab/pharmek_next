import React from "react";
import Image from "next/image";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import "./styles.scss";

const NosotrosPage = () => {
  return (
    <WithNavbarAndFooter>
      <div className="nosotros_container content">
        <div>
          <h3>NOSOTROS</h3>
          <div>
            <p>
              Pharmek es una compañía farmacéutica veterinaria, nació en abril
              del año 2010 constituida con capital 100% peruano, el objetivo era
              producir productos propios eso era la idea desde un principio,
              realizamos todas las exigencias que solicita Senasa para poder
              realizar los estudios de estabilidad, pruebas de campo, para
              demostrar la eficacia y respuesta de nuestros productos en campo
              dirigida al gremio de la ganadería y animales de compañía de gran
              importancia para el sector pecuario. A partir del año 2014 se
              inicia las operaciones comerciales con el objetivo de proyectarse
              a ser una empresa de productos de calidad y de buen servicio. La
              premisa fundamental de Pharmek es ofrecer productos que respondan
              a las necesidades del sector pecuario con buena calidad y precios
              competitivos.
            </p>
            <p>
              De igual manera hemos definido un proyecto de desarrollo de nuevos
              productos, proyecto que va por buen camino y que seguramente dará
              sus frutos durante el próximo año.
            </p>
            <p>
              Con el apoyo y compromiso de todos ustedes lograremos ubicar a
              Pharmek en los primeros lugares del mercado Nacional y su
              crecimiento redundara en el crecimiento personal de nuestros
              empleados y en la apertura de nuevos puestos de trabajo que
              contribuirán al cumplimiento de su objetivo socia.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3>MISIÓN</h3>
            <p>
              Consolidar nuestra presencia en el mercado nacional, así como
              también expandirnos en los mercados internacionales respaldados
              con productos de excelentes estándares de calidad.
            </p>
          </div>
          <div>
            <h3>VISIÓN</h3>
            <p>
              Consolidar nuestra presencia en el mercado nacional, así como
              también expandirnos en los mercados internacionales respaldados
              con productos de excelentes estándares de calidad.
            </p>
          </div>
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default NosotrosPage;
