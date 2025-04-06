import { useState, useEffect } from "react";
import Api from "@/api/Api";
import { useDistribuidoresSTore } from "@/libs/store-distribuidores";

const useGetDistribuidores = () => {
  const [loading, setLoading] = useState(false);
  const [distribuidores, setDistribuidores] = useState([]);
  const { setDistribuidoresStore } = useDistribuidoresSTore();

  const getDistribuidores = async () => {
    try {
      setLoading(true);
      const data = await Api.get("http://localhost:3000/api/distribuidores");
      const dataJson = await data.json();
      if (dataJson) {
        setDistribuidores(dataJson);
        setDistribuidoresStore(dataJson);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDistribuidores();
  }, []);
  return { loading, distribuidores };
};

export { useGetDistribuidores };
