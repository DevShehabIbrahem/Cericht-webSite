import React from "react";
import Button from "../../shared/Button/Button.js";
import findus from "../../assets/findus.png";
import "../../css/FindUs/FindUs.css";
import HeaderTitle from "../../shared/headerTitle/HeaderTitle";
import { words } from "../../words";

const FindUs = () => {
  const { visitUs, finsUs, Contact, find_p, Opening_Hours, Mon, sat } = words;
  return (
    <>
      <div className="FindUs_content">
        {/*right Side*/}
        <div className="FindUs_left">
          <div>
            <HeaderTitle hTitle={finsUs} subTitle={Contact} />
          </div>
          <p>{find_p}</p>
          <span className="Opening">{Opening_Hours}</span>
          <div className="flex flex-col gap-2">
            <span>{Mon}</span>
            <span>{sat}</span>
          </div>
          <Button>{visitUs}</Button>
        </div>

        {/*left Side*/}
        <div className="FindUs_right">
          <img src={findus} alt="laurels" />
        </div>
      </div>
    </>
  );
};

export default FindUs;
