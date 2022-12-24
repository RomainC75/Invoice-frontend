import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InvoiceInterface } from "../@types/invoice";
import { StoresInterface } from "../@types/store";
import Button1 from "./Button1";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { fetchAllInvoices, postInvoice, updateInvoice } from "../slice/invoices.slice";
import "./styles/edit.css";
import TextInput from "./TextInput";
import SelectComp from "./SelectComp";
import EditItems from "./EditItems";
import {useAppDispatch} from '../store/hooks'
import {empty_invoice} from "../utils/empty"

interface EditInterface {
  display: boolean;
  toggleDisplay: () => void;
  newInvoice?:boolean
}

const Edit = ({ display, toggleDisplay, newInvoice=false }: EditInterface) => {
  const { invoice } = useSelector((state: StoresInterface) => state.invoices);
  const { token } = useSelector((state: StoresInterface) => state.auth);
  const dispatch = useAppDispatch()
  const [invoiceState, setInvoiceState] = useState<InvoiceInterface | null>(
    null
  );
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  useEffect(() => {
    console.log("paymentDue : ", invoice?.paymentDue)
    if(!newInvoice){
      setInvoiceState(invoice);
      setValue(dayjs(invoice?.paymentDue + "T12:00:00"));
    }else {
      setInvoiceState(empty_invoice)
      setValue(dayjs(empty_invoice?.paymentDue + "T12:00:00"));
    }
  }, [invoice]);
  
  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleSaveChanges = () =>{
    if(!invoiceState || !token){
      return
    }
    if(!newInvoice){
      dispatch(updateInvoice({
        newInvoice: invoiceState, 
        token}))
    }else{
      dispatch(postInvoice({invoice:invoiceState, token}))
    }
  }

  

  const handleChange = (
    el: React.ChangeEvent<HTMLInputElement>,
    category?: keyof InvoiceInterface
  ) => {
    console.log(el.target.name,el.target.value)
    if (
      invoiceState &&
      category &&
      category in invoiceState &&
      invoiceState[category] instanceof Object
    ) {
      setInvoiceState({
        ...invoiceState,
        [category]: {
          ...(invoiceState[category] as object),
          [el.target.name]: el.target.value,
        },
      });
    } else if (invoiceState) {
      setInvoiceState({
        ...invoiceState,
        [el.target.name]: el.target.value,
      });
    }
    console.log(el.target.name, el.target.value);
    console.log(invoiceState);
  };

  if (!invoiceState) {
    return <div></div>;
  } else {
    return (
      <div className={display ? "Edit" : "Edit hide"}>
        <p>EDIT #{invoiceState.id}</p>
        <div className="bill">
          <div className="sectionTitle color1">Bill From</div>
          <TextInput
            value={invoiceState?.senderAddress.street}
            onChange={(el) => handleChange(el, "senderAddress")}
            name="street"
          >
            Street Address
          </TextInput>
          <div className="flex">
            <TextInput
              value={invoiceState?.senderAddress.city}
              onChange={(el) => handleChange(el, "senderAddress")}
              name="city"
            >
              City
            </TextInput>
            <TextInput
              value={invoiceState?.senderAddress.postCode}
              onChange={(el) => handleChange(el, "senderAddress")}
              name="postCode"
            >
              Post Code
            </TextInput>
            <TextInput
              value={invoiceState?.senderAddress.country}
              onChange={(el) => handleChange(el, "senderAddress")}
              name="country"
            >
              Country
            </TextInput>
          </div>
        </div>

        <div className="bill">
          <div className="sectionTitle color1">Bill To</div>
          <TextInput
            value={invoiceState?.clientName}
            onChange={(el) => handleChange(el)}
            name="clientName"
          >
            Street Address
          </TextInput>
          <TextInput
            value={invoiceState?.clientEmail}
            onChange={(el) => handleChange(el)}
            name="clientEmail"
          >
            Street Email
          </TextInput>

          <div className="flex">
            <TextInput
              value={invoiceState?.clientAddress.city}
              onChange={(el) => handleChange(el, "clientAddress")}
              name="city"
            >
              City
            </TextInput>
            <TextInput
              value={invoiceState?.clientAddress.postCode}
              onChange={(el) => handleChange(el, "clientAddress")}
              name="postCode"
            >
              Post Code
            </TextInput>
            <TextInput
              value={invoiceState?.clientAddress.country}
              onChange={(el) => handleChange(el, "clientAddress")}
              name="country"
            >
              Country
            </TextInput>
          </div>
        </div>
        <div className="flex">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="DD MM YYYY"
              value={value}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
              className=""
            />
          </LocalizationProvider>

          <SelectComp
            onChange={(el: SelectChangeEvent<string>) =>
              invoiceState &&
              setInvoiceState({
                ...invoiceState,
                [el.target.name as keyof InvoiceInterface]: el.target.value,
              })
            }
            value={invoiceState?.paymentTerms ? invoiceState.paymentTerms : 1}
          />
        </div>
        <TextInput
          value={invoiceState?.description}
          onChange={(el) => handleChange(el)}
          name="description"
        >
          Street Email
        </TextInput>

        <EditItems invoiceState={invoiceState} setInvoiceState={setInvoiceState} />

        <div className="buttonsLine">
          <Button1 onClick={() => toggleDisplay()}>Cancel</Button1>
          <Button1 onClick={()=> handleSaveChanges()}>{newInvoice ? "Save & S end" : "Save Changes"}</Button1>
        </div>
        {/* <EditButtons toogleDisplay={toggleDisplay} handleSaveChanges={handleSaveChanges}/> */}
      </div>
    );
  }
};

export default Edit;
