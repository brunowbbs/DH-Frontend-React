function Pessoa(props){
  
  return( 
  <>
    <h1>{props.nome}</h1>
    <h2>{props.idade >= 18 ? "Maior de idade" : "Menor de idade"}</h2>
  </>
  )
}

export default Pessoa;