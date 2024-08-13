"use client";
import { useEffect } from "react";

const Tiktok = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@pharmek_oficial/video/7382760567544548613"
      data-video-id="7382760567544548613"
      style={{ maxWidth: "605px", minWidth: "325px" }}
    >
      <section>
        <a
          target="_blank"
          title="@pharmek_oficial"
          href="https://www.tiktok.com/@pharmek_oficial?refer=embed"
        >
          @pharmek_oficial
        </a>
        🐈🐾🐶No se dejen engañar lo mejor para desparacitar a tu mascotita es
        el Pracanex 🐶🐾🐈
        <a
          title="perros"
          target="_blank"
          href="https://www.tiktok.com/tag/perros?refer=embed"
        >
          #perros
        </a>
        <a
          title="perritos"
          target="_blank"
          href="https://www.tiktok.com/tag/perritos?refer=embed"
        >
          #perritos
        </a>
        <a
          title="animales"
          target="_blank"
          href="https://www.tiktok.com/tag/animales?refer=embed"
        >
          #animales
        </a>
        <a
          title="dogsoftiktok"
          target="_blank"
          href="https://www.tiktok.com/tag/dogsoftiktok?refer=embed"
        >
          #dogsoftiktok
        </a>
        <a
          title="veterinaria"
          target="_blank"
          href="https://www.tiktok.com/tag/veterinaria?refer=embed"
        >
          #veterinaria
        </a>
        <a
          target="_blank"
          title="♬ sonido original - 🐾🐶Pharmek_Oficial🐈🐾"
          href="https://www.tiktok.com/music/sonido-original-7382760590800882438?refer=embed"
        >
          ♬ sonido original - 🐾🐶Pharmek_Oficial🐈🐾
        </a>
      </section>
    </blockquote>
  );
};

export default Tiktok;
