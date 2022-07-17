import React from "react";
import { MenuData } from "../../Data/MenuData";
import { words } from "../../words";
import "../../css/Menu/LeftSide.css";

const Right = () => {
  const { Menu_r } = words;
  return (
    <div className="wrraper">
      <h1 className="mb-4">{Menu_r}</h1>

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

export default Right;
