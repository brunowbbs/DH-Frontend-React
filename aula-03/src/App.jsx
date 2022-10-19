import "./styles.css";
import logo from "./logo.png";

function NomeDaFuncao() {
  const nome = "Wesley";

  return (
    <div>
      <h1 className="titulo">{nome}</h1>
      <img
        alt="Imagem do logo do react"
        src={logo}
        //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy81xKzdvWHqMQ0s4mzwYx6TxetMYC4igaSMJf2L-UkA&s"
      />
    </div>
  );
}

export default NomeDaFuncao;
