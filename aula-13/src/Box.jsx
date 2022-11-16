import { useEffect } from "react";

const Box = () => {
  useEffect(
    () => () => console.log("O COMPONENTE ACABOU DE SER DEMONSTADO"),

    []
  );

  return (
    <div>
      <h1>Essa box está sendo mostrada</h1>
    </div>
  );
};

export default Box;
