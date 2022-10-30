import React from "react";
import { InvoiceInterface} from  "../@types/invoice"
import FilterByStatus from "./FilterByStatus";
import Button from "./Button"

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
        <Button type={0} cross>New Invoice</Button>
      </div> 
    </div>
  );
};

export default HomeHeader;
