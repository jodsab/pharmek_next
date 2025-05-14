"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Importa motion y AnimatePresence

import { FaWhatsapp } from "react-icons/fa";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";

// Si usas un archivo SCSS para estilos adicionales, mantenlo
// import "./styles.scss";

// Define la URL de tu imagen de fallback en el directorio public
const DEFAULT_IMAGE_URL = "/images/defaultproduct.png"; // <-- Verifica esta ruta

// Variantes de animación para la aparición del contenedor principal
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Variantes de animación para la transición de la imagen principal
const mainImageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  }, // Para cuando una imagen sale
};

const ProductoSolo = ({ data }) => {
  const {
    id,
    nombre,
    composicion,
    dosis_y_via,
    indicaciones,
    presentaciones,
    registro_senasa,
    animal_mayor_menor,
    images = [], // Asegura que sea un array
  } = data || {};

  // Estado para la URL de la imagen principal
  const [mainImageUrl, setMainImageUrl] = useState(
    images && images.length > 0 ? images[0].url : DEFAULT_IMAGE_URL
  );

  // Efecto para actualizar la imagen principal si cambian los datos (ej: cambio de producto en ruta dinámica)
  useEffect(() => {
    setMainImageUrl(
      images && images.length > 0 ? images[0].url : DEFAULT_IMAGE_URL
    );
  }, [images, id]); // Dependencia en el array de imágenes y el ID del producto

  // Define tamaños de imagen.
  const mainImageSize = 500; // Referencia para el contenedor
  const thumbSize = 80; // Tamaño para las miniaturas

  // Verifica si el producto tiene imágenes reales (excluyendo el fallback)
  const hasRealImages = images && images.length > 0;

  return (
    // Contenedor principal con animación de aparición
    <motion.div
      className="container mx-auto px-4 py-4 md:py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Título del Producto */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left">
        {nombre || "Producto sin nombre"}
      </h1>

      {/* Contenedor principal de layout: flex en desktop (row), columnas por defecto en mobile */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sección Izquierda: Imagen Principal y Miniaturas */}
        {/* Ocupa todo el ancho en mobile (w-full), aprox 40% en desktop (md:w-2/5) */}
        <div className="w-full md:w-2/5 flex-shrink-0">
          {/* Contenedor de la Imagen Principal */}
          {/* Relative, tamaño adaptable, centrado, esquinas redondeadas, sombra, bg de placeholder */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] lg:h-[500px] mb-4 rounded-lg overflow-hidden shadow-md  dark:bg-gray-700 flex items-center justify-center">
            {/* Usamos AnimatePresence y motion para animar la transición de la imagen principal */}
            <AnimatePresence mode="wait">
              {" "}
              {/* mode="wait" espera a que la salida termine antes de que la entrada empiece */}
              {mainImageUrl ? (
                <motion.div
                  key={mainImageUrl} // La key cambia cuando mainImageUrl cambia, activando la animación
                  variants={mainImageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit" // Define cómo sale la imagen anterior
                  className="relative w-full h-full" // El div contenedor de la imagen motion debe ser relativo y llenar el espacio
                >
                  <Image
                    src={mainImageUrl} // Usa la URL del estado
                    alt={`Imagen principal de ${nombre || "producto"}`} // Alt text dinámico
                    layout="fill" // La imagen llena el contenedor padre
                    objectFit="contain" // O "cover" si prefieres que recorte
                    priority={true} // Considera añadir priority si esta es la imagen principal visible al cargar
                  />
                </motion.div>
              ) : (
                // Fallback visual si la URL principal es nula
                <motion.div
                  key="fallback-main" // Key única para el fallback
                  variants={mainImageVariants} // Puedes usar las mismas variantes si quieres
                  initial="initial"
                  animate="animate"
                  className="text-gray-500 dark:text-gray-400"
                >
                  Cargando imagen...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sección de Miniaturas */}
          {/* Solo muestra las miniaturas si hay imágenes reales */}
          {hasRealImages && (
            // Contenedor de las miniaturas. Aplica flex y overflow horizontal para el scroll.
            <div
              className={`miniaturas mt-4 ${
                images.length > 11 ? "slidable" : ""
              }`}
            >
              {/* Contenedor interno flex para las miniaturas */}
              <div className="miniaturas_container flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
                {/* Mapea sobre las imágenes reales para crear miniaturas */}
                {images.map((image, index) => (
                  // Cada miniatura es un item cliqueable con tamaño fijo y estilos visuales
                  <div
                    key={image.id || index} // Usa el ID de la imagen como key, si no, el index
                    className={`thumbnail-item flex-shrink-0 w-20 h-20 relative cursor-pointer border-2 rounded-md overflow-hidden transition-all duration-200 ease-in-out ${
                      image.url === mainImageUrl
                        ? "border-blue-500 shadow-md"
                        : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                    onClick={() => setMainImageUrl(image.url)} // Al hacer clic, cambia la imagen principal
                  >
                    <Image
                      src={image.url} // URL de la miniatura
                      alt={`Miniatura ${index + 1} de ${nombre || "producto"}`} // Alt text dinámico
                      width={thumbSize} // Tamaño para next/image (importante para optimización)
                      height={thumbSize} // Tamaño para next/image
                      objectFit="cover" // Cubre el área de la miniatura
                    />
                  </div>
                ))}
              </div>
              {/* Flechas de navegación o slider avanzado aquí */}
            </div>
          )}

          {/* Si no hay imágenes reales, muestra un espacio o mensaje */}
          {!hasRealImages && (
            <div className="miniaturas mt-4">
              <div className="miniaturas_container flex justify-center items-center h-20 border rounded-md border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
                No hay miniaturas disponibles
              </div>
            </div>
          )}
        </div>

        {/* Sección Derecha: Descripción y Acciones */}
        {/* Ocupa el espacio restante (aprox 60% en desktop) */}
        <div className="flex-1">
          {/* Sección de Descripción */}
          <div className="description mt-4 md:mt-0 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              <strong className="font-semibold text-gray-900 dark:text-gray-100">
                Descripción:{" "}
              </strong>
              {composicion}
            </p>
            <p>
              <strong className="font-semibold text-gray-900 dark:text-gray-100">
                Dosis y vía:{" "}
              </strong>
              {dosis_y_via}
            </p>
            <p>
              <strong className="font-semibold text-gray-900 dark:text-gray-100">
                Indicaciones:{" "}
              </strong>
              {indicaciones}
            </p>
            {registro_senasa && (
              <p>
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                  Registro Senasa:{" "}
                </strong>
                {registro_senasa}
              </p>
            )}
            {presentaciones && (
              <p>
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                  Presentaciones:{" "}
                </strong>
                {presentaciones}
              </p>
            )}
            {/* Puedes añadir aquí el campo animal_mayor_menor si lo necesitas */}
            {/* <p>
                <strong className="font-semibold text-gray-900 dark:text-gray-100">Animales: </strong>
                {animal_mayor_menor}
            </p> */}
          </div>

          {/* Sección de Acciones Adicionales */}
          <div className="additional mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`https://wa.me/?text=Hola, me interesa el producto ${
                nombre || ""
              } (ID: ${id || ""}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="solicitalo flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors no-underline flex-shrink-0 w-full sm:w-auto" // Añadido w-full sm:w-auto para ocupar todo el ancho en mobile si es necesario
            >
              <p>Solicítalo ahora</p>
              <FaWhatsapp />
            </a>
            <div className="contacta flex items-center gap-2 text-gray-700 dark:text-gray-300 flex-wrap justify-center sm:justify-start">
              <strong className="font-semibold text-gray-900 dark:text-gray-100">
                Contacta al distribuidor:
              </strong>
              <div className="icons flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 cursor-pointer transition-colors">
                <FaBuildingCircleArrowRight />
                <p>Buscar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductoSolo;
