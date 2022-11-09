function CardFilme(props){
  return(
    <div>
      <h1>{props.filme.nome}</h1>
      <img src={props.filme.url} width={120} height={120}/>
    </div>
  )
}

export default CardFilme;