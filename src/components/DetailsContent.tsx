import React from 'react'
import {useSelector} from "react-redux"
import { StoresInterface } from '../@types/store'
import { displayDate } from '../utils/displayDate'
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
                <h3 className="id color6">#<span className={theme ? "color8" : "white"}>{invoice.id}</span></h3>
                <div className={theme ? "description p1 color7" : "description p1 color5"}>{invoice.description}</div>
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
                  <P05Content>{invoice.createdAt ? displayDate(invoice.createdAt): "xxx"}</P05Content>
                </div>
                <div className="payementDate simpleDisplay">
                  <DetailTitle>Payment Due</DetailTitle>
                  <P05Content>{displayDate(invoice.paymentDue)}</P05Content>
                </div>
              </div>
              <div className="bill">
                <DetailTitle>Bill To</DetailTitle>
                <P05Content>{invoice.clientName}</P05Content>
                <div className={theme ? "clientAddress p2 color7" : "clientAddress p2 color5"}>
                  <p className="p2">{invoice.clientAddress.street}</p>
                  <p className="p2">{invoice.clientAddress.city}</p>
                  <p className="p2">{invoice.clientAddress.postCode}</p>
                  <p className="p2">{invoice.clientAddress.country}</p>
                </div>
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