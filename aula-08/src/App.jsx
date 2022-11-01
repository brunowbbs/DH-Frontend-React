import { useRef, useState } from "react";

const App = () => {
  // const inputRef = useRef(null);

  const [nomes, setNomes] = useState([]);

  const [valueInput, setValueInput] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [errorInput, setErrorInput] = useState("");

  function handleSubmit(evento) {
    if (valueInput.trim()) {
      setNomes([...nomes, valueInput]);

      setErrorInput("");
      setValueInput("");
    } else {
      setErrorInput("Digite um nome no campo");
    }

    evento.preventDefault();
    //alert(inputRef.current.value);
  }

  return (
    <div style={isChecked ? { background: "red" } : {}}>
      <h1>{isChecked.toString()}</h1>

      <ul>
        {nomes.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        {/* <input ref={inputRef} /> */}

        <input
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
        />
        <label>
          pressionado?
          <input
            value={isChecked}
            type="checkbox"
            onChange={(event) => setIsChecked(event.target.checked)}
          />
        </label>
        <p>{errorInput}</p>
        {isChecked ? <input type="submit" /> : null}
      </form>
    </div>
  );
};

export default App;

//Uncontrolled
//Controlled
