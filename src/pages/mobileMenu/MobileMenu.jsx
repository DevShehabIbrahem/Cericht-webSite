import React from "react";
import "../../css/mobileMenu/MobileMenu.css";

import { Link } from "react-scroll";
import { words } from "../../words";
const MobileMenu = ({ show, setShow }) => {
  const { Home, About, Awords, Contact, Menue } = words.Navbar;

  return (
    <ul className={show ? "showMenu" : "hideMenu"}>
      <span
        className="close cursor-pointer text-right mr-8 mt-2 border ml-auto p-3 rounded-[100px] leading-3"
        onClick={() => setShow(false)}
      >
        X
      </span>
      <li>
        <Link to="Home" spy={true} smooth={true}>
          {Home}
        </Link>
      </li>
      <li>
        <Link to="About" spy={true} smooth={true}>
          {About}
        </Link>
      </li>
      <li>
        <Link to="Awards" spy={true} smooth={true}>
          {Awords}
        </Link>
      </li>
      <li>
        <Link to="menu" spy={true} smooth={true}>
          {Menue}
        </Link>
      </li>
      <li>
        <Link to="Contact" spy={true} smooth={true}>
          {Contact}
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
