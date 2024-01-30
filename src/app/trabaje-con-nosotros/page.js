import React from "react";
import "./styles.scss";

const TrabajeConNosotrosPage = () => {
  return (
    <div>
      <section class="container-contactenos">
        <section class="productos-titulo ">
          <h1>Trabaje con nosotros</h1>
        </section>
        <div class="container-contactenos-global">
          <div class="container-contactenos-titulo">
            <div class="container-informacion-personal">
              <p>Información personal</p>
            </div>
            <div class="container-informacion-personal-espacio"></div>
          </div>
          <div class="container-contactenos-contenido">
            <div class="container-contactenos-formulario">
              <div class="container--contactenos-formulario">
                <form
                  class="formulario"
                  action="enviar_trabaja.php"
                  enctype="multipart/form-data"
                  method="post"
                >
                  <input
                    class="formulario-input"
                    type="text"
                    name="Nombre"
                    placeholder="Nombre"
                    required
                  />
                  <input
                    class="formulario-input"
                    type="text"
                    name="Apellido"
                    placeholder="Apellido"
                    required
                  />
                  <input
                    class="formulario-input"
                    type="text"
                    name="Edad"
                    placeholder="Edad"
                    required
                  />
                  <input
                    class="formulario-input"
                    type="text"
                    name="Correoelectronico"
                    placeholder="Correo electrónico"
                    required
                  />
                  <input
                    class="formulario-input"
                    type="text"
                    name="Telefono"
                    placeholder="Teléfono"
                    required
                  />
                  <input
                    class="formulario-input"
                    type="text"
                    name="Ocupacion"
                    placeholder="Ocupación"
                    required
                  />
                  <input
                    class="formulario-input"
                    type="text"
                    name="Asunto"
                    placeholder="Asunto"
                    required
                  />
                  <div class="container-contactenos-titulo">
                    <div class="container-adjuntar">
                      <p>Adjuntar CV</p>
                    </div>
                    <div class="container-adjuntar-espacio"></div>
                  </div>

                  <input
                    class="formulario-input-file"
                    type="file"
                    name="File"
                    required
                  />

                  <input
                    class="formulario-input-enviar"
                    type="submit"
                    value="ENVIAR"
                    id="boton"
                  />
                </form>
              </div>
            </div>
            <div class="container-contactenos-mapa">
              <div class="container--contactenos-mapa">
                <iframe
                  class="contactenos-mapa"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.57749855627856!2d-77.02219066785051!3d-12.13813271657013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74f6307fa3294706!2sProyecto%20Connect%20%7C%20Inmobiliaria%20Edifica!5e0!3m2!1ses-419!2spe!4v1624846760578!5m2!1ses-419!2spe"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div class="container-contactenos-direccion">
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
