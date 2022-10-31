import React from "react";
import { useSelector } from "react-redux";
import { StoresInterface } from "../@types/store";
import Button1 from "./Button1";

import "./styles/edit.css";

interface EditInterface {
  display: boolean;
  toggleDisplay: ()=>void;
}

const Edit = ({ display, toggleDisplay }: EditInterface) => {
  const { invoice } = useSelector((state: StoresInterface) => state.invoices);

  if (!invoice) {
    return <div></div>;
  }
  return (
    <div className={display ? "Edit" : "Edit hide"}>
      <p>EDIT #{invoice.id}</p>

      <div className="buttonsLine">
        <Button1 onClick={ ()=>toggleDisplay() }>Cancel</Button1>
        <Button1>Save Changes</Button1>

      </div>
    </div>
    
  );
};

export default Edit;
