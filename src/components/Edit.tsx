import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InvoiceInterface } from "../@types/invoice";
import { StoresInterface } from "../@types/store";
import Button1 from "./Button1";

import "./styles/edit.css";
import TextInput from "./TextInput";

interface EditInterface {
  display: boolean;
  toggleDisplay: () => void;
}

const Edit = ({ display, toggleDisplay }: EditInterface) => {
  const { invoice } = useSelector((state: StoresInterface) => state.invoices);
  const [invoiceState, setInvoiceState] = useState<InvoiceInterface | null>(null);

  useEffect(()=>{
    setInvoiceState(invoice)
  },[invoice])

  if (!invoice) {
    return <div></div>;
  }

  const handleChange = (
    el: React.ChangeEvent<HTMLInputElement>,
    category?: string
  ) => {
    if (category && invoiceState && category in invoiceState) {
      setInvoiceState({
        ...invoiceState,
        [category]: {
          [el.target.name]: el.target.value
        },
      });
    }else if(invoiceState ){
        setInvoiceState({
            ...invoiceState,
            [el.target.name]:el.target.value
          });
    }
    console.log(el.target.name, el.target.value);
    console.log(invoiceState);
  };

  return (
    <div className={display ? "Edit" : "Edit hide"}>
      <p>EDIT #{invoice.id}</p>
      <div className="bill">
        <div className="sectionTitle">Bill From</div>
        <TextInput
          value={invoiceState?.senderAddress.street}
          onChange={(el) => handleChange(el, "senderAddress")}
          name="street"
        >
          Street Address
        </TextInput>
        <div className="flex">
          <TextInput>City</TextInput>
          <TextInput>Post Code</TextInput>
          <TextInput>Country</TextInput>
        </div>
        
      </div>

      <div className="bill">
        <div className="sectionTitle">Bill To</div>
        <TextInput
          value={invoiceState?.clientName}
          onChange={(el) => handleChange(el)}
          name="clientName"
        >
          Street Address
        </TextInput>
        
        
      </div>





      <div className="buttonsLine">
        <Button1 onClick={() => toggleDisplay()}>Cancel</Button1>
        <Button1>Save Changes</Button1>
      </div>
    </div>
  );
};

export default Edit;
