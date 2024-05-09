"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP } from "../../core/whatsapp";
import { Button, Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

const AtomModal = ({ ...props }) => {
  const { data, isModalOpen, showModal, handleOk, handleCancel } = props;
  return (
    <div className="atom_modal_container">
      <Modal
        title={data?.nombre}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={false}
        width={1100}
      >
        <div className="section-bg">
          <div
            onClick={handleCancel}
            className="modal__boton"
            id="modal__boton"
          >
            x
          </div>
          <div className="modal_inicio">
            <div className="modal_inicio_links">
              <p onClick={handleCancel}>Inicio </p>
              <p className="modal_separacion"> / </p>
              <Link href="/productos"> Productos</Link>
            </div>
          </div>
          <div className="container-titulo">
            <div className="titulo">
              <p>{data?.nombre}</p>
            </div>
          </div>
        </div>
        <div className="modal_container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {typeof data?.src === "string" ? (
              <SwiperSlide>
                <div className="img_content">
                  <Image
                    src={`/${data?.src}`}
                    alt="image"
                    width={110}
                    height={110}
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ) : (
              data?.src?.map((e, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="img_content">
                      <Image
                        src={`/${e}`}
                        alt="image"
                        width={110}
                        height={110}
                        sizes="100vw"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>

          <div className="text_content">{data?.content}</div>
        </div>
        <div className="modal_aux_bottom_buttons">
          <button onClick={() => window.open(data?.inserto, "_blank")}>
            Ver inserto
          </button>
          <Link href={WHATSAPP} target="_blank">
            Asesoría <FaWhatsapp size={20} />
          </Link>
        </div>
      </Modal>
    </div>
  );
};
export default AtomModal;
