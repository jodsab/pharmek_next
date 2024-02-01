import Image from "next/image";
import * as React from "react";
import "./styles.scss";

export const EmailTemplate = ({ ...props }) => {
  const {
    Nombre = "Nombre",
    Apellido = "Apellido",
    Email = "Email",
    Phone = "Phone",
    Edad = "Edad",
    Asunto = "Asunto",
    Mensaje = "Mensaje",
    Ocupation = "Ocupation",
  } = props;

  return (
    <div>
      <strong>
        Hola, {Nombre} {Apellido}!
      </strong>

      <div style={{ height: "20px" }}></div>
      <p>
        Somos Pharmek y estamos felices que hayas decidido contactarte con
        nosotros, pronto nos pondremos en contacto contigo
      </p>
      <div style={{ height: "5px" }}></div>
      <p>
        Recibimos tu mensaje: <i>{Mensaje}</i>
      </p>
      <div style={{ height: "5px" }}></div>
      <p>
        Algunos datos compartidos Nombre: <strong>{Nombre}</strong>
        ,Apellido: <strong>{Apellido}</strong>,Email:
        <strong>{Email}</strong>, Phone: <strong>{Phone}</strong>, Edad:{" "}
        <strong>{Edad}</strong>, Asunto: <strong>{Asunto}</strong>, Ocupation:
        <strong>{Ocupation}</strong>
      </p>
      <div style={{ height: "15px" }}></div>
      {/*       <Image
        className="imagen-nosotros"
        width={200}
        height={40}
        sizes="100vw"
        src="/img/logo.png"
        alt=""
      /> */}
      <div style={{ height: "15px" }}></div>
    </div>
  );
};
