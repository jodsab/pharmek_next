import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HocLeft = ({ children }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return <div data-aos="zoom-out">{children}</div>;
};

export default HocLeft;
