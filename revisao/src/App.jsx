import { useState } from "react"
import CardFilme from "./CardFilme";
import Form from "./Form";

function App() {

  const [nomeFilme, setNomeFilme] = useState("")
  const [imagemFilme, setImagemFilme] = useState("")



  const [filmes, setFilmes] = useState([]);

  // filme = {
  //   nome:'A lagoa azul',
  //   url:'http://filme.png',
  // }

  return(

 <div>
    <h1>Cadastro de Filmes</h1>

    <Form
      nomeFilme={nomeFilme}
      imagemFilme={imagemFilme}
      filmes={filmes}
      setNomeFilme={setNomeFilme}
      setImagemFilme={setImagemFilme}
      setFilmes={setFilmes}
    />

    {/* <div>{JSON.stringify(filmes)}</div> */}

    {
      filmes.map((filme)=>{
        return(
         <CardFilme filme={filme}/>
        )
      })
    }
  </div>
  )
}

export default App
