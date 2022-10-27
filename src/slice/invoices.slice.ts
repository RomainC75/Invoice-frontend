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
      console.log("ANSWER :; ",ans.data)
      return ans.data;
    });
  }
);

const initialState: InvoiceSliceInterface = {
  invoices: null,
  secret: 0,
  val: 0,
  invoice: null,
  loading: false,
  error: null
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
  },
  extraReducers: builder => {
    builder.addCase(fetchSingleInvoice.pending, (state, { payload }) =>{
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

export const { changeSecret, changeVal, getInvoice } = invoicesSlice.actions;
export default invoicesSlice.reducer;
