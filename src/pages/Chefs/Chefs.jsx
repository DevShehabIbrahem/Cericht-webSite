import React from "react";
import HeaderTitle from "../../shared/headerTitle/HeaderTitle.js";
import Chef from "../../assets/chef.png";
import "../../css/Chefs/Chefs.css";
import quts from "../../assets/quote.png";
import sgin from "../../assets/sign.png";
import { words } from "../../words.js";

const Chefs = () => {
  const {
    chef_title,
    chef_word,
    chef_qute,
    chef_para,
    chef_name,
    chef_postion,
  } = words;
  return (
    <div className="chef_content">
      {/*left Side*/}
      <div className="chef_right">
        <img src={Chef} alt="" />
      </div>

      {/*right Side*/}
      <div className="chef_left">
        <div>
          <HeaderTitle hTitle={chef_title} subTitle={chef_word} />
        </div>
        <div className="chef_para flex items-center gap-5">
          <img src={quts} alt="quts" className="w-[4rem]" />
          <p>{chef_qute}</p>
        </div>
        <p>{chef_para}</p>
        <div className="chef_name flex flex-col gap-3">
          <span>{chef_name}</span>
          <span>{chef_postion}</span>
        </div>
        <img src={sgin} alt="sgin" className="w-[25rem]" />
      </div>
    </div>
  );
};

export default Chefs;
