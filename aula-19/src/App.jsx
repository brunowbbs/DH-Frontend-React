import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import MyProvider from "./providers/MyProvider";
import ThemeProvider from "./providers/ThemeProvider";

const App = () => (
  // <AllProvider>
  <ThemeProvider>
    <MyProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  </ThemeProvider>
  // </AllProvider>
);

export default App;

// const AllProvider = ({ children }) => (
//   <ThemeProvider>
//     <MyProvider>{children}</MyProvider>
//   </ThemeProvider>
// );
