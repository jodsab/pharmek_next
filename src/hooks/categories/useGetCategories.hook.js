import { useState, useEffect } from "react";
import Api from "@/api/Api";
import { useCategoriesStore } from "@/libs/store-categories";

const useGetCategories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { setCagoriesStore } = useCategoriesStore();

  const getCategories = async () => {
    try {
      setLoading(true);
      const data = await Api.get("http://localhost:3000/api/categories");
      const dataJson = await data.json();
      if (dataJson) {
        setCategories(dataJson);
        setCagoriesStore(dataJson);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return { loading, categories };
};

export { useGetCategories };
