import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>about</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
