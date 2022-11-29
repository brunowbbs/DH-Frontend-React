import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const Details = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      alert("Erro ao buscar produto");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Carregando....</div>;
  }

  if (!product._id) {
    return <div>produto não encontrado</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} />
      <p>{product.manufacturer}</p>
      <p>{product.description}</p>
      <h2>{product.price}</h2>
    </div>
  );
};

export default Details;
