import React, { createContext, useState } from "react";

export const MyContext = createContext({});

const MyProvider = ({ children }) => {
  const [nome, setNome] = useState("Wesley");

  const [counter, setCounter] = useState(0);

  function incrementCount() {
    setCounter(counter + 1);
  }

  return (
    <MyContext.Provider value={{ nome, setNome, counter, incrementCount }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
