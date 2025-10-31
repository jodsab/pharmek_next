// components/ProductBreadcrumb.jsx
'use client' // Asegúrate de que sea un componente cliente si usas hooks como useRouter

import Link from 'next/link' // Importa Link de next/link para navegación
import { useRouter } from 'next/navigation' // Importa useRouter para la navegación hacia atrás

// Componente Breadcrumb que recibe el nombre del producto actual
const ProductBreadcrumb = ({ productName }) => {
  const router = useRouter() // Inicializa el router

  // Función para manejar el clic en "Productos"
  // Usamos router.back() para regresar a la página anterior en el historial
  // Esto es útil si vienen de una página de productos con filtros o paginación
  const handleProductsClick = e => {
    e.preventDefault() // Previene el comportamiento por defecto del enlace (ir a /productos)
    router.back() // Navega a la página anterior en el historial del navegador
    // Alternativa: Si SIEMPRE quieres ir a la página principal de productos (/productos) sin importar de dónde venga,
    // puedes usar router.push('/productos'); en lugar de router.back();
  }

  return (
    // Contenedor de navegación semántico para accesibilidad
    <nav
      className="text-gray-600 dark:text-gray-400 text-sm ml-0 mt-2 mb-4  md:my-0"
      aria-label="breadcrumb"
    >
      <ol className="list-none p-0 inline-flex flex-wrap">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:underline transition-colors duration-200"
          >
            Home
          </Link>
          {/* Separador */}
          <span className="mx-2 text-gray-500 dark:text-gray-500">&gt;</span>
        </li>
        {/* Item "Productos" */}
        <li className="flex items-center">
          {/* Usamos una etiqueta 'a' y onClick para poder usar router.back() */}
          {/* href="/productos" es un fallback y mejora la accesibilidad/SEO */}
          <a
            href="/productos"
            onClick={handleProductsClick}
            className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:underline transition-colors duration-200"
          >
            Productos
          </a>
          {/* Separador */}
          <span className="mx-2 text-gray-500 dark:text-gray-500">&gt;</span>
        </li>
        {/* Item del Producto Actual */}
        {/* No es un enlace, solo texto */}
        <li className="flex items-center text-gray-800 dark:text-gray-200 font-semibold truncate max-w-xs sm:max-w-sm md:max-w-md">
          {' '}
          {/* truncate para nombres largos, con max-width responsive */}
          {/* Muestra el nombre del producto actual */}
          {productName || 'Cargando...'}
        </li>
      </ol>
    </nav>
  )
}

export default ProductBreadcrumb
