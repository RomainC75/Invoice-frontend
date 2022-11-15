import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'
import { useNavigate } from 'react-router-dom'
import StatusInfo from './StatusInfo'
import Button1 from './Button1'
import './styles/detailsHeader.css'
import { useAppDispatch } from "../store/hooks";
import {  deleteInvoice, updateInvoice } from "../slice/invoices.slice"

const DetailsHeader = ({toggleDisplay}:{toggleDisplay:()=>void}) => {
    const {invoice} = useSelector( (state:StoresInterface)=>state.invoices )
    const {theme, token} = useSelector( (state:StoresInterface)=>state.auth )
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

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

    useEffect(()=>{
      if(!invoice){
        navigate("/")
      }
    },[invoice])

  return (
    <div className={ theme ? "DetailsHeader colorBgWhite" : "DetailsHeader colorBg3" }>
        <div className="left">
            <p className={theme ? "color7" : "color5"}>Status</p>
            { invoice && invoice.status && <StatusInfo status={invoice.status}/>}
        </div>
        <div className="right">
            <Button1 type={0} onClick={()=>toggleDisplay()}>Edit</Button1>
            <Button1 type={1} onClick={()=>handleDelete()}>Delete</Button1>
            <Button1 type={0} onClick={()=>handleMarkAsPaid()}>Mark as Paid</Button1>
        </div>
    </div>
  )
}

export default DetailsHeader