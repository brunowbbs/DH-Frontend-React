import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";

import Home from "./pages/Home";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idProduct" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
