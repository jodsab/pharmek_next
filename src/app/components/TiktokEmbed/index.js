// components/TiktokEmbed.js
"use client";

import React from "react";

const TiktokEmbed = ({ videoId }) => {
  // El useEffect para cargar el script se ELIMINA de aquí.
  // El script debe cargarse una sola vez en un nivel superior.

  // La URL 'cite' y 'data-video-id' deben usar la prop videoId
  const tiktokUrl = `https://www.tiktok.com/@username/video/${videoId}`; // Reemplaza @username o hazlo una prop si es necesario

  return (
    <blockquote
      className="tiktok-embed"
      cite={tiktokUrl}
      data-video-id={videoId}
      style={{ maxWidth: "605px", minWidth: "325px" }}
    >
      {/* Opcional: Contenido de fallback o indicador de carga */}
      <section>
        {/* Puedes generar este contenido dinámicamente basado en datos del video */}
        <a
          target="_blank"
          title={`@username`} // Reemplaza o haz dinámico
          href={`https://www.tiktok.com/@username?refer=embed`} // Reemplaza o haz dinámico
        >
          @username {/* Reemplaza o haz dinámico */}
        </a>
        {/* Descripción o caption del video */}
        {/* Enlace al sonido original */}
      </section>
    </blockquote>
  );
};

export default TiktokEmbed;
