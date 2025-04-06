"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SeeProduct from "@/components/SeeProduct";
import ProductoSolo from "./components/ProductoSolo";
import { useProductsStore } from "@/libs/store-products";

import "./styles.scss";

const ProductoId = ({ params }) => {
  const products = useProductsStore((state) => state.products);
  const product = products.find((product) => product.id == params.idProducto);

  return (
    <WithNavbarAndFooter>
      <div className="productoId_container content">
        {product && <ProductoSolo data={product} />}
        <div className="vertodos">
          <h3>PRODUCTOS RELACIONADOS</h3>
          <button>
            <p>Ver todos</p>
          </button>
        </div>
        <div className="products_list">
          {Array(4)
            .fill("")
            .map((producto, index) => {
              return <SeeProduct key={index} />;
            })}
        </div>
      </div>
    </WithNavbarAndFooter>
  );
};

export default ProductoId;
