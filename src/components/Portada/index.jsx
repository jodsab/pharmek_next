import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react"; // Para el ícono del botón

// Componente principal de la portada
const HeroSection = () => {
  // Referencias para los elementos que animaremos
  const heroRef = useRef(null);
  const titleRef = useRef(null); // Para el título con efecto de máquina de escribir
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const cursorRef = useRef(null); // Para el cursor parpadeante

  // Colores personalizados de la marca farmacéutica animal
  const primaryColor = "#008556"; // Verde: salud, naturaleza, frescura
  const secondaryColor = "#1226aa"; // Azul oscuro: confianza, profesionalismo, ciencia

  useEffect(() => {
    // Cargar GSAP y TextPlugin desde CDN si no están ya disponibles.
    // ESTO ES PARA EL ENTORNO DE PREVISUALIZACIÓN.
    // En tu proyecto Next.js real, deberías instalar GSAP vía npm y usar las importaciones estándar:
    // import { gsap } from 'gsap';
    // import { TextPlugin } from 'gsap/TextPlugin';
    // gsap.registerPlugin(TextPlugin);
    const loadGsap = () => {
      if (typeof window.gsap === "undefined") {
        const scriptGsap = document.createElement("script");
        scriptGsap.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";
        scriptGsap.onload = () => {
          console.log("GSAP cargado.");
          loadTextPlugin();
        };
        document.body.appendChild(scriptGsap);
      } else {
        loadTextPlugin();
      }
    };

    const loadTextPlugin = () => {
      if (
        typeof window.gsap !== "undefined" &&
        typeof window.gsap.TextPlugin === "undefined"
      ) {
        const scriptTextPlugin = document.createElement("script");
        scriptTextPlugin.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/TextPlugin.min.js";
        scriptTextPlugin.onload = () => {
          console.log("TextPlugin cargado.");
          if (
            typeof window.gsap !== "undefined" &&
            window.gsap.registerPlugin
          ) {
            window.gsap.registerPlugin(window.TextPlugin);
            startAnimations();
          }
        };
        document.body.appendChild(scriptTextPlugin);
      } else if (
        typeof window.gsap !== "undefined" &&
        typeof window.gsap.TextPlugin !== "undefined" &&
        window.gsap.registerPlugin
      ) {
        window.gsap.registerPlugin(window.TextPlugin);
        startAnimations();
      } else {
        console.error("GSAP o TextPlugin no se pudieron cargar o registrar.");
      }
    };

    const startAnimations = () => {
      const gsap = window.gsap; // Obtener GSAP del objeto window
      const TextPlugin = window.TextPlugin; // Obtener TextPlugin del objeto window

      // Asegúrate de que todos los elementos referenciados existan antes de intentar animar
      if (
        !heroRef.current ||
        !titleRef.current ||
        !subtitleRef.current ||
        !ctaRef.current ||
        !image1Ref.current ||
        !image2Ref.current ||
        !cursorRef.current
      ) {
        console.error("Uno o más refs son nulos, no se puede animar.");
        return;
      }

      // Inicializa la línea de tiempo de GSAP
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animación de texto tipo máquina de escribir para el título
      gsap.set(titleRef.current, { text: "" }); // Limpia el texto inicialmente

      tl.to(titleRef.current, {
        duration: 2.5, // Duración del efecto de escritura ligeramente más larga
        text: "Cuidamos la Salud de tus Amigos", // Nuevo texto temático
        ease: "none", // Sin easing para un efecto más natural
      })
        // Animación del cursor parpadeante
        .to(cursorRef.current, {
          opacity: 0,
          ease: "power2.inOut",
          repeat: -1, // Repetir infinitamente
          duration: 0.5,
          yoyo: true, // Hacer que el cursor parpadee (aparezca y desaparezca)
        })
        // Animación de la aparición del subtítulo (ligeramente después del título termina de escribir)
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: -1.5 }, // delay para que comience poco después que el título
          "<0.5" // Inicia 0.5 segundos después del inicio de la animación anterior (cursor)
        )
        // Animación de la aparición del botón CTA
        .fromTo(
          ctaRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: -0.6,
            ease: "back.out(1.7)",
          },
          "<0.3"
        )
        // Animación de las imágenes laterales (aparecen desde el exterior y giran ligeramente)
        .fromTo(
          image1Ref.current,
          { x: -100, opacity: 0, rotate: -5 },
          { x: 0, opacity: 1, rotate: 0, duration: 1.5, ease: "power2.out" },
          "<0.5" // Inicia ligeramente después del CTA
        )
        .fromTo(
          image2Ref.current,
          { x: 100, opacity: 0, rotate: 5 },
          { x: 0, opacity: 1, rotate: 0, duration: 1.5, ease: "power2.out" },
          "<0" // Inicia al mismo tiempo que image1
        );

      // Animación de fondo sutil
      gsap.to(heroRef.current, {
        backgroundPosition: "100% 0%",
        duration: 30,
        ease: "none",
        repeat: -1, // Repetir infinitamente
        yoyo: true, // Ir y venir
      });
    };

    loadGsap();

    // Limpieza al desmontar el componente (opcional pero buena práctica)
    return () => {
      // No es necesario eliminar scripts cargados dinámicamente en este contexto,
      // ya que se asume que se cargan una vez globalmente.
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden p-4 sm:p-8 md:p-12"
      style={{
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`, // Degradado con tus colores
        backgroundSize: "200% 200%", // Para la animación de backgroundPosition
      }}
    >
      {/* Contenido principal centrado */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg inline-block whitespace-nowrap"
          style={{ borderRight: "2px solid" }} // Borde derecho para simular el cursor inicial
        >
          <span ref={titleRef}></span>
          <span ref={cursorRef} className="ml-1 animate-pulse">
            |
          </span>{" "}
          {/* Cursor parpadeante */}
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md"
        >
          Soluciones veterinarias innovadoras para el bienestar y la vitalidad.
        </p>
        <button
          ref={ctaRef}
          className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto shadow-xl"
          onClick={() => console.log('Botón "Ver Productos" clicado')}
        >
          Ver Productos
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>

      {/* Imágenes de fondo flotantes/animadas con etiquetas <img> estándar
          IMPORTANTE: En tu proyecto Next.js real, DEBES usar el componente 'next/image'
          Para un ejemplo: <Image src="/images/perro_saludable.jpg" alt="Perro feliz" width={256} height={192} /> */}
      <img
        ref={image1Ref}
        src="https://placehold.co/400x300/F5F5F5/008556?text=Mascota%20Feliz%201" // Imagen placeholder para un animal feliz
        alt="Mascota sana"
        width={256} // Definido explícitamente para consistencia
        height={192} // Definido explícitamente para consistencia
        className="absolute bottom-16 left-16 w-32 h-24 sm:w-48 sm:h-36 md:w-64 md:h-48 rounded-lg shadow-2xl object-cover transform -rotate-6 hidden md:block"
        onError={(e) =>
          (e.target.src =
            "https://placehold.co/400x300/F5F5F5/008556?text=Error%20Imagen")
        } // Fallback
      />
      <img
        ref={image2Ref}
        src="https://placehold.co/400x300/F5F5F5/1226aa?text=Investigacion%20Vet" // Imagen placeholder para investigación veterinaria
        alt="Investigación veterinaria"
        width={256} // Definido explícitamente para consistencia
        height={192} // Definido explícitamente para consistencia
        className="absolute top-16 right-16 w-32 h-24 sm:w-48 sm:h-36 md:w-64 md:h-48 rounded-lg shadow-2xl object-cover transform rotate-6 hidden md:block"
        onError={(e) =>
          (e.target.src =
            "https://placehold.co/400x300/F5F5F5/1226aa?text=Error%20Imagen")
        } // Fallback
      />

      {/* Elementos decorativos abstractos (podrían ser células o moléculas estilizadas) */}
      <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white opacity-10 blur-3xl bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white opacity-10 blur-3xl top-0 right-0 transform translate-x-1/3 -translate-y-1/3"></div>
    </section>
  );
};

export default HeroSection;
