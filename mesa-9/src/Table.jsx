import { averageNotes } from "./utils";

const Table = ({notas})=>{
  return  <div className="container">
  <table border="1" className="line_title">
    <thead>
      <tr>
        <th>Disciplina</th>
        <th>Quantidade de Alunos</th>
        <th>Média das notas dos alunos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Banco de Dados</td>
        <td>{notas.database.length}</td>
        <td>{averageNotes(notas.database)}</td>
      </tr>

      <tr>
        <td>Desenvolvimento Frontend</td>
        <td>{notas.frontend.length}</td>
        <td>{averageNotes(notas.frontend)}</td>
      </tr>

      <tr>
        <td>Desenolvimento Backend</td>
        <td>{notas.backend.length}</td>
        <td>{averageNotes(notas.backend)}</td>
      </tr>
    </tbody>
  </table>
</div>
}

export default Table;