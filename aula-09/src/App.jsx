import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({ nome: "", conteudo: "" });
  const [errorFormData, setErrorFormData] = useState({
    errorNome: "",
    errorConteudo: "",
  });

  // const [nome, setNome] = useState("");
  // const [conteudo, setConteudo] = useState("");
  // const [numero, setNumero] = useState(10);

  //incorreto
  //let valor = 0;

  // function incrementar(){}// }

  // const incrementar = () => {
  //   // valor = valor + 1;
  //   setNumero(numero - 1);
  //   // alert("ok");
  // };

  function onSubmit(event) {
    event.preventDefault();

    if (!formData.nome.trim()) {
      setErrorFormData({
        ...errorFormData,
        errorNome: "Campo não pode ficar vazio",
      });
    }
    setErrorFormData({});

    // alert(`${nome} prefere ${conteudo}`);

    // setNome("");
  }

  return (
    <div>
      {/* <h1>Numero atual: {valor}</h1>

      <button onClick={incrementar}>Incrementar</button> */}
      <h1>Formulário de cadastro</h1>
      {formData.nome ? <h2>Nome: {formData.nome}</h2> : null}
      {/* {formData.nome && <h2>Nome: {formData.nome}</h2>} */}
      {formData.conteudo ? (
        <h2>Conteúdo: {formData.conteudo}</h2>
      ) : (
        <span>Esperando usuario selecionar...</span>
      )}
      <form
        onSubmit={onSubmit}
        className={formData.conteudo ? "wrapper-form" : "wraper-no-content"}
        style={formData.conteudo ? { background: "red" } : {}}
      >
        <input
          value={formData.nome}
          onChange={(event) =>
            setFormData({ ...formData, nome: event.target.value })
          }
        />
        <p>{errorFormData.errorNome}</p>

        <select
          value={formData.conteudo}
          onChange={(event) =>
            setFormData({ ...formData, conteudo: event.target.value })
          }
        >
          <option value="frontend">Front-end</option>
          <option value="backend">Backend-end</option>
          <option value="ux-ui">UX/UI</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
