import React from "react";
import { useSelector } from "react-redux";
import { InvoiceInterface } from "../@types/invoice";
import { StoresInterface } from "../@types/store";
import StatusInfo from "./StatusInfo";
import { GoChevronRight } from "react-icons/go";
import "./styles/invoiceListElement.css";
import { Link } from "react-router-dom";

interface InvoiceListElementInterface {
  invoice: InvoiceInterface;
}

const InvoiceListElement = ({invoice}:InvoiceListElementInterface):JSX.Element => {
    const {theme} = useSelector((state:StoresInterface)=>state.auth)
  return (
    <Link to={`/invoice/${invoice.id}`}>
        <li className={theme ? "InvoiceListElement colorBgWhite wide" : "InvoiceListElement colorBg3 wide"}> 
            <div className="sub">
              <div className={theme ? "id black" : "id white"}><span className="sharp color7">#</span>{invoice.id}</div>
              <p className={theme ? "dueDate color7": "dueDate color5"}>Due {invoice.paymentDue}</p>
              <div className={theme ? "name color7" : "name white"}>{invoice.clientName}</div>
              <p className={theme ? "total black" : "total white"}>€ 1800.43</p>
            </div>    
            <StatusInfo status={invoice.status}/>
            <GoChevronRight className="chevron color1"/>
        </li>

        <li className={theme ? "InvoiceListElement colorBgWhite smartphone" : "InvoiceListElement colorBg3 smartphone"}> 
            <div className="sub">
              <div className="sub__top">
                <div className={theme ? "id black" : "id white"}><span className="sharp color7">#</span>{invoice.id}</div>
                <div className={theme ? "name color7" : "name white"}>{invoice.clientName}</div>
              </div>
              <div className="sub__bottom">
                <div className="left">
                  <p className={theme ? "dueDate color7": "dueDate color5"}>Due {invoice.paymentDue}</p>
                  <p className={theme ? "total black" : "total white"}>€ 1800.43</p>
                </div>
                <StatusInfo status={invoice.status}/>

              </div>
            </div>    
            
        </li>
    </Link>
    
  );
};
                  
export default InvoiceListElement;
