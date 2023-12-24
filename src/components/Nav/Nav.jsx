import React from "react";
import "./Nav.sass";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/bible">Bíblia</NavLink>
    </nav>
  );
};

export default Nav;
