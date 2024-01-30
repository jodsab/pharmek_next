import React from "react";
import "./styles.scss";
import { BABYS_ANIMALS, ADULTS_ANIMALS } from "../../core/productsSlider";

const ProductosPage = () => {
  console.log("BABYS_ANIMALS", BABYS_ANIMALS);
  console.log("ADULTS_ANIMALS", ADULTS_ANIMALS);

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
    <>
      <section class="productos-titulo ">
        <h1>Productos</h1>
      </section>
      <section class="wrap">
        <section class="store-wrapper">
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
              console.log(items);
              return items?.map((i) => {
                console.log("dasdsa");
                return (
                  <div
                    key={i.id}
                    className="product-item"
                    category="Vitaminas y minerales "
                  >
                    <section onclick="Adegan_20mL()" className="cuadro">
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
    </>
  );
};

export default ProductosPage;
