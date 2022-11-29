import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    manufacturer: "",
    image: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos");
    }
  }

  async function newProduct() {
    const { name, price, description, manufacturer, image } = formData;

    try {
      await api.post("/products", {
        name,
        price,
        description,
        manufacturer,
        image,
      });
      emptyState();
      getProducts();
    } catch (error) {
      alert("Não foi possivel cadastrar o produto");
    }
  }

  function emptyState() {
    setFormData({
      name: "",
      description: "",
      price: "",
      manufacturer: "",
      image: "",
    });
  }

  return (
    <div className="container">
      <form>
        <h2>Cadastrar Produto</h2>
        <input
          placeholder="Nome"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <input
          placeholder="Preço"
          value={formData.price}
          onChange={(event) =>
            setFormData({ ...formData, price: event.target.value })
          }
        />
        <input
          placeholder="Fabricante"
          value={formData.manufacturer}
          onChange={(event) =>
            setFormData({ ...formData, manufacturer: event.target.value })
          }
        />
        <input
          placeholder="Image"
          value={formData.image}
          onChange={(event) =>
            setFormData({ ...formData, image: event.target.value })
          }
        />
        <textarea
          placeholder="Descrição"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
        <button type="button" onClick={newProduct}>
          Salvar
        </button>
      </form>

      <div className="products">
        <h1>Produtos</h1>

        <div className="content">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/details/${product._id}`}
              className="container-item"
            >
              <img src={product.image} />
              <p>{product.price}</p>
              <p>{product.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
