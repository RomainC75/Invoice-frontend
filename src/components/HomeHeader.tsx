import React from "react";
import { useSelector } from "react-redux";
import { StoresInterface } from "../@types/store";
import { InvoiceInterface} from  "../@types/invoice"
import FilterByStatus from "./FilterByStatus";
import {GoPlus} from "react-icons/go"
import './style/homeHeader.css'
import InvoiceList from "./InvoiceList";

interface HomeHeaderInterface{
  invoices:InvoiceInterface[] | null
}

const HomeHeader = (props:HomeHeaderInterface) => {
  const { invoices } = props
  const invoicesNb = invoices ? invoices.length : 0

  return (
    <div className="HomeHeader">
      <div className="left">
        <h1>Invoices</h1>
        <p className="color6">There is {invoicesNb} total invoices</p>
      </div>
      <div className="right">
        <FilterByStatus/>
        <div className="newInvoice colorBg1">
          <div className="plus">
            <GoPlus className="color1"/>
          </div>
          <p>New Invoice</p>
        </div>
      </div>
      <InvoiceList/>
    </div>
  );
};

export default HomeHeader;
