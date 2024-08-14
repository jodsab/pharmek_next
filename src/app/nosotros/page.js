import React from "react";
import Image from "next/image";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import "./styles.scss";

const NosotrosPage = () => {
  return (
    <WithNavbarAndFooter>
      <div className="homepage_container">
        <section className="contenido-nosotros">
          <section className="productos-titulo">
            <h1>Nosotros</h1>
          </section>
          <section className="imagen-nosotros-contenedor">
            <section className="txt-n">
              <p>
                Pharmek es una compañía farmacéutica veterinaria, nació en abril
                del año 2010 constituida con capital 100% peruano, el objetivo
                era producir productos propios eso era la idea desde un
                principio, realizamos todas las exigencias que solicita Senasa
                para poder realizar los estudios de estabilidad, pruebas de
                campo, para demostrar la eficacia y respuesta de nuestros
                productos en campo dirigida al gremio de la ganadería y animales
                de compañía de gran importancia para el sector pecuario. A
                partir del año 2014 se inicia las operaciones comerciales con el
                objetivo de proyectarse a ser una empresa de productos de
                calidad y de buen servicio. La premisa fundamental de Pharmek es
                ofrecer productos que respondan a las necesidades del sector
                pecuario con buena calidad y precios competitivos.
                <br></br>
                <br></br>
                De igual manera hemos definido un proyecto de desarrollo de
                nuevos productos, proyecto que va por buen camino y que
                seguramente dará sus frutos durante el próximo año.
                <br></br>
                <br></br>
                Con el apoyo y compromiso de todos ustedes lograremos ubicar a
                Pharmek en los primeros lugares del mercado Nacional y su
                crecimiento redundara en el crecimiento personal de nuestros
                empleados y en la apertura de nuevos puestos de trabajo que
                contribuirán al cumplimiento de su objetivo social.
              </p>
            </section>
            <Image
              className="imagen-nosotros"
              width={0}
              height={0}
              sizes="100vw"
              src="/img/NOSOTROS.......jpg"
              alt=""
            />
          </section>
          <section className="productos-titulo-mv">
            <section className="vision-mision-titulo">
              <section className="vision-mision-titulo-container">
                <h1>Visión</h1>
              </section>
              <section className="vision-mision-titulo-container">
                <h1>Misión</h1>
              </section>
            </section>

            <section className="productos-imagenes">
              <section className="imagen-nosotros-contenedor">
                <section className="txt">
                  <p>
                    Consolidar nuestra presencia en el mercado nacional, así
                    como también expandirnos en los mercados internacionales
                    respaldados con productos de excelentes estándares de
                    calidad.
                  </p>
                </section>
                <Image
                  className="imagen-nosotros-vm"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/vision-pharmek.jpg"
                  alt=""
                />
              </section>
              <section className="imagen-nosotros-contenedor">
                <section className="txt">
                  <p>
                    Brindar productos farmacéuticos veterinarios fabricados y
                    producidos en el Perú manteniendo los estándares de calidad
                    para entregarlos de una manera optima a nuestros clientes.
                    Mantener una comunicación personalizada visitándolos a sus
                    establecimientos y centros de crianza para así poder
                    consolidar una alianza estratégica.
                  </p>
                </section>
                <Image
                  className="imagen-nosotros-vm"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/mision-pharmek.jpg"
                  alt=""
                />
              </section>
            </section>
          </section>
        </section>
      </div>
    </WithNavbarAndFooter>
  );
};

export default NosotrosPage;
