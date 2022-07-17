import React from "react";
import { words } from "../../words";

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
    <div className="Footer my-[9rem]">
      <div className="Footer__content flex items-center justify-center gap-[12rem]">
        <div className="flex flex-col">
          <h1>{Contact_Us}</h1>
          <span>{address}</span>
          <span>{num}</span>
          <span>{num}</span>
        </div>
        <div className="flex flex-col">
          <img src="" alt="" />
          <p>{logodec}</p>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col">
          <h1>{Working}</h1>
          <div>
            <span>{day}</span>
            <span>{clock}</span>
          </div>
          <div className="flex flex-col">
            <span>{day2}</span>
            <span>{clock2}</span>
          </div>
        </div>
      </div>
      <span>{copyRight}</span>
    </div>
  );
};

export default Footer;
