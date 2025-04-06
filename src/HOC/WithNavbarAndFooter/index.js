"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import NavbarDesktop from "@/components/NavbarDesktop";
import NavbarMobile from "@/components/NavbarMobile";
import { WHATSAPP } from "@/core/whatsapp";
import { useGetProducts } from "@/hooks/categories/useGetProducts.hook";
import { useGetCategories } from "@/hooks/categories/useGetCategories.hook";
import { useGetDistribuidores } from "@/hooks/categories/useGetDistribuidores.hook";
import { useGetProductsDestacados } from "@/hooks/categories/useGetProductsDestacados.hook";
import { useProductsStore } from "@/libs/store-products";
import { useCategoriesStore } from "@/libs/store-categories";
import { useDistribuidoresSTore } from "@/libs/store-distribuidores";
import Chatbot from "@/components/ChatBot";

import "./styles.scss";

const WithNavbarAndFooter = ({ children }) => {
  const { loading: loadingProducts, products } = useGetProducts();
  const { loading: loadingCategories, categories } = useGetCategories();
  const { loading: loadingDistribuidores, distribuidores } =
    useGetDistribuidores();
  const { loading: loadingProductsDestacados, productsDestacados } =
    useGetProductsDestacados();

  const productsStore = useProductsStore((state) => state.products);
  const setProductsStore = useProductsStore((state) => state.setProducts);
  const categoriesStore = useCategoriesStore((state) => state.categories);
  const setCategoriesStore = useCategoriesStore((state) => state.setCategories);
  const distribuidoresStore = useDistribuidoresSTore(
    (state) => state.distribuidores
  );
  const setDistribuidoresStore = useDistribuidoresSTore(
    (state) => state.setDistribuidores
  );

  useEffect(() => {
    products.length > 0 && setProductsStore(products);
    categories.length > 0 && setCategoriesStore(categories);
    distribuidores?.length > 0 && setDistribuidoresStore(distribuidores);
  }, [products, categories, distribuidores, productsDestacados]);

  return (
    <div className="withnavbarandfooter_container">
      <Link href={WHATSAPP} className="btn-wsp" target="_blank">
        <FaWhatsapp color="white" size={35} />
      </Link>
      <div className="withnavbarandfooter_content">
        <div className="navbar_container">
          <div className="mobile_menu">
            <NavbarMobile />
          </div>
          <div className="desktop_menu">
            <NavbarDesktop />
          </div>
        </div>
        <div className="children">{children}</div>
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
};

export default WithNavbarAndFooter;
