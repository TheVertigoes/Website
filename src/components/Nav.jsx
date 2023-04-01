import React from "react";
import "../styles/Nav.css";
import longLogo from "../assets/LogoLong.png";
import { FaBars } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom"

import "../index.js";

function Nav() {
  let menuOpen = false;

  function toggleMenu() {
    let menuLinks = document.querySelector(".links__menu");

    menuOpen = !menuOpen;

    if (menuOpen === false) {
      menuLinks.style.display = "none";
      document.body.classList.remove("nav-open")
    } else {
      menuLinks.style.display = "block";
      document.body.classList.add("nav-open")

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }

  return (
    <>
      <div className="links__menu">
        <button className="close__links-menu--btn" onClick={toggleMenu}>
          <GrFormClose className="close__links--icon" />
        </button>
        <ul className="menu__links">
          <Link to="/" onClick={toggleMenu} className="menu__link">HOME</Link>
          <Link to="/videos" onClick={toggleMenu} className="menu__link">VIDEOS</Link>
          <Link to="/contact" onClick={toggleMenu} className="menu__link">CONTACT</Link>
        </ul>
      </div>
      <nav>
        <div className="nav--container">
          <Link to="/" className="header__logo--wrapper">
            <img src={longLogo} className="header__logo" alt="" />
          </Link>
          <ul className="header__links">
            <Link to="/" className="header__link">HOME</Link>
            <Link to="/videos" className="header__link">VIDEOS</Link>
            <Link to="/contact" className="header__link">CONTACT</Link>
            <button className="header__burger--btn" onClick={toggleMenu}>
              <FaBars className="header__burger-bar" />
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
