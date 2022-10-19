import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {store} from './store/store'
import allProductSlice, { changeSecret, changeVal } from './slice/pictures.slice';
import axios from 'axios';
import {api_url} from './utils/environnment'

function App() {
  const dispatch=useDispatch()
  //get
  let allProductState = useSelector((state: any) => state.pictures.secret);
  console.log("==>allProductState", allProductState)
  dispatch(changeSecret(1888))
  allProductState = useSelector((state: any) => state.pictures.secret);

  const val = useSelector((state: any) => state.pictures.val);

  useEffect(()=>{
    axios.get(api_url+'/test')
    .then(ans=>{
      dispatch(changeVal(ans.data.message))
      console.log(ans.data)
    })
  },[])

  return (
    <div className="App">
      <p>YEA</p>
      <p>{val}</p>
    </div>
  );
}

export default App;
