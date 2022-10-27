import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/auth.slice";
import invoicesReducer from "../slice/invoices.slice";
import authReducer from '../slice/auth.slice'

import { useDispatch } from "react-redux";



export const store =  configureStore({
  reducer: {
    invoices: invoicesReducer,
    auth:  authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store
