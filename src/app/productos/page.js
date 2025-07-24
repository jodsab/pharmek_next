"use client";
import React, { useEffect, useState } from "react";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SeeProduct from "@/components/SeeProduct";
import Anuncio from "@/components/Anuncio";
// Asegúrate de que useGetProducts ahora trae los productos *incluyendo* las categorías a través de la tabla de unión
import { useGetProducts } from "@/hooks/categories/useGetProducts.hook";
import FilterSidebar from "./components/FilterSidebar";
import { useProductsStore } from "@/libs/store-products";
import { useCategoriesStore } from "@/libs/store-categories";

import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

const Productos = ({ searchParams }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useGetProducts debería obtener los productos *incluyendo* las categorías a través de la tabla de unión
  useGetProducts(); // Este hook debería actualizar useProductsStore

  const products = useProductsStore((state) => state.products);
  const productLoading = useProductsStore((state) => state.loading);
  const categories = useCategoriesStore((state) => state.categories);

  // >>>>>>>>>> LOGS DE DEPURACIÓN <<<<<<<<<<
  useEffect(() => {
    if (!productLoading) {
      if (products && products.length > 0) {
        setSelectedProducts(products); // Inicializa con todos los productos si hay
      } else {
        setSelectedProducts([]); // Vacío si no hay productos
      }
      setLoading(false);
    }
  }, [products, productLoading, categories]); // Añadido 'categories' a las dependencias por si acaso

  const handleFilterChange = (selectedCategories) => {
    // console.log("Filtro cambiado. Categorías seleccionadas:", selectedCategories); // Log opcional
    // console.log("Productos disponibles para filtrar:", products); // Log opcional

    if (!products || products.length === 0) {
      // console.log("No hay productos para filtrar. Estableciendo selectedProducts a []"); // Log opcional
      setSelectedProducts([]);
      return;
    }

    if (selectedCategories.length === 0) {
      // console.log("No hay categorías seleccionadas. Mostrando todos los productos."); // Log opcional
      setSelectedProducts(products); // Mostrar todos los productos si no hay filtros seleccionados
    } else {
      // console.log("Aplicando filtro..."); // Log opcional
      const filtered = products.filter((product) => {
        // console.log("  Evaluando producto:", product.nombre); // Log opcional

        // --- Lógica de Filtrado CORREGIDA para tabla de unión explícita ---
        // 1. Verifica si el producto tiene el campo de relación de la tabla de unión
        //    y si es un array
        if (!Array.isArray(product.categoriesOnProducts)) {
          // console.log("    Producto no tiene categoriesOnProducts como array. Ignorando."); // Log opcional
          return false; // Si no tiene la relación o no es array, no puede coincidir
        }

        // 2. Verifica si *alguno* de los vínculos en la tabla de unión para este producto
        //    coincide con alguna de las categorías seleccionadas
        const isMatch = product.categoriesOnProducts.some((link) => {
          // console.log("    Chequeando vínculo:", link); // Log opcional
          // 3. Asegúrate de que el objeto de categoría real está incluido en el vínculo
          if (!link.category) {
            // console.log("    Vínculo no tiene el objeto category anidado. Ignorando."); // Log opcional
            return false; // Si la categoría real no está incluida, este vínculo no sirve para filtrar por nombre
          }
          // 4. Compara el nombre de la categoría real anidada con las categorías seleccionadas
          // console.log("    Comparando categoría anidada:", link.category.categoryName, "con seleccionadas:", selectedCategories); // Log opcional
          return selectedCategories.includes(link.category.categoryName);
        });
        // --- Fin Lógica de Filtrado CORREGIDA ---

        // console.log("  Producto", product.nombre, "es un match?", isMatch); // Log opcional
        return isMatch;
      });
      // console.log("Productos filtrados:", filtered); // Log opcional
      setSelectedProducts(filtered);
    }
  };

  if (loading) {
    return (
      <WithNavbarAndFooter>
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Cargando productos...
          </p>
        </div>
      </WithNavbarAndFooter>
    );
  }

  const showNoProductsMessage = !loading && selectedProducts.length === 0;

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.85,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <WithNavbarAndFooter>
      <div className="content">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Productos" }, // Último item, sin href
          ]}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 text-center md:text-left">
          Nuestros Productos
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="w-full md:w-64 lg:w-80 flex-shrink-0">
            {/* FilterSidebar probablemente necesita la lista plana de categorías */}
            {/* Asegúrate de que useCategoriesStore trae solo los objetos de categoría { id, categoryName } */}
            <FilterSidebar
              onFilterChange={handleFilterChange}
              categories={categories}
            />
          </div>

          <div className="flex-1 flex justify-center md:block">
            {showNoProductsMessage ? (
              <div className="text-center text-xl text-gray-600 dark:text-gray-400 py-8">
                No se encontraron productos que coincidan con los filtros
                seleccionados.
              </div>
            ) : (
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center mx-auto">
                <AnimatePresence>
                  {selectedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                      className="w-full sm:max-w-sm"
                      transition={{
                        layout: { duration: 0.4, ease: "easeInOut" },
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <SeeProduct product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* === ANUNCIO === */}
      <div className="w-full dark:bg-gray-800 my-10">
        <Anuncio />
      </div>

      {/* === SEGUNDO CONTAINER: Productos Nuevos === */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left">
          Productos Nuevos
        </h2>
        <div className="flex justify-center md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array(4)
                .fill(null)
                .map((dummyItem, index) => (
                  <div
                    key={`new-product-${index}`}
                    className="flex justify-center"
                  >
                    <SeeProduct product={dummyItem} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default Productos;
