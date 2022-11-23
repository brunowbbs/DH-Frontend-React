import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");

  function handleNavigate() {
    navigate("/contact");
  }

  return (
    <div>
      <h1>Hello Home Page</h1>
      <Link to="/contact">Ir para Contact</Link>
      <Link to={`/details/10`}>Ir para Details</Link>

      <input onChange={(e) => setNome(e.target.value)} />

      <button onClick={handleNavigate}>ir para pagina de contato</button>
    </div>
  );
};

export default Home;
