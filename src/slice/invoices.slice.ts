import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { InvoiceSliceInterface } from "../@types/slice";
import axios from "axios";

import { api_url } from "../utils/environnment";
import { InvoiceInterface, InvoiceToUpdateInterface } from "../@types/invoice";

export const fetchSingleInvoice = createAsyncThunk(
  "invoice/fetchSingleInvoice",
  async ({id, token}:{id:string, token:string}) => {
    return axios.get(`${api_url}/invoice/${id}`,{
      headers:{
        'Authorization' : `Bearer ${token}`,
      }
    }).then((ans) => {
      return ans.data;
    });
  }
);

export const fetchAllInvoices = createAsyncThunk(
  "invoice/fetchAllInvoices",
  async (token:string)=>{
    console.log(" pre axios token : ",token)
    return axios.get(`${api_url}/invoice/`,{
      headers:{
        'Authorization' : `Bearer ${token}`,
      }
    }).then((ans)=>{
      
      return ans.data
    })
  }
)

// id : number ? => axios
export const deleteInvoice = createAsyncThunk(
  "invoice/deleteInvoice",
  async ({id, token}:{id:number, token:string})=>{
    return axios.delete(`${api_url}/invoice/${id}`,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
  }
)

export const updateInvoice = createAsyncThunk(
  "invoice/updatePost",
  async ({newInvoice, token}: {newInvoice:InvoiceInterface, token:string})=>{
    const buff:InvoiceToUpdateInterface = newInvoice
    const id = buff['id']
    delete buff['id']
    delete buff['user_id']
    delete buff['createdAt']
    console.log("inside", buff)
    buff.clientAddress={
      name:buff.clientAddress.name,
      street:buff.clientAddress.street,
      city:buff.clientAddress.city,
      postCode:buff.clientAddress.postCode,
      country: buff.clientAddress.country,
      invoices: buff.clientAddress.invoices
    }
    buff.senderAddress={
      name:buff.senderAddress.name,
      street:buff.senderAddress.street,
      city:buff.senderAddress.city,
      postCode:buff.senderAddress.postCode,
      country: buff.senderAddress.country,
      invoices: buff.senderAddress.invoices
    }
    console.log("buff : ",buff)
    return axios.put(`${api_url}/invoice/${id}`,
      buff,
      {
        headers:{
          'Authorization': `Bearer ${token}`
        }
      }).then((ans)=>{
        console.log(" data from the update return : ", ans.data)
        return ans.data
      }
    )
  }
)

const initialState: InvoiceSliceInterface = {
  invoices: null,
  secret: 0,
  val: 0,
  invoice: null,
  loading: false,
  error: null,
  filterByStatus:["draft","paid","pending"]
};

export const invoicesSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    changeSecret: (state, { payload }) => {
      state.secret = payload;
    },
    changeVal: (state, { payload }) => {
      state.val = payload;
    },
    getInvoice: (state, { payload }) => {
      state.invoice = payload;
    },
    updateFilterByStatus:(state,{payload})=>{
      if(payload.checked){
        state.filterByStatus.push(payload.name)
      }else{
        state.filterByStatus=state.filterByStatus.filter(name=>name!==payload.name)
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAllInvoices.pending, (state, { payload }) =>{
      state.loading = true;
    })

    .addCase(fetchAllInvoices.fulfilled, (state, { payload }) =>{
      state.loading = false;
      state.invoices = payload;
      console.log("payload => ", payload)
    })
    .addCase(fetchAllInvoices.rejected, (state, { payload }) =>{
      state.loading = false;
      if(typeof payload==="string"){
        state.error = payload;
      }
    })

    .addCase(fetchSingleInvoice.pending, (state, { payload }) =>{
      state.loading = true;
    })
    .addCase(fetchSingleInvoice.fulfilled, (state, { payload }) =>{
      state.loading = false;
      state.invoice = payload;
    })
    .addCase(fetchSingleInvoice.rejected, (state, { payload }) =>{
      state.loading = false;
      if(typeof payload==="string"){
        state.error = payload;
      }
    })

    .addCase(updateInvoice.pending, (state, { payload }) =>{
      state.loading = true;
    })
    .addCase(updateInvoice.fulfilled, (state, { payload }) =>{
      state.loading = false;
      state.invoice = payload;
    })
    .addCase(updateInvoice.rejected, (state, { payload }) =>{
      state.loading = false;
      if(typeof payload==="string"){
        state.error = payload;
      }
    })

    .addCase(deleteInvoice.pending, (state, { payload }) =>{
      state.loading = true;
    })
    .addCase(deleteInvoice.fulfilled, (state, { payload }) =>{
      state.loading = false;
      state.invoice = null
    })
    .addCase(deleteInvoice.rejected, (state, { payload }) =>{
      state.loading = false;
      if(typeof payload==="string"){
        state.error = payload;
      }
    })
  }
});

export const { changeSecret, changeVal, getInvoice, updateFilterByStatus } = invoicesSlice.actions;
export default invoicesSlice.reducer;
