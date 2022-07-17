import React from "react";
import { words } from "../../words";
import logo from "../../assets/gericht.png";
import sppon from "../../assets/spoon.svg";

import "../../css/Footer/Footer.css";

const Footer = () => {
  const {
    Contact_Us,
    address,
    num,
    logodec,
    Working,
    day,
    clock,
    day2,
    clock2,
    copyRight,
  } = words.Footer;

  return (
    <div className="Footer text-center my-[9rem]">
      <div className="Footer__content flex items-center justify-center gap-[6rem]">
        <div className="flex flex-col">
          <h1>{Contact_Us}</h1>
          <span>{address}</span>
          <span>{num}</span>
          <span>{num}</span>
        </div>
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="w-[13rem] m-auto" />
          <p>{logodec}</p>
          <img src={sppon} alt="sppon" className="w-[3rem] m-auto" />
        </div>
        <div className="flex flex-col">
          <h1>{Working}</h1>
          <div className="flex flex-col">
            <span>{day}</span>
            <span>{clock}</span>
          </div>
          <div className="flex flex-col">
            <span>{day2}</span>
            <span>{clock2}</span>
          </div>
        </div>
      </div>
      <span className="copyRight">{copyRight}</span>
    </div>
  );
};

export default Footer;
