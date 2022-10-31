import React from 'react'
import {useSelector} from "react-redux"
import { StoresInterface } from '../@types/store'
import DetailTitle from './DetailTitle'
import ItemsList from './ItemsList'
import P05Content from './P05Content'

import './styles/detailsContent.css'

const DetailsContent = () => {
    const {invoice} = useSelector((state:StoresInterface)=>state.invoices)
    const {theme} = useSelector((state:StoresInterface)=>state.auth)

    const total = invoice?.items.reduce((accu,current)=>{
        return accu+current.price
    },0)

  if(invoice){
    return (
      <div className={ theme ? "DetailsContent colorBgWhite" : "DetailsContent colorBg3" }>
          <div className="top">
              <div className="idDescription">
                <h3 className="id"><span className="sharp">#</span>{invoice.id}</h3>
                <div className="description p1">{invoice.description}</div>
              </div>
              <div className={theme ? "senderAddress p2 color7" : "senderAddress p2 color5"}>
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postCode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
          </div>
          <div className="middle">
            <div className="div left">
              <div className="dates">
                <div className="invoiceDate simpleDisplay">
                  <DetailTitle>Invoice Date</DetailTitle>
                  <P05Content>{invoice.createdAt}</P05Content>
                </div>
                <div className="payementDate simpleDisplay">
                  <DetailTitle>Payment Due</DetailTitle>
                  <P05Content>{invoice.paymentDue}</P05Content>
                </div>
              </div>
              <div className="bill">
                <DetailTitle>Bill To</DetailTitle>
                <P05Content>{invoice.clientName}</P05Content>
              </div>
            </div>
            <div className="sent simpleDisplay">
              <div>
                <DetailTitle>Sent to</DetailTitle>
                <P05Content>{invoice.clientEmail}</P05Content>
              </div>
            </div>
          </div>
          <ItemsList items={invoice.items}/>
      </div>
    )
  }else{
    return(
      <div>Empty</div>
    )
  }
  
}

export default DetailsContent