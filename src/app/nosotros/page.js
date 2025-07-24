// use client"; // Este comentario es necesario si usas el App Router de Next.js
import React from "react";
import Image from "next/image";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import "./styles.scss"; // Asegúrate de que esta ruta sea correcta para tus estilos

const NosotrosPage = () => {
  // Ruta de la imagen que has proporcionado.
  // Es crucial que esta URL sea accesible o que coloques la imagen en tu carpeta 'public'
  // y uses una ruta relativa como '/mision.jpeg' si la has renombrado.
  const imageUrl =
    "https://content.googleapis.com/v1/generativelanguage/files/uploaded:image_a754c1.png-0ad19256-3e1d-4d9f-b892-2880271eb751";

  return (
    <WithNavbarAndFooter>
      <div className="nosotros_container content">
        <section className="section">
          <div className="text-content">
            <h3>NOSOTROS</h3>
            <div>
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
              </p>
              <p>
                De igual manera hemos definido un proyecto de desarrollo de
                nuevos productos, proyecto que va por buen camino y que
                seguramente dará sus frutos durante el próximo año.
              </p>
              <p>
                Con el apoyo y compromiso de todos ustedes lograremos ubicar a
                Pharmek en los primeros lugares del mercado Nacional y su
                crecimiento redundará en el crecimiento personal de nuestros
                empleados y en la apertura de nuevos puestos de trabajo que
                contribuirán al cumplimiento de su objetivo social.
              </p>
            </div>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <Image
                src={"/grupo.png"}
                alt="Imagen Nosotros Pharmek"
                width={500} // Puedes ajustar el ancho y alto según tus necesidades de diseño
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Sección "MISIÓN" - Imagen a la izquierda, Texto a la derecha */}
        <section className="section reversed-order">
          <div className="image-content">
            <div className="image-wrapper">
              <Image
                src={"/mision.jpeg"}
                alt="Imagen Misión Pharmek"
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="text-content">
            <h3>MISIÓN</h3>
            <p>
              Consolidar nuestra presencia en el mercado nacional, así como
              también expandirnos en los mercados internacionales respaldados
              con productos de excelentes estándares de calidad.
            </p>
          </div>
        </section>

        {/* Sección "VISIÓN" - Texto a la izquierda, Imagen a la derecha */}
        <section className="section">
          <div className="image-content">
            <div className="image-wrapper">
              <Image
                src={"/vision.jpeg"}
                alt="Imagen Visión Pharmek"
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="text-content">
            <h3>VISIÓN</h3>
            <p>
              Ser reconocidos como una empresa líder en el mercado farmacéutico
              veterinario, innovando constantemente y ofreciendo soluciones
              integrales para la salud y el bienestar animal.
            </p>
          </div>
        </section>
      </div>
    </WithNavbarAndFooter>
  );
};

export default NosotrosPage;
