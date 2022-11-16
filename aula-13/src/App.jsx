import { useState, useEffect } from "react";

const pizzasBack = [
  {
    id: 1,
    nome: "Portuguesa",
    preco: 49.9,
  },
  {
    id: 2,
    nome: "Frango",
    preco: 45.9,
  },
];

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [update, setUpdate] = useState(true);

  const [visibleList, setVisibleList] = useState(true);

  useEffect(() => {
    //implementation api service

    setTimeout(() => {
      setPizzas(pizzasBack);
      setUpdate(false);
    }, 2000);
  }, [update]);

  function clearStorage() {
    localStorage.clear();
    alert("APAGOU OS DADOS DO USUARIO");
  }

  useEffect(() => clearStorage(), visibleList);

  function updateList() {
    setUpdate(true);
  }

  // useEffect(() => {
  //   const func = setInterval(() => {
  //     console.log("INTERVAL");
  //   }, 2000);
  //   func.clear();
  // }, []);

  return (
    <>
      {update ? <p>Carregando....</p> : null}

      <ul>
        {visibleList
          ? pizzas.map((pizza) => (
              <li>
                <p>{pizza.nome}</p>
                <p>{pizza.preco}</p>
                <br />
              </li>
            ))
          : null}
      </ul>

      <button onClick={updateList}>Atualizar lista</button>

      <button onClick={() => setVisibleList(false)}>Destruir lista</button>
    </>
  );
}

export default App;
