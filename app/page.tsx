// app/page.js (Assuming App Router)
"use client";

import { useEffect } from "react";
import Script from "next/script";
import SectionHeader from "@/components/SectionHeader";
import Slider from "./components/Slider";
import productos from "./assets/productos.png";
import tiktok from "./assets/tiktok.png";
import { FaPills } from "react-icons/fa";
import Image from "next/image";
import CardCategorie from "@/components/Skeletons/CardCategories/CardCategorie";
// import Tiktok from "./components/Tiktok"; // Remove the old Tiktok import
import TiktokEmbed from "./components/TiktokEmbed"; // Import the new component
import PetList from "@/components/PetList";
import { useGetCategories } from "@/hooks/categories/useGetCategories.hook";
import { useGetProducts } from "@/hooks/categories/useGetProducts.hook";
import { useGetProductsDestacados } from "@/hooks/categories/useGetProductsDestacados.hook";
import Portada from './components/Portada';
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles.scss";
import BlogCard from "./components/BlogCard";

const tiktokVideoIds = [
  "7382760567544548613",
  "7380443882275753222",
  "7377833903316389125",
];
// --- FIN DE SIMULACIÓN ---

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
      {/* Load the TikTok embed script ONCE for this page (or ideally higher up) */}
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="afterInteractive" // Or "lazyOnload" depending on when you need embeds to render
      />
      <Portada />
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
          <div className="productos_section mt-3" data-aos="fade-up">
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
            {tiktokVideoIds.map((videoId, index) => (
              <li key={videoId || index}>
                <TiktokEmbed videoId={videoId} />
              </li>
            ))}
          </ul>
        </section>
        <PetList />
      </div>
    </main>
  );
}
