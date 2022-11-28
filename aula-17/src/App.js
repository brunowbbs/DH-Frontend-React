import Card from "./components/Card";
import Increment from "./components/Increment";

function App() {
  const user = {
    nome: "Wesley Bruno Barbosa Silva",
    profissao: "Analista de Sistemas",
  };

  return (
    <div>
      <h1>Hello World</h1>

      {/* <Card nome={user.nome} profissao={user.profissao} /> */}
      <Card {...user} />

      <Increment />
    </div>
  );
}

export default App;
