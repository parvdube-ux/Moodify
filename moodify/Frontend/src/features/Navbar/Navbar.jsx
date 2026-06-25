import React from "react";
import newlogo from "../../assets/newlogo.png";
import useLogout from "../../features/Auth/hooks/useLogout";
import "./navbar.scss";

const Navbar = () => {
  const logoutHandler = useLogout(); 

  return (
    <div className="Navbar">
      <img src={newlogo} alt="Logo" />
      <h2>Detect and Vibe!</h2>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Navbar;