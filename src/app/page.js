"use client";
import { useEffect } from "react";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SectionHeader from "@/components/SectionHeader";
import Slider from "./components/Slider";
import productos from "./assets/productos.png";
import tiktok from "./assets/tiktok.png";
import { FaPills } from "react-icons/fa";
import CardCategorie from "@/components/Skeletons/CardCategories/CardCategorie";
import Tiktok from "./components/Tiktok";
import PetList from "@/components/PetList";
import { useGetCategories } from "@/hooks/categories/useGetCategories.hook";
import { useGetProducts } from "@/hooks/categories/useGetProducts.hook";
import { useGetProductsDestacados } from "@/hooks/categories/useGetProductsDestacados.hook";
import { useCategoriesStore } from "@/libs/store-categories";
import { useProductsStore } from "@/libs/store-products";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

export default function Home({ session }) {
  const { loading: loadingCategories, categories } = useGetCategories();
  const { loading: loadingProducts, products: productsHook } = useGetProducts();
  const { loading: loadingProductsDestacados, productsDestacados } =
    useGetProductsDestacados();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="main">
      <WithNavbarAndFooter>
        <div className="home_container">
          <section className="section_slider content" data-aos="zoom-out">
            {loadingProductsDestacados ? (
              <Slider loadingProductsDestacados={loadingProductsDestacados} />
            ) : (
              productsDestacados && (
                <Slider productsDestacados={productsDestacados} />
              )
            )}
          </section>

          <section className="section_productos content">
            <SectionHeader
              title="PRODUCTOS"
              subtitle="Tenemos todo lo que necesitas aquí"
              src={productos}
            />
            <div className="productos_section" data-aos="fade-up">
              {loadingCategories ? (
                <CardCategorie loadingCategories={loadingCategories} />
              ) : (
                categories &&
                categories?.map((category, index) => {
                  return <CardCategorie key={index} category={category} />;
                })
              )}
            </div>
          </section>
          <section className="section_tiktok content">
            <SectionHeader
              title="TIKTOK"
              subtitle="Síguenos para ver más contenido"
              src={tiktok}
            />
            <ul className="tiktok_list" data-aos="fade-up">
              {Array(1)
                .fill({})
                .map((e, index) => {
                  return <li key={index}>{/* <Tiktok /> */}</li>;
                })}
            </ul>
          </section>
          <PetList />
        </div>
      </WithNavbarAndFooter>
    </main>
  );
}
