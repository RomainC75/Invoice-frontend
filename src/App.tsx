import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { useAppSelector, useAppDispatch } from './store/hooks';
import {store} from './store/store'
import allProductSlice, { changeSecret, changeVal } from './slice/invoices.slice';
import axios from 'axios';
import {api_url} from './utils/environnment'
import { fetchSingleInvoice } from './slice/invoices.slice';


function App() {
  const dispatch=useAppDispatch()

  const invoice = useSelector((state:any)=>state.invoices.invoice)

  useEffect(()=>{
    // const token:string = useSelector((state:any)=>state.auth.token)
    dispatch(fetchSingleInvoice("1"))
  },[])

  return (
    <div className="App">
      <p>YEA</p>
      {invoice && <p>{invoice.items[1].name}</p>}
    </div>
  );
}

export default App;
