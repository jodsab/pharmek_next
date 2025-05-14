// components/Breadcrumb.jsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Aunque no lo usemos directamente aquí, es buena práctica si los enlaces pudieran ir "atrás" o ser dinámicos

// Componente Breadcrumb genérico
// Recibe un array de ítems: [{ label: 'Home', href: '/' }, { label: 'Productos', href: '/productos' }, { label: 'Producto X' }]
const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) {
    return null; // No renderiza nada si no hay ítems
  }

  return (
    // Contenedor de navegación semántico
    <nav
      className="text-gray-600 dark:text-gray-400 text-sm mb-0 ml-0"
      aria-label="breadcrumb"
    >
      {/* Lista ordenada de ítems */}
      <ol className="list-none p-0 inline-flex flex-wrap">
        {items.map((item, index) => {
          // Es el último ítem si el índice es igual al último índice del array
          const isLastItem = index === items.length - 1;

          return (
            <li
              key={index}
              className={`flex items-center ${
                isLastItem
                  ? "text-gray-800 dark:text-gray-200 font-semibold"
                  : ""
              }`}
            >
              {/* Si no es el último ítem y tiene href, renderiza un Link */}
              {!isLastItem && item.href ? (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:underline transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                // Si es el último ítem o no tiene href, renderiza solo el texto
                <span
                  className={`${
                    isLastItem
                      ? "truncate max-w-xs sm:max-w-sm md:max-w-md"
                      : ""
                  }`}
                >
                  {" "}
                  {/* truncate solo para el último ítem si es largo */}
                  {item.label}
                </span>
              )}

              {/* Añade el separador '>' si no es el último ítem */}
              {!isLastItem && (
                <span className="mx-2 text-gray-500 dark:text-gray-500">
                  &gt;
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
