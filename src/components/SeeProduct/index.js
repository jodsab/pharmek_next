import React from "react";
import Image from "next/image";
import img_product from "./assets/product.png";

import "./styles.scss";
import Link from "next/link";

const SeeProduct = ({ product }) => {
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
        <p className="name py-2">{product?.nombre || "Producto sin nombre"}</p>
        <Link
          href={{
            pathname: `/productos/${product?.id}`,
          }}
        >
          <button>
            <p>Ver producto</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SeeProduct;
