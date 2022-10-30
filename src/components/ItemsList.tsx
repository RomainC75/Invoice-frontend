import React,{useEffect, useState} from 'react'
import { ItemInterface } from '../@types/invoice'

import './styles/itemsList.css'

interface ItemsListInterface{
    items:ItemInterface[]
}

const ItemsList = ({items}:ItemsListInterface):JSX.Element => {
    
    

  return (
    <div className="ItemsList">
        <div className="Details">
            <div className="name column">
                <div className="title">Item Name</div>
                {items.map(item=><div>{item.name}</div>)}
            </div>
            <div className="quantity column">
                <div className="title">Qty.</div>
                {items.map(item=><div>{item.quantity}</div>)}
            </div>
            <div className="price column">
                <div className="title">Price</div>
                {items.map(item=><div>{item.price.toFixed(2)}</div>)}
            </div>
            <div className="subTotal column">
                <div className="title">Total</div>
                {items.map(item=><div>{(item.price*item.quantity).toFixed(2)}</div>)}
            </div>
        </div>
        <div className="total">
            <p>Amount Due</p>
            {items.reduce((accu,current)=>{
            return accu+current.price*current.quantity
            },0).toFixed(2)}
        </div>

    </div>
  )
}

export default ItemsList