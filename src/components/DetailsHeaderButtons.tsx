import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'
import { useNavigate } from 'react-router-dom'
import Button1 from './Button1'
import { useAppDispatch } from "../store/hooks";
import {  deleteInvoice, updateInvoice } from "../slice/invoices.slice"

import "./styles/detailsHeaderButtons.css"

export const DetailsHeaderButtons = ({toggleDisplay, isForSmartphone}:{toggleDisplay:()=>void, isForSmartphone?:boolean}) => {
    const {invoice} = useSelector( (state:StoresInterface)=>state.invoices )
    const {token} = useSelector( (state:StoresInterface)=>state.auth )
    const dispatch = useAppDispatch()

    const handleDelete = () =>{
        if(invoice && invoice.id && token){
          dispatch(deleteInvoice({id:invoice.id, token}))
        }
      }
  
      const handleMarkAsPaid = () =>{
        if(invoice && token){
          const buff = {...invoice }
          buff.status="paid"
          dispatch(updateInvoice({newInvoice: buff, token:token}))
        }
      }

  return (
    <div className={isForSmartphone ? "DetailsHeaderButtons smartphone" : "DetailsHeaderButtons wide"}>
            <Button1 type={0} onClick={()=>toggleDisplay()}>Edit</Button1>
            <Button1 type={1} onClick={()=>handleDelete()}>Delete</Button1>
            <Button1 type={0} onClick={()=>handleMarkAsPaid()}>Mark as Paid</Button1>
        </div>
  )
}
