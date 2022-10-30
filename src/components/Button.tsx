import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import { ButtonInterface, textChildrenProps } from "../@types/children";
import { StoresInterface } from "../@types/store";

import "./styles/button.css";

const buttonTypes=[
  {
    "normal":["colorBg1","colorBg1"],
    "hover":["colorBg2","colorBg2"],
    "color":["white","white"]
  },
  {
    "normal":["colorBg1","colorBg1"],
    "hover":["colorBg2","colorBg2"],
    "color":["white","white"]
  },
]


const Button = ({children, type}:ButtonInterface):JSX.Element => {
    const {theme} = useSelector((state:StoresInterface)=>state.auth)
  const def = `Button ${buttonTypes[type]["normal"][theme ? 0 : 1]}`;
  const [classState, setClassState] = useState<string>(def);

  return (
    <div
      className={classState}
      onMouseEnter={() => setClassState(`Button ${buttonTypes[type]["hover"][theme ? 0 : 1]} ${buttonTypes[type].color[theme ? 0 : 1]}`)}
      onMouseLeave={() => setClassState(`Button ${buttonTypes[type]["normal"][theme ? 0 : 1]} ${buttonTypes[type].color[theme ? 0 : 1]}`)}
    >
      <div className="plus">
        <GoPlus className="color1" />
      </div>
      <p>{children}</p>
    </div>
  );
};

export default Button;
