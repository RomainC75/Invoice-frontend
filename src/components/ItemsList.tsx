import React,{useEffect, useState} from 'react'
import { ItemInterface } from '../@types/invoice'
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'

import './styles/itemsList.css'

interface ItemsListInterface{
    items:ItemInterface[]
}

const ItemsList = ({items}:ItemsListInterface):JSX.Element => {
    const {theme} = useSelector((state:StoresInterface)=>state.auth)

  return (
    <div className="ItemsList">
        <div className={theme ? "details colorBg13" : "details colorBg4"}>
            <div className="name column">
                <div className={theme ? "title p2 color7" : "title p2 color5"}>Item Name</div>
                {items.map((item,i)=><div key={`$item.name}-${i}`} className={theme ? "p1 black":"p1 white"}>{item.name}</div>)}
            </div>
            <div className="quantity column">
                <div className={theme ? "title p2 color7" : "title p2 color5"}>Qty.</div>
                {items.map((item,i)=><div key={`$item.name}-${i}`} className={theme ? "p1 color7":"p1 color5"}>{item.quantity}</div>)}
            </div>
            <div className="price column">
                <div className={theme ? "title p2 color7" : "title p2 color5"}>Price</div>
                {items.map((item,i)=><div key={`$item.name}-${i}`} className={theme ? "p1 color7":"p1 color5"}>€ {item.price.toFixed(2)}</div>)}
            </div>
            <div className="subTotal column">
                <div className={theme ? "title p2 color7" : "title p2 color5"}>Total</div>
                {items.map((item,i)=><div key={`$item.name}-${i}`} className={theme ? "p1 black":"p1 white"}>€ {(item.price*item.quantity).toFixed(2)}</div>)}
            </div>
        </div>
        <div className={theme ? "total colorBg14" : "total colorBg8"}>
            <p className="p2">Amount Due</p>
            <p className="totalNumber">€ {items.reduce((accu,current)=>{
            return accu+current.price*current.quantity
            },0).toFixed(2)}</p>
        </div>
    </div>
  )
}

export default ItemsList