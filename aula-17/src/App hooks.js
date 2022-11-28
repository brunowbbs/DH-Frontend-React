import { useState, useMemo, useCallback, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [numero, setNumero] = useState(0);

  const getUsers = useCallback(async () => {
    const response = await fetch("https://api.com.users/all");
    console.log(response);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  //sempre que precisar cachear uma função (de modo que ela não seja redeclarada, use o useCallback)
  const handleName = useCallback((event) => setName(event.target.value), []);

  function incrementValue() {
    setNumero(numero + 1);
  }

  const data = useMemo(() => Array(33_000_000).fill({ foo: "bar" }), []);

  return (
    <div>
      {name}
      <input value={name} onChange={(event) => handleName(event)} />
      <br />
      <br />
      {numero}
      {data.map((item) => console.log(item))}
      <button onClick={incrementValue}>Incrementar</button>
    </div>
  );
}

export default App;
