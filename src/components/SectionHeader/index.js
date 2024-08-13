import React, { useEffect } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const SectionHeader = ({ title, subtitle, src }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="section_header_container">
      <div className="img_container">
        <Image
          className="front"
          data-aos="fade-right"
          src={src}
          width={150}
          height={150}
          alt="section header"
        />
      </div>

      <div className="rigth_content">
        <h2 data-aos="fade-up">{title}</h2>
        <div className="green_space bordered">
          <p data-aos="fade-left">{subtitle}</p>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
