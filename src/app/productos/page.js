"use client";
import React, { useEffect, useState } from "react";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SeeProduct from "@/components/SeeProduct";
import Anuncio from "@/components/Anuncio";
import { useGetProducts } from "@/hooks/categories/useGetProducts.hook";
import FilterSidebar from "./components/FilterSidebar";
import { useProductsStore } from "@/libs/store-products";
import { useCategoriesStore } from "@/libs/store-categories";

import "./styles.scss";

const Productos = ({ searchParams }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = useProductsStore((state) => state.products);
  const categories = useCategoriesStore((state) => state.categories);

  const handleFilterChange = (selectedCategories) => {
    if (selectedCategories.length === 0) {
      setSelectedProducts(products);
    } else {
      const filtered = products.filter((product) => {
        return product.categories.some((category) =>
          selectedCategories.includes(category.categoryName)
        );
      });
      setSelectedProducts(filtered);
    }
  };

  useEffect(() => {
    products.length > 0 && setSelectedProducts(products);
  }, [products]);

  return (
    <WithNavbarAndFooter>
      <div className="productos_container">
        <h1 class="text-4xl font-extrabold dark:text-white mb-4">
          Nuestros Productos
        </h1>
        <div className="flex content gap-10">
          <FilterSidebar onFilterChange={handleFilterChange} />
          <div className="products_destacados content">
            {selectedProducts &&
              selectedProducts?.map((product) => {
                return <SeeProduct product={product} key={product.id} />;
              })}
          </div>
        </div>

        <Anuncio />
        <h1 className="mb-5">PRODUCTOS NUEVOS</h1>
        <div className="products_nuevos content">
          {Array(4)
            .fill("")
            .map((e, index) => {
              return <SeeProduct key={index} />;
            })}
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default Productos;
