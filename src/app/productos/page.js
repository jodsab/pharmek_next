"use client";
import React from "react";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SeeProduct from "@/components/SeeProduct";
import Anuncio from "@/components/Anuncio";

import "./styles.scss";

const Productos = () => {
  return (
    <WithNavbarAndFooter>
      <div className="productos_container">
        <h2>PRODUCTOS DESCTACADOS</h2>
        <div className="products_destacados content">
          {Array(4)
            .fill("")
            .map((e, index) => {
              return <SeeProduct key={index} />;
            })}
        </div>
        <Anuncio />
        <h2>PRODUCTOS NUEVOS</h2>
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
