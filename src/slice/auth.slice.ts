import { createSlice, createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { rejects } from "assert";
import axios from "axios";
import { UserInterface } from "../@types/invoice";
import { AuthSliceInterface } from "../@types/slice";
import { api_url } from "../utils/environnment";

interface credentialsInterface{
  email:string,
  password:string
}

export const fetchToken = createAsyncThunk(
  "auth/fetchToken",
  async (credentials: credentialsInterface) => {
    return axios.post(`${api_url}/login`,{
      email: credentials.email,
      password: credentials.password 
    }).then((ans) => {
      console.log("ANSWER :; ",ans.data)
      return ans.data;
    });
  }
);

export const authenticateToken = createAsyncThunk(
  "auth/authenticateToken",
  async () => {
    const token:string|null = localStorage.getItem("authToken")
    console.log("zisIz the token : ",token)
    if(token){
      return axios.get(`${api_url}/verify`,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      }).then((ans) => {
        console.log("ANSWER :; ",ans.data)
        return true
      }).catch(()=>{
        console.log("catch")
        return false
      })
    }else{
      console.log("else")
      return new Promise((resolve,reject)=>reject(false))
    }
  }
)

const initialState: AuthSliceInterface = {
  token: null,
  user: null,
  isAuthenticated: false,
  theme: true,
  loading: false,
  error: null,
  errorMessage: null, 
  isLoaded: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, { payload }) => {
      state.token = payload;
      state.isAuthenticated = true;
      localStorage.setItem("authToken", payload);
    },
    removeToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    toggleTheme : (state)=>{
      state.theme=!state.theme
    }
    
  },
  extraReducers: builder => {
    builder.addCase(fetchToken.pending, (state, { payload }) =>{
      state.loading = true;
    })
    .addCase(fetchToken.fulfilled, (state, { payload }) =>{
      state.loading = false;
      state.isAuthenticated=true
      state.token = payload.token;
      localStorage.setItem("authToken",payload.token)
      state.isLoaded=true
    })
    .addCase(fetchToken.rejected, (state, { payload }) =>{
      state.loading = false;
      state.isLoaded=true
      if(typeof payload==="string"){
        state.error = payload;
      }
    })
    
    .addCase(authenticateToken.pending, (state, { payload }) =>{
      state.loading = true;
    })
    .addCase(authenticateToken.fulfilled, (state, { payload }) =>{
      console.log("authenticated :-), ", payload)
      state.isAuthenticated=payload ? true : false
      state.token=localStorage.getItem("authToken")
      state.loading=false
      state.isLoaded=true
    })
    .addCase(authenticateToken.rejected, (state, { payload }) =>{
      console.log("authenticateToken REJECTED")
      state.isAuthenticated = false;
      state.loading=false
      state.isLoaded=true
    })
  }
});

export const { addToken, removeToken, toggleTheme } = authSlice.actions;
export default authSlice.reducer;
