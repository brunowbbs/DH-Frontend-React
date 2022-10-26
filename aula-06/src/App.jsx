// import "./styles.css";
import styles from "./styles.module.css";
import ItemList from "./components/ItemList";

import { carros } from "./mock/carros";

const App = () => {
  return (
    <ul>
      <p className={styles.item_list}>a</p>
      {carros.map((carro) => (
        <ItemList key={`list-item-${carro.id}`} item={carro} />
      ))}
    </ul>
  );
};

export default App;
