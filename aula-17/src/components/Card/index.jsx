const Card = (props) => {
  const { nome = "-", profissao = "-" } = props;

  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Profissao: {profissao}</p>
    </div>
  );
};

export default Card;
