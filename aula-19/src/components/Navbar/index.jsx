import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../providers/MyProvider";

const Navbar = () => {
  const { counter } = useContext(MyContext);

  return (
    <div>
      {counter}
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Navbar;
