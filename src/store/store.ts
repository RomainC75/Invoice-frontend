import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/auth.slice";
import picturesReducer from "../slice/pictures.slice";
import authReducer from '../slice/auth.slice'

export const store =  configureStore({
  reducer: {
    pictures: picturesReducer,
    auth:  authReducer,
  },
});

export default store