"use client";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import { DISTRIBUIDORES } from "../../core/distribuidores";

const DISTRITOS = ["Lima", "Trujillo", "Anchash", "Arequipa"];

const DistribuidoresPage = () => {
  const [distribuidores, setDistribuidores] = useState(DISTRIBUIDORES);
  const [filter, setFilter] = useState("");

  const AUX_DISTRIBUIDORES = [...DISTRIBUIDORES];

  const toggleFilter = (category) => {
    setFilter(category);
  };

  useEffect(() => {
    if (filter) {
      const filtered = AUX_DISTRIBUIDORES.filter((d) => d.location === filter);
      setDistribuidores(filtered);
    } else {
      setDistribuidores(AUX_DISTRIBUIDORES);
    }
  }, [filter]);

  return (
    <div>
      <section>
        <section className="fondo-distribuidores">
          <section className="productos-titulo ">
            <h1>Distribuidores</h1>
          </section>
          <section className="wrap ">
            <section className="store-wrapper ">
              <div className="category_list ">
                <p>Filtrar por:</p>
                {DISTRITOS.map((d, index) => (
                  <button
                    onClick={() => toggleFilter(d)}
                    key={index}
                    className="category_item"
                    category={d}
                  >
                    {d}
                  </button>
                ))}
                <button onClick={() => setFilter("")} className="category_item">
                  Limpiar filtro
                </button>
              </div>

              <section className="distribuidores-list">
                {distribuidores?.map((d) => {
                  return (
                    <section
                      key={d.id}
                      className="distribuidores-item"
                      category={d.location}
                    >
                      <section className="informacionDis">
                        <h1 id="Empresa">{d.nombre}</h1>
                        <div className="contactoD">
                          <h3>Contacto:</h3>
                          <p>{d.contacto}</p>
                        </div>
                        <div className="contactoD">
                          <h3>Teléfono:</h3>
                          <a href="tel:+51968594373">{d.telefono}</a>
                        </div>
                        <div className="contactoD">
                          {d.contacto && (
                            <>
                              <h3>Correo:</h3>
                              <a href={`mailto:${d.correo}`}>{d.correo}</a>
                            </>
                          )}
                          {d.locations && (
                            <>
                              <h3>Ubicaciones:</h3>
                              <p>{d.locations}</p>
                            </>
                          )}
                        </div>
                        <div className="contactoD">
                          <h3>Dirección:</h3>
                          <p>{d.direccion}</p>
                        </div>
                      </section>
                      <section className="mapa-contenedor">
                        <iframe
                          src={d.iframe}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                      </section>
                    </section>
                  );
                })}
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default DistribuidoresPage;
