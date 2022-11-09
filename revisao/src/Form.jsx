function Form(props){


  function salvarFilme(){
   
    if(props.nomeFilme == "" || props.imagemFilme == ""){
      alert("Preencha os campos para salvar o filme");
    }else{

      props.setFilmes([...props.filmes, {
        nome:props.nomeFilme,
        url:props.imagemFilme,
      } ])

    }

  }


  return (
    <form>
    <input 
      value={props.nomeFilme} 
      onChange={(event)=>props.setNomeFilme(event.target.value)} 
      placeholder="Digite o nome do filme"/>


    <input 
    value={props.imagemFilme} 
    onChange={(event)=>props.setImagemFilme(event.target.value)} 
    placeholder="Digite a url da imagem"/>

    <button type="button" onClick={salvarFilme}>Salvar</button>

  </form>
  )
  
}

export default Form;