"use client";
import React, { useState } from "react";
import "./styles.scss";
import { BABYS_ANIMALS, ADULTS_ANIMALS } from "../../core/productsSlider";
import AtomModal from "@/atoms/AtomModal";

const ProductosPage = () => {
  const [modalData, setModalData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickOnSlide = (slide) => {
    console.log(slide);
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
  //Obtener filtros
  const filtersBabys = BABYS_ANIMALS.reduce((acc, animal) => {
    if (animal.filter) {
      acc.push(...animal.filter);
    }
    return acc;
  }, []);
  const filtersAdults = ADULTS_ANIMALS.reduce((acc, animal) => {
    if (animal.filter) {
      acc.push(...animal.filter);
    }
    return acc;
  }, []);
  const allFilters = [
    ...new Set(["Antibióticos", ...filtersBabys, ...filtersAdults]),
  ];
  //obtener nuevo array de productos

  const adults = [...ADULTS_ANIMALS];
  const baby = [...BABYS_ANIMALS];

  const newArrAnimals = [...adults, ...baby];

  return (
    <div>
      <section className="productos-titulo">
        <h2>Productos</h2>
      </section>
      <AtomModal
        data={modalData}
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <section className="wrap">
        <section className="store-wrapper">
          <div className="category_list">
            <p>Filtrar por:</p>
            {allFilters?.map((f, index) => {
              return (
                <a key={index} className="category_item" category={f}>
                  {f}
                </a>
              );
            })}
          </div>
          <section className="products-list">
            {newArrAnimals.map((a) => {
              const items = a.presentation;
              return items?.map((i) => {
                return (
                  <div
                    key={i.id}
                    className="product-item"
                    category="Vitaminas y minerales "
                  >
                    <section
                      onclick="Adegan_20mL()"
                      className="cuadro"
                      onClick={() => clickOnSlide(a)}
                    >
                      <img className="imagen" src={i.src} alt=" " />
                      <p className="cuadro-titulo">{i.nombre}</p>

                      <section className="ap">
                        <p className="cuadro-ver"> Ver Producto </p>
                      </section>
                    </section>
                  </div>
                );
              });
            })}
            {/*             {adults.map((a) => {
              const items = a.presentation;
              console.log(items);
              return items?.map((i) => {
                console.log("dasdsa");
                return <div>{i.nombre}</div>;
              });
            })}
            {baby.map((a) => {
              const items = a.presentation;
              console.log(items);
              return items?.map((i) => {
                console.log("dasdsa");
                return <div>{i.nombre}</div>;
              });
            })} */}
          </section>
        </section>
      </section>
    </div>
  );
};

export default ProductosPage;
