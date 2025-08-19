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
            <h3>¿QUIENES SOMOS?</h3>
            <div>
              <p>
                Pharmek International Corporation SAC es una empresa y
                laboratorio peruano fundado en octubre de 2020, dedicado a la
                fabricación, distribución y comercialización de productos
                veterinarios propios. Comprometido con la salud animal,
                desarrolla soluciones seguras, eficaces y de alta calidad para
                clínicas, distribuidores y productores pecuarios. Gracias a
                materias primas certificadas, tecnología moderna e innovación
                constante, Pharmek se ha consolidado como una alternativa
                confiable y competitiva en el mercado veterinario.
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
              Desarrollar, fabricar y comercializar productos veterinarios de
              excelencia que contribuyan a la salud y bienestar animal,
              respaldados por procesos productivos eficientes, materias primas
              certificadas y un equipo comprometido con la mejora continua y la
              satisfacción del cliente.
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
              Ser una empresa líder en el sector veterinario latinoamericano,
              reconocida por la calidad, eficacia y seguridad de nuestros
              productos, el compromiso con nuestros clientes y el impulso
              constante hacia la innovación científica.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="text-content">
            <h3>PORQUE CONFIAR EN NOSOTROS?</h3>
            <div>
              <p>✅ Fabricación propia con control total de calidad</p>
              <p>✅ Insumos de proveedores certificados</p>
              <p>✅ Fórmulas seguras y efectivas</p>
              <p>✅ Atención personalizada y soporte técnico</p>
              <p>✅ Comprometidos con el bienestar animal</p>
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
      </div>
    </WithNavbarAndFooter>
  );
};

export default NosotrosPage;
