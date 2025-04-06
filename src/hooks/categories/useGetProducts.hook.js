import { useState, useEffect } from "react";
import Api from "@/api/Api";
import { useProductsStore } from "@/libs/store-products";

const useGetProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { setProducts: setProductsStore } = useProductsStore();

  const getProducts = async () => {
    try {
      setLoading(true);
      const data = await Api.get("http://localhost:3000/api/products");
      const dataJson = await data.json();
      if (dataJson) {
        setProducts(dataJson);
        setProductsStore(dataJson);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, products };
};

export { useGetProducts };
