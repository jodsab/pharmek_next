import FrontSlider from "@/components/FrontSlider";
import ProductsSlider from "@/components/ProductsSlider";
import { BABYS_ANIMALS, ADULTS_ANIMALS } from "@/core/productsSlider";
import styles from "./page.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <FrontSlider />
      <section className="productos-titulo">
        <h1>Productos</h1>
      </section>
      <div className="animals_container">
        <div className="container-informacion-personal-index">
          <p>Animales Menores</p>
        </div>
        <ProductsSlider customSlides="first" data={BABYS_ANIMALS} />
        <div className="container-informacion-personal-index">
          <p>Animales Mayores</p>
        </div>
        <ProductsSlider customSlides="second" data={ADULTS_ANIMALS} />
      </div>
    </main>
  );
}
