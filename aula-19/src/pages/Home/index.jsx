import { useContext } from "react";

import { MyContext } from "../../providers/MyProvider";
import { ThemeContext } from "../../providers/ThemeProvider";

import "./styles.css";

const Home = () => {
  const { nome, setNome, counter, incrementCount } = useContext(MyContext);
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "bg_light" : "bg_dark"}>
      <h1>
        Hello Home {nome} | {counter}
      </h1>
      <input onChange={(event) => setNome(event.target.value)} />
      <button onClick={incrementCount}>Incrementar</button>
      <button onClick={handleTheme}>ALterar Tema</button>
    </div>
  );
};

export default Home;
