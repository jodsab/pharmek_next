"use client";
import { useEffect } from "react";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import SectionHeader from "@/components/SectionHeader";
import Slider from "./components/Slider";
import productos from "./assets/productos.png";
import tiktok from "./assets/tiktok.png";
import { FaPills } from "react-icons/fa";
import Tiktok from "./components/Tiktok";
import PetList from "@/components/PetList";
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
          <section className="section_slider content" data-aos="zoom-out">
            <Slider />
          </section>

          <section className="section_productos content">
            <SectionHeader
              title="PRODUCTOS"
              subtitle="Tenemos todo lo que necesitas aquí"
              src={productos}
            />
            <div className="productos_section" data-aos="fade-up">
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
            <ul className="tiktok_list" data-aos="fade-up">
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
          <PetList />
        </div>
      </WithNavbarAndFooter>
    </main>
  );
}
