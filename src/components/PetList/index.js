import React, { useEffect } from "react";
import SectionHeader from "../SectionHeader";
import hogar from "./assets/hogar.png";
import PetCard from "@/app/components/PetCard";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const PetList = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="section_hogar content">
      <SectionHeader
        title="HOGAR ADOPCIÓN"
        subtitle="Conoce a tu nuevo compañero de vida"
        src={hogar}
      />
      <ul className="pet_list" data-aos="fade-up">
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
  );
};

export default PetList;
