import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__body">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "link-active" : "")}
        >
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "link-active" : "")}
        >
          <li>about</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
