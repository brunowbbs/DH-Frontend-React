import { useParams } from "react-router-dom";

const Details = () => {
  const { parametro } = useParams();

  return (
    <div>
      <h1>Hello Details Page</h1>
      <h2>{parametro}</h2>
    </div>
  );
};

export default Details;
