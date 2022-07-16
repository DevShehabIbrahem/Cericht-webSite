import React from "react";
import { words } from "../../words";
import welcome from "../../assets/welcome.png";
import sppon from "../../assets/spoon.svg";
import "../../css/HeaderContent/HeaderContant.css";

const HeaderContent = () => {
  const { wordss, buuton, dec, title } = words.headerContant;
  return (
    <div className="header_content flex items-center p-[4rem] gap-[8rem]">
      {/*left Side*/}
      <div className="header_left flex flex-col gap-5">
        <div className=" header_bold flex flex-col gap-1">
          <span className="text-[1.1rem]">{wordss}</span>
          <img src={sppon} alt="" className="w-[2.5rem]" />
        </div>

        <h1>{title}</h1>
        <span>{dec}</span>
        <button className="custom__button">{buuton}</button>
      </div>

      {/*right Side*/}
      <div className="header_right">
        <div className=" lg:w-[35rem]">
          <img src={welcome} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
