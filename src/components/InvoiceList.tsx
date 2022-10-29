import React from 'react'
import { useSelector } from 'react-redux'
import { InvoiceInterface } from '../@types/invoice'
import { StoresInterface } from '../@types/store'

const InvoiceList = () => {

    const {invoices} = useSelector((state:StoresInterface)=>state.invoices)
  return (
    <div className="InvoiceList">
        {invoices && invoices.map((invoice, i)=> <div key={i}>{invoice.paymentDue}</div>)}
    </div>
  )
}

export default InvoiceList