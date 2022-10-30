import React from 'react'
import {useSelector} from "react-redux"
import { StoresInterface } from '../@types/store'
import ItemsList from './ItemsList'

const DetailsContent = () => {
    const {invoice} = useSelector((state:StoresInterface)=>state.invoices)
    const total = invoice?.items.reduce((accu,current)=>{
        return accu+current.price
    },0)

  return (
    <div className="DetailsContent">
        <div className="top">
            <div className="id"></div>
            <div className="senderAddress"></div>
        </div>
        <ItemsList items={invoice ? invoice.items : []}/>  
    </div>


  )
}

export default DetailsContent