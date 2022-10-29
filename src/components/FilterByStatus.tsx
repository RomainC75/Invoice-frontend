import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/hooks";
import { GoChevronDown } from "react-icons/go";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { updateFilterByStatus } from "../slice/invoices.slice";


import { StoresInterface } from "../@types/store";

import './style/filterByStatus.css'

const FilterByStatus = () => {
  const dispatch = useAppDispatch()
  const {filterByStatus} = useSelector((state:StoresInterface)=>state.invoices)
    const [visibility, setVisibility] = useState<boolean>(false);
    

  const handleStatus = (e:React.ChangeEvent<HTMLInputElement>, checked:boolean) =>{
    dispatch(updateFilterByStatus({name:e.target.name,checked}))
  }

  const toggleVisibility = ()=>{
    setVisibility(!visibility)
  }

  return (
    <div className="FilterByStatus">
      <div className="text" onClick={()=>toggleVisibility()}>
        <p>Filter by status</p>
        <div className="color1">
          <GoChevronDown className={visibility ? " chevron rotate" : "chevron"}/>
        </div>
      </div>
      <div className={visibility ? "dropDown visible" : "dropDown"}>
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
