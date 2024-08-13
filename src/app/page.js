"use client";
import { useEffect } from "react";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SectionHeader from "@/components/SectionHeader";
import Slider from "./components/Slider";
import productos from "./assets/productos.png";
import tiktok from "./assets/tiktok.png";
import hogar from "./assets/hogar.png";
import blog from "./assets/blog.png";
import { FaPills } from "react-icons/fa";
import Tiktok from "./components/Tiktok";
import BlogCard from "./components/BlogCard";
import PetCard from "./components/PetCard";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="main">
      <WithNavbarAndFooter>
        <div className="home_container">
          <section className="section_slider content" data-aos="zoom-in">
            <Slider />
          </section>

          <section className="section_productos content">
            <SectionHeader
              title="PRODUCTOS"
              subtitle="Tenemos todo lo que necesitas aquí"
              src={productos}
            />
            <div className="productos_section">
              {Array(6)
                .fill({})
                .map((e, index) => {
                  return (
                    <div className="categorias_card" key={index}>
                      <div className="img_container">
                        <FaPills />
                      </div>
                      <p>Antiparasitarios</p>
                    </div>
                  );
                })}
            </div>
          </section>
          <section className="section_tiktok content">
            <SectionHeader
              title="TIKTOK"
              subtitle="Síguenos para ver más contenido"
              src={tiktok}
            />
            <ul className="tiktok_list">
              {Array(1)
                .fill({})
                .map((e, index) => {
                  return (
                    <li key={index}>
                      <Tiktok />
                    </li>
                  );
                })}
            </ul>
          </section>
          <section className="section_blog content">
            <SectionHeader
              title="BLOG"
              subtitle="Tenemos toda la información ¡Para ti!"
              src={blog}
            />
            <ul className="blog_cards_container">
              {Array(5)
                .fill({})
                .map((e, index) => {
                  return (
                    <li key="index">
                      <BlogCard />
                    </li>
                  );
                })}
            </ul>
          </section>
          <section className="section_hogar content">
            <SectionHeader
              title="HOGAR ADOPCIÓN"
              subtitle="Conoce a tu nuevo compañero de vida"
              src={hogar}
            />
            <ul className="pet_list">
              {Array(3)
                .fill({})
                .map((e, index) => {
                  return (
                    <li key="index">
                      <PetCard />
                    </li>
                  );
                })}
            </ul>
          </section>
        </div>
      </WithNavbarAndFooter>
    </main>
  );
}
