import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/hooks";
import { GoChevronDown } from "react-icons/go";
import Checkbox from '@mui/material/Checkbox';
import { updateFilterByStatus } from "../slice/invoices.slice";

import { StoresInterface } from "../@types/store";

import './styles/filterByStatus.css'

const FilterByStatus = ():JSX.Element => {
  const dispatch = useAppDispatch()
  const {filterByStatus} = useSelector((state:StoresInterface)=>state.invoices)
  const {theme} = useSelector((state:StoresInterface)=>state.auth)
    const [visibility, setVisibility] = useState<boolean>(false);
    const [dropDownClassState, setDropDownClassState] = useState("dropDown") 

  const handleStatus = (e:React.ChangeEvent<HTMLInputElement>, checked:boolean) =>{
    dispatch(updateFilterByStatus({name:e.target.name,checked}))
  }

  const toggleVisibility = ()=>{
    setVisibility(!visibility)
  }

  useEffect(()=>{
    const visiClass = visibility ? "visible" : ""
    const themeClass = theme ? "black colorBgWhite shadowWhite " : "white colorBg3 shadowBlack "
    setDropDownClassState("dropDown "+themeClass+visiClass)
  },[visibility, theme])

  return (
    <div className="FilterByStatus">
      <div className="text" onClick={()=>toggleVisibility()}>
        <p className={theme ? "black" : "white"}>Filter by status</p>
        <div className="color1">
          <GoChevronDown className={visibility ? " chevron rotate" : "chevron"}/>
        </div>
      </div>
      <div className={dropDownClassState}>
      
        <div>
            <Checkbox onChange={(e, checked)=>handleStatus(e,checked)} name="draft" id="draft" checked={filterByStatus.includes("draft")}/>
            <label htmlFor="draft">Draft</label>
        </div>
        <div>
            <Checkbox onChange={(e, checked)=>handleStatus(e,checked)} name="pending" id="pending" checked={filterByStatus.includes("pending")}/>
            <label htmlFor="pending">Pending</label>
        </div>
        <div>
            <Checkbox onChange={(e, checked)=>handleStatus(e,checked)} name="paid" id="paid"checked={filterByStatus.includes("paid")}/>
            <label htmlFor="paid">Paid</label>
        </div>
      </div>
    </div>
  );
};

export default FilterByStatus;
