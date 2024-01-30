"use client";
import React from "react";
import Image from "next/image";
import AtomSlider from "@/atoms/AtomSlider";
import { IMG_MOBILE, IMG_DESKTOP } from "@/core/frontImages";
import "./styles.scss";

const FrontSlider = () => {
  return (
    <>
      <div className="swiper_container">
        <div className="swiper_desktop">
          <AtomSlider items={IMG_DESKTOP} />
        </div>
        <div className="swiper_mobile">
          <AtomSlider items={IMG_MOBILE} />
        </div>
      </div>
    </>
  );
};

export default FrontSlider;
