import React from "react";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SeeProduct from "@/components/SeeProduct";
import ProductoSolo from "./components/ProductoSolo";

import "./styles.scss";

const ProductoId = () => {
  return (
    <WithNavbarAndFooter>
      <div className="productoId_container content">
        <ProductoSolo />
        <div className="vertodos">
          <h3>PRODUCTOS RELACIONADOS</h3>
          <button>
            <p>Ver todos</p>
          </button>
        </div>
        <div className="products_list">
          {Array(7)
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
