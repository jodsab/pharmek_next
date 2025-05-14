"use client";
import React from "react";
import { useRouter } from "next/navigation";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SeeProduct from "@/components/SeeProduct";
import ProductoSolo from "./components/ProductoSolo";
import { useProductsStore } from "@/libs/store-products";
import ProductBreadcrumb from "@/components/ProductBreadcrumb"; // <-- Importa el nuevo componente

// Elimina o comenta la importación del archivo SCSS
// import "./styles.scss";

const ProductoId = ({ params }) => {
  // Obtiene la lista de productos de tu store global
  const products = useProductsStore((state) => state.products);

  // Busca el producto principal basado en el ID de la URL
  const product = products.find((p) => p.id == params.idProducto);

  // Nota: Lista dummy de productos relacionados (mantener por ahora para estructura)
  const dummyRelatedProducts = Array(8).fill(product);

  return (
    <WithNavbarAndFooter>
      {/* Contenedor principal de la página, con padding responsive */}
      <div className="container mx-auto px-4 py-4 md:py-4">
        {/* >>>>>> Aquí se añade el componente Breadcrumb <<<<<< */}
        {/* Renderiza el breadcrumb pasando el nombre del producto si product existe */}
        {product && <ProductBreadcrumb productName={product.nombre} />}

        {/* Renderiza el componente del producto principal si se encuentra */}
        {!product ? (
          <div className="text-center text-red-500 text-lg">
            Producto no encontrado.
          </div>
        ) : (
          <ProductoSolo data={product} />
        )}

        {/* Sección "PRODUCTOS RELACIONADOS" encabezado y botón */}
        <div className="flex items-center justify-between my-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
            PRODUCTOS RELACIONADOS
          </h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-6 py-1 rounded-full transition-colors duration-200">
            <p>Ver todos</p>
          </button>
        </div>

        {/* Lista de Productos Relacionados (Horizontalmente scrollable) */}
        <div className="flex overflow-x-auto space-x-6 md:space-x-8 pb-4 scrollbar-hide">
          {/* Mapea sobre tus productos relacionados REALES aquí */}
          {dummyRelatedProducts.map((relatedProductData, index) => {
            return (
              <div key={index} className="flex-shrink-0 w-60 sm:w-72 md:w-80">
                <SeeProduct product={relatedProductData} />
              </div>
            );
          })}
          {/* Mensaje si no hay productos relacionados (opcional) */}
          {dummyRelatedProducts.length === 0 && (
            <div className="text-center text-gray-500 w-full">
              No hay productos relacionados disponibles.
            </div>
          )}
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default ProductoId;
