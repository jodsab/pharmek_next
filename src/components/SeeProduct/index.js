import React from "react";
import Image from "next/image";
import img_product from "./assets/logopng.png";

import "./styles.scss";
import Link from "next/link";

const SeeProduct = ({ product }) => {
  return (
    <div className="see_product_container">
      <div className="img_see_container">
        {product?.images.length > 0 ? (
          <Image
            width={200}
            height={200}
            src={product?.images[0]?.url}
            alt="imagen del producto"
          />
        ) : (
          <Image
            width={200}
            height={200}
            src={img_product}
            alt="imagen del producto"
          />
        )}
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
