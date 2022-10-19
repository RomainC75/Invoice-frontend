import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../@types/invoice";
import { AuthSliceInterface } from "../@types/slice";


const initialState:AuthSliceInterface = {
    token:"6678",
    user:null,
    isAuthenticated:false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: ((state, {payload} )=>{
        state.token=payload
        state.isAuthenticated=true
        localStorage.setItem("authToken",payload)
    }),
    removeToken: ((state)=>{
        state.token=null
        state.isAuthenticated=false
    }),
    verifyAuthentication:(state)=>{
      
    }
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
  }
});

export const { addToken, removeToken } =
  authSlice.actions;
export default authSlice.reducer;