import React from "react";
import "../../css/Menu/LeftSide.css";

import { MenuData } from "../../Data/MenuData";
import { words } from "../../words";

const LeftSide = () => {
  const { Menu_l } = words;
  return (
    <div className="wrraper">
      <h1 className="mb-4">{Menu_l}</h1>

      <ul className="flex flex-col gap-8">
        {MenuData.map(({ title, dec, price }) => (
          <>
            <li className="flex flex-col">
              <div className="flex justify-between">
                <h4>{title}</h4>
                <div className="price">
                  <div />
                  <span> {price}</span>
                </div>
              </div>
              <span className="menu__dec">{dec}</span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
