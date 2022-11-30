import { useContext } from "react";

import { MyContext } from "../../providers/MyProvider";
import { ThemeContext } from "../../providers/ThemeProvider";

import "./styles.css";

const Dashboard = () => {
  const { nome, counter } = useContext(MyContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "bg_light" : "bg_dark"}>
      <h1>
        Hello Dashboard {nome} | {counter}
      </h1>
    </div>
  );
};

export default Dashboard;
