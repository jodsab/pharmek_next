'use client';
import React, { JSX, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../Footer';
import NavbarDesktop from '../NavbarDesktop'
import NavbarMobile from '../NavbarMobile';
import { WHATSAPP } from '@/core/whatsapp';
import { useGetProducts } from '@/hooks/categories/useGetProducts.hook';
import { useGetCategories } from '@/hooks/categories/useGetCategories.hook';
import { useGetDistribuidores } from '@/hooks/categories/useGetDistribuidores.hook';
import { useGetProductsDestacados } from '@/hooks/categories/useGetProductsDestacados.hook';
import { useProductsStore } from '@/libs/store-products';
import { useCategoriesStore } from '@/libs/store-categories';
import { useDistribuidoresSTore } from '@/libs/store-distribuidores';
import ChatBot from '../ChatBot'
import './styles.scss';

type Props = {
  children: React.ReactNode;
};

export default function WithNavbarAndFooterClient({ children }: Props): JSX.Element {
  const { loading: loadingProducts, products } = useGetProducts();
  const { loading: loadingCategories, categories } = useGetCategories();
  const { loading: loadingDistribuidores, distribuidores } = useGetDistribuidores();
  const { loading: loadingProductsDestacados, productsDestacados } = useGetProductsDestacados();

  const productsStore = useProductsStore((state) => state.products);
  const setProductsStore = useProductsStore((state) => state.setProducts);
  const categoriesStore = useCategoriesStore((state) => state.categories);
  const setCategoriesStore = useCategoriesStore((state) => state.setCategories);
  const distribuidoresStore = useDistribuidoresSTore((state) => state.distribuidores);
  const setDistribuidoresStore = useDistribuidoresSTore((state) => state.setDistribuidores);

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) setProductsStore(products);
    if (Array.isArray(categories) && categories.length > 0) setCategoriesStore(categories);
    if (Array.isArray(distribuidores) && distribuidores.length > 0) setDistribuidoresStore(distribuidores);
  }, [products, categories, distribuidores, setProductsStore, setCategoriesStore, setDistribuidoresStore, productsDestacados]);

  return (
    <div className="withnavbarandfooter_container">
      <Link href={WHATSAPP} className="btn-wsp" target="_blank" rel="noreferrer">
        <FaWhatsapp color="white" size={30} />
      </Link>
      <div className="withnavbarandfooter_content">
        <div className="navbar_container">
          <div className="mobile_menu">
            <NavbarMobile />
          </div>
          <div className="desktop_menu">
            <NavbarDesktop />
          </div>
        </div>
        <div className="children">{children}</div>
        <Footer />
      </div>
      <ChatBot />
    </div>
  );
}
