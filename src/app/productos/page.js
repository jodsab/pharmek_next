"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BABYS_ANIMALS, ADULTS_ANIMALS } from "../../core/productsSlider";
import AtomModal from "@/atoms/AtomModal";
import "./styles.scss";

const ProductosPage = () => {
  const [modalData, setModalData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newArrAnimals, setNewArrAnimals] = useState([]);
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
  const arrAnimals = [...adults, ...baby] || [];

  const findFilter = (e) => {
    if (e === "clean") {
      setNewArrAnimals(arrAnimals);
    } else {
      const animals = arrAnimals.filter((animals) =>
        animals?.filter?.includes(e)
      );
      setNewArrAnimals(animals);
    }
  };

  useEffect(() => {
    setNewArrAnimals(arrAnimals);
  }, []);

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
                <button
                  onClick={() => findFilter(f)}
                  key={index}
                  className="category_item"
                  category={f}
                >
                  {f}
                </button>
              );
            })}
            <button
              onClick={() => findFilter("clean")}
              className="category_item"
              category=""
            >
              Limpiar filtro
            </button>
          </div>
          <section className="products-list">
            {newArrAnimals?.map((a) => {
              const items = a.presentation;
              return items?.map((i) => {
                return (
                  <div
                    key={i.id}
                    className="product-item"
                    category="Vitaminas y minerales "
                  >
                    <section className="cuadro" onClick={() => clickOnSlide(a)}>
                      {i.src && (
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="imagen"
                          src={
                            typeof i?.src === "string"
                              ? `/${i?.src}`
                              : `/${i?.src[0]}`
                          }
                          alt=" "
                        />
                      )}

                      <p className="cuadro-titulo">{i.nombre}</p>

                      <section className="ap">
                        <p className="cuadro-ver"> Ver Producto </p>
                      </section>
                    </section>
                  </div>
                );
              });
            })}
          </section>
        </section>
      </section>
    </div>
  );
};

export default ProductosPage;
