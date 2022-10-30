import React from 'react'
import { useSelector } from 'react-redux'
import { InvoiceInterface } from '../@types/invoice'
import { StoresInterface } from '../@types/store'
import InvoiceListElement from './InvoiceListElement'

const InvoiceList = ():JSX.Element => {
  const {invoices} = useSelector((state:StoresInterface)=>state.invoices)

  return (
    <div className="InvoiceList">
        <ul>
          {invoices && invoices.map((invoice, i)=> <InvoiceListElement key={i} invoice={invoice}/>)}
        </ul>
    </div>
  )
}

export default InvoiceList