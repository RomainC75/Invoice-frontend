import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import { ButtonInterface, textChildrenProps } from "../@types/children";
import { StoresInterface } from "../@types/store";

import "./styles/button.css";

interface ButtonValuesInterface{
  background:string[],
  color:string,
}

const buttonTypes: ButtonValuesInterface[]=[
  {
    "background":["colorBg1","colorBg2"],
    "color":"white"
  },
  {
    "background":["colorBg9","colorBg15"],
    "color":"white"
  },
  {
    "background":["colorBg13","colorBg5"],
    "color":"color7"
  }
]

const Button1 = ({children, type=0, cross, onClick}:ButtonInterface):JSX.Element => {
    const {theme} = useSelector((state:StoresInterface)=>state.auth)
  const def = `Button ${buttonTypes[type]["background"][theme ? 0 : 1]} ${buttonTypes[type]["color"]}`
  const [classState, setClassState] = useState<string>(def);

  return (
    <div 
      className={classState}
      onMouseEnter={() => setClassState(`Button ${buttonTypes[type]["background"][1]} ${buttonTypes[type]["color"]}`)}
      onMouseLeave={() => setClassState(`Button ${buttonTypes[type]["background"][0]} ${buttonTypes[type]["color"]}`)}
      onClick={onClick}
    >
      {cross && <div className="plus">
        <GoPlus className="color1" />
      </div>}
      <p>{children}</p>
    </div>
  );
};

export default Button1;
