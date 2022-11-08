import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Topbar from "./Topbar";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__header">
        <Topbar />
      </div>
      <div className="navigation__body">
        <Logo />
        <ul className="">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "is-active" : "")}
          >
            <li>accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "is-active" : "")}
          >
            <li>about</li>
          </NavLink>
          <NavLink
            to="/projects"
            className={(nav) => (nav.isActive ? "is-active" : "")}
          >
            <li>projects</li>
          </NavLink>
          <NavLink
            to="/booklet"
            className={(nav) => (nav.isActive ? "is-active" : "")}
          >
            <li>booklet</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
