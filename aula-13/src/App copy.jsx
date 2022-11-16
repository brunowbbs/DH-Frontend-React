import { useState, useLayoutEffect, useEffect } from "react";
import Box from "./Box";

function App() {
  const [count, setCount] = useState(0);

  const [visibleBox, setVisibleBox] = useState(true);

  // useLayoutEffect(() => {
  //   console.log("EXECUTEI A INICIALIZAÇÃO");
  // }, []);

  // setCount(count + 1);

  // useEffect(() => {
  //   setCount(count + 1);
  //   console.log("EXECUTEI APOS A MONTAGEM DO SEU COMPONENTE");
  // });

  // useEffect(() => console.log("EXECUTEI O TESTE DO ARRAY DO USEFFFECT"));

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      {/* {console.log("EXECUTEI A INICIALIZAÇÂO DENTRO DO COMPONENTE")}
      {visibleBox ? <Box /> : null}
      <button onClick={() => setVisibleBox(!visibleBox)}>Handle Box</button> */}
      <h1>{count}</h1>
    </div>
  );
}

export default App;
