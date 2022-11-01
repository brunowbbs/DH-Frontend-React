import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([5]);

  function addItem() {
    setItems([...items, items.lastIndexOf()]);
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <li>{"O item" + { item } + "foi adicionado à lista!"}</li>
        ))}
      </ul>
      <button onClick={addItem}>Aperte</button>
    </>
  );
};

export default App;
