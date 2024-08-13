"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pracanex from "./Slide/pracanex.png";
import Slide from "./Slide/Slide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./styles.scss";

const ELEMENTOS = 9;

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="slider_container">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {Array(ELEMENTOS)
          .fill("")
          .map((a, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {Array(ELEMENTOS)
          .fill("")
          .map((a, index) => {
            return (
              <SwiperSlide key="index">
                <Image
                  alt="Naturaleza"
                  src={pracanex}
                  width={0}
                  height={0}
                  className="imageSlide"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Slider;
