import {React, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import $ from "jquery";
// import Topbar from "./Topbar";

const Navigation = () => {

  const handleMenuMobile = () => {
    if(window.matchMedia('(max-width: 800px)')){
        $('.navigation__body__right').toggle(250);
    }
  }

  const scrollFunction = () => {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 80) {
        $(".navigation__body").addClass('navbar-fixed');
    } else {
        $(".navigation__body").removeClass('navbar-fixed');
    }
  }

  useEffect(function(){

    window.onscroll = function () {
        scrollFunction();
    };

  },[])


  return (
    <div className="navigation">
      {/* <div className="navigation__header">
        <Topbar />
      </div> */}
      <div className="navigation__body">
        <div className="navigation__body__left">
          <Logo/>
        </div>
        <div className="navigation__body__right">
          <button className='cross-frame' onClick={handleMenuMobile}>
            <div className="cross">
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </button>
          <ul className="">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "is-active" : "")}
            >
              <li>accueil</li>
            </NavLink>
            <NavLink
              to="/projects"
              className={(nav) => (nav.isActive ? "is-active" : "")}
            >
              <li>projets</li>
            </NavLink>
            <NavLink
              to="/booklet"
              className={(nav) => (nav.isActive ? "is-active" : "")}
            >
              <li>expertises</li>
            </NavLink>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "is-active" : "")}
            >
              <li>à propos</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "is-active" : "")}
            >
              <li>contact</li>
            </NavLink>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
