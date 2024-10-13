import React from "react";
import Image from "next/image";
import img_product from "./assets/product.png";

import "./styles.scss";

const SeeProduct = () => {
  return (
    <div className="see_product_container">
      <div className="img_see_container">
        <Image
          width={200}
          height={200}
          src={img_product}
          alt="imagen del producto"
        />
      </div>
      <div className="info">
        <p className="name">Pracanex</p>
        <button>
          <p>Ver producto</p>
        </button>
      </div>
    </div>
  );
};

export default SeeProduct;
