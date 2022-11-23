import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    //const response = await axios.get("https://dummyjson.com/products");
    const response = await api.get("/products");
    setProducts(response.data.products);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} to={`/details/${product.id}`}>
          <div
            style={{
              display: "flex",
              marginBottom: 20,
              border: "1px solid #cacaca",
            }}
          >
            <img src={product.thumbnail} width={60} />
            <p>{product.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
