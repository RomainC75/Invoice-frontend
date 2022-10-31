import React from "react";
import { InvoiceInterface} from  "../@types/invoice"
import FilterByStatus from "./FilterByStatus";
import Button1 from "./Button1"

import './styles/homeHeader.css'

interface HomeHeaderInterface{
  invoices:InvoiceInterface[] | null
}

const HomeHeader = ({invoices}:HomeHeaderInterface):JSX.Element => {
  const invoicesNb = invoices ? invoices.length : 0

  return (
    <div className="HomeHeader">
      <div className="left">
        <h1>Invoices</h1>
        <p className="color6">There is {invoicesNb} total invoices</p>
      </div>
      <div className="right">
        <FilterByStatus/>
        <Button1 type={0} cross>New Invoice</Button1>
      </div> 
    </div>
  );
};

export default HomeHeader;
