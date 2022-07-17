import { useState } from "react";
import "../../css/Header/Header.css";
import logo from "../../assets/gericht.png";
import { words } from "../../words";
import { NavLink } from "react-router-dom";
import { isActiveStyle, isNotActiveStyle } from "../../shared/ActiveStyle";
import MobileMenu from "../../Components/mobileMenu/MobileMenu";

const Header = () => {
  const [show, setShow] = useState(false);
  const { Home, About, Awords, Contact, Menue } = words.Navbar;
  const { login } = words;

  return (
    <nav className="Navbar flex items-center justify-between pt-[1rem] px-[2rem]">
      <div className=" w-[11rem] cursor-pointer">
        <img src={logo} alt="logo" />
      </div>

      <div className="hidden  md:flex  items-center text-[1.2rem]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          {Home}
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          {About}
        </NavLink>
        <NavLink
          to="/Awords"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          {Awords}
        </NavLink>
        <NavLink
          to="/Menue"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          {Menue}
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          {Contact}
        </NavLink>
      </div>
      {/*menuMobile*/}
      <MobileMenu show={show} />
      <div className=" hidden  md:flex text-[1.2rem] hover:text-[#DCCA87] transition-all duration-200 ease-in-out cursor-pointer">
        {login}
      </div>
    </nav>
  );
};

export default Header;
