import React, {useState, useEffect} from "react";
import { InvoiceInterface} from  "../@types/invoice"
import FilterByStatus from "./FilterByStatus";
import Button1 from "./Button1"
import Edit from "./Edit";
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'

import './styles/homeHeader.css'

interface HomeHeaderInterface{
  invoices:InvoiceInterface[] | null
}


const HomeHeader = ({invoices}:HomeHeaderInterface):JSX.Element => {
  const {theme} = useSelector( (state:StoresInterface)=>state.auth )
  const invoicesNb = invoices ? invoices.length : 0
  const [displayEdit, setDisplayEdit] = useState(false)
  const [widthState, setWidthState] = useState<number | null>(null)

  const toggleDisplay = () =>{
    console.log("TOOGLE")
    setDisplayEdit(!displayEdit)
  }

  useEffect(() => {
    setWidthState(window.innerWidth)
  }, [])
  

  window.addEventListener('resize',()=>{
    setWidthState(window.innerWidth)
  })
  
  return (
    <div className="HomeHeader">
      <Edit display={displayEdit} toggleDisplay={toggleDisplay} newInvoice/>
      <div className="left">
        <h1 className={theme ? "black" : "white"}>Invoices</h1>
        <p className="color6 wide">There is {invoicesNb} total invoices</p>
        <p className="color6 small">{invoicesNb} invoices</p>
      </div>
      <div className="right">
        <FilterByStatus/>
        <Button1 type={0} cross onClick={()=>setDisplayEdit(true)}>{widthState && widthState > 500 ? "New Invoice" : "New"}</Button1>
      </div> 
    </div>
  );
};

export default HomeHeader;
