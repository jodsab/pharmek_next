"use client";
import React, { useState } from "react";
import AtomModal from "@/atoms/AtomModal";
import AtomSlider from "@/atoms/AtomSlider";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "./styles.scss";

const ProductsSlider = ({ ...props }) => {
  const [modalData, setModalData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = props;

  const { customSlides } = props;

  const handleSlideChange = (swiper) => {
    // Puedes hacer lo que quieras con el índice de la diapositiva activa
  };

  const clickOnSlide = (slide) => {
    setModalData(slide);
    setIsModalOpen(true);
  };

  //Modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const ArrData = data?.map((slide, index) => {
    return (
      <SwiperSlide key={slide.id}>
        <div className="product_container" onClick={() => clickOnSlide(slide)}>
          <div className="product_img_container">
            <Image
              src={
                typeof slide.src === "string"
                  ? `/${slide.src}`
                  : `/${slide.src[0]}`
              }
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </div>
          <div className="bottom_info">
            <p className="nombre">{slide.nombre}</p>
            <button>Ver producto</button>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="products_slider_container">
      <div className="pagination">
        <button
          className={`next review-swiper-button-next${customSlides}`}
        >{`>`}</button>
        <button
          className={`prev review-swiper-button-prev${customSlides}`}
        >{`<`}</button>
      </div>
      <Swiper
        spaceBetween={0}
        loop
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: `.review-swiper-button-next${customSlides}`,
          prevEl: `.review-swiper-button-prev${customSlides}`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        threshold={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <div>{ArrData}</div>
      </Swiper>
      <AtomModal
        data={modalData}
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ProductsSlider;
