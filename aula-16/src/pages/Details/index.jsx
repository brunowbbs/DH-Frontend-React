import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import ItemList from "../components/ItemList";
import api from "../../services/api";

const Details = () => {
  const { idProduct } = useParams();

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetailProduct();
  }, []);

  async function getDetailProduct() {
    // const response = await axios.get(
    //   "https://dummyjson.com/products/" + idProduct
    // );

    const response = await api.get(`/products/${idProduct}`);

    console.log(response.data);

    setProduct(response.data);

    setLoading(false);
  }

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return <ItemList product={product} />;
};

export default Details;
