import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { InvoiceSliceInterface } from "../@types/slice";
import axios from "axios";

import { api_url } from "../utils/environnment";

export const fetchSingleInvoice = createAsyncThunk(
  "invoice/fetchSingleInvoice",
  async (id:string) => {
    return axios.get(`${api_url}/invoice/${id}`).then((ans) => {
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
  }
});

export const { changeSecret, changeVal, getInvoice, updateFilterByStatus } = invoicesSlice.actions;
export default invoicesSlice.reducer;
