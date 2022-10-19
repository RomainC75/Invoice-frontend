import { createSlice } from "@reduxjs/toolkit";
import { InvoiceSliceInterface } from "../@types/slice";

const initialState:InvoiceSliceInterface={
  invoices: null,
  secret:1234,
  val:0
}


export const picturesSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    changeSecret:((state,{payload})=>{
      state.secret = payload
    }),
    changeVal:((state,{payload})=>{
      state.val=payload
    }),
    
    // editPicture: (state, { payload }) => {
    //   state.pictures = state.pictures.map((pic) => {
    //     if (pic.id === payload[1]) {
    //       return {
    //         ...pic,
    //         artist: payload[0],
    //       };
    //     } else {
    //       return pic;
    //     }
    //   });
    // },
    
  },
});

export const { changeSecret, changeVal } =
  picturesSlice.actions;
export default picturesSlice.reducer;