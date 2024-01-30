import React from "react";
import "./styles.scss";

const TrabajeConNosotrosPage = () => {
  return (
    <div>
      <section className="container-contactenos">
        <section className="productos-titulo ">
          <h1>Trabaje con nosotros</h1>
        </section>
        <div className="container-contactenos-global">
          <div className="container-contactenos-titulo">
            <div className="container-informacion-personal">
              <p>Información personal</p>
            </div>
            <div className="container-informacion-personal-espacio"></div>
          </div>
          <div className="container-contactenos-contenido">
            <div className="container-contactenos-formulario">
              <div className="container--contactenos-formulario">
                <form
                  className="formulario"
                  action="enviar_trabaja.php"
                  enctype="multipart/form-data"
                  method="post"
                >
                  <input
                    className="formulario-input"
                    type="text"
                    name="Nombre"
                    placeholder="Nombre"
                    required
                  />
                  <input
                    className="formulario-input"
                    type="text"
                    name="Apellido"
                    placeholder="Apellido"
                    required
                  />
                  <input
                    className="formulario-input"
                    type="text"
                    name="Edad"
                    placeholder="Edad"
                    required
                  />
                  <input
                    className="formulario-input"
                    type="text"
                    name="Correoelectronico"
                    placeholder="Correo electrónico"
                    required
                  />
                  <input
                    className="formulario-input"
                    type="text"
                    name="Telefono"
                    placeholder="Teléfono"
                    required
                  />
                  <input
                    className="formulario-input"
                    type="text"
                    name="Ocupacion"
                    placeholder="Ocupación"
                    required
                  />
                  <input
                    className="formulario-input"
                    type="text"
                    name="Asunto"
                    placeholder="Asunto"
                    required
                  />
                  <div className="container-contactenos-titulo">
                    <div className="container-adjuntar">
                      <p>Adjuntar CV</p>
                    </div>
                    <div className="container-adjuntar-espacio"></div>
                  </div>

                  <input
                    className="formulario-input-file"
                    type="file"
                    name="File"
                    required
                  />

                  <input
                    className="formulario-input-enviar"
                    type="submit"
                    value="ENVIAR"
                    id="boton"
                  />
                </form>
              </div>
            </div>
            <div className="container-contactenos-mapa">
              <div className="container--contactenos-mapa">
                <iframe
                  className="contactenos-mapa"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.57749855627856!2d-77.02219066785051!3d-12.13813271657013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74f6307fa3294706!2sProyecto%20Connect%20%7C%20Inmobiliaria%20Edifica!5e0!3m2!1ses-419!2spe!4v1624846760578!5m2!1ses-419!2spe"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="container-contactenos-direccion">
                <p>
                  {" "}
                  <strong>Dirección:</strong> Av Almirante Miguel Grau 1380, Of
                  706 Barranco
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrabajeConNosotrosPage;
