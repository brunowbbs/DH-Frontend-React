import { useState } from "react";
import Table from './Table';

import "./styles.css";

function App() {
  const [formData, setFormData] = useState({ conteudo: "", nota: 0 });
  const [notas, setNotas] = useState({
    database:[],
    frontend:[],
    backend:[]
  })

  function handleSubmit(event) {
    event.preventDefault();

    if(formData.conteudo === ""){
      alert("Selecione uma disciplina");
      return;
    }

    if(formData.conteudo === "devops"){
      alert("Esta disciplina não está disponível");
      return;
    }

    if(formData.nota <0 || formData.nota >10 || formData.nota === ""){
      alert("Informe uma nota válida");
      return;
    }


    const notasTemp = {...notas}
    notasTemp[formData.conteudo].push(Number(formData.nota));
    setNotas(notasTemp);

    setFormData({conteudo:'', nota:''})
  
  }

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina  | {formData.conteudo} | {formData.nota}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select value={formData.conteudo} onChange={(event)=> setFormData({...formData, conteudo:event.target.value})}>
            <option disabled hidden value="">
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input value={formData.nota} onChange={(event)=>setFormData({...formData, nota: event.target.value })} />
        </div>
        <input type="submit" value="Salvar" disabled={formData.conteudo === "devops" || formData.conteudo === "" ? true:false} />
      </form>

     <Table notas ={notas}/>

    </div>
  );
}

export default App;
