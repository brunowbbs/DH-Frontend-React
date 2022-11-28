import { useState } from "react";

const Increment = () => {
  const [numero, setNumero] = useState(0);

  function incrementValue() {
    setNumero(numero + 1);
  }

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={incrementValue}>Incrementar</button>
    </div>
  );
};

export default Increment;
