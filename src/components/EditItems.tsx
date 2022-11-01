import React, { useEffect } from "react";
import { InvoiceInterface, ItemInterface } from "../@types/invoice";
import TextInput from "./TextInput"

import "./styles/editItems.css"

interface EditItemsInterface {
  invoiceState:InvoiceInterface
  setInvoiceState:(state:InvoiceInterface)=>void
}

const EditItems = ({ invoiceState, setInvoiceState }: EditItemsInterface) => {
  useEffect(() => {
    console.log("inside EditItems", invoiceState.items);
  }, []);

  const handleItemChanges = (el:React.ChangeEvent<HTMLInputElement>,i:number,category:keyof ItemInterface) =>{
    console.log(el,i,category)
    let val:any=0
    const value=el.target.value
    switch(category){
        case"name":
            val=value
            break
        case "quantity":
            val=value==="" ? parseInt(value) : 0
            break
        case "price":
            val=value==="" ? parseFloat(value) : 0
            break
    }
    setInvoiceState({
        ...invoiceState,
        items:invoiceState.items.map((item,index)=>{
            return i!==index ? item : {
                ...item,
                [category]:category==="name" ? el.target.value : parseInt(el.target.value)
            }
        })
    })
  }

  return (
    <div className="EditItems">

      <div className="col name">
        <div className="title">Item Name</div>
        <ul className="name">
          {invoiceState.items.map((item, i) => (
            <TextInput key={`name-${item.id}`} value={item.name} onChange={(el)=>handleItemChanges(el,i,"name")}></TextInput>
          ))}
        </ul>
      </div>

      <div className="col quantity">
        <div className="title">Qty.</div>
        <ul className="name">
          {invoiceState.items.map((item, i) => (
            <TextInput key={`quantity-${item.id}`} value={item.quantity.toString()} onChange={(el)=>handleItemChanges(el,i,"quantity")}></TextInput>
          ))}
        </ul>
      </div>

      <div className="col price">
        <div className="title">Price</div>
        <ul className="name">
          {invoiceState.items.map((item, i) => (
            <TextInput key={`price-${item.id}`} value={item.price.toString()} onChange={(el)=>handleItemChanges(el,i,"price")}></TextInput>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default EditItems;
