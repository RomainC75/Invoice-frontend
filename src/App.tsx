import React, { useEffect } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"
import { Navbar } from './components/Navbar';
import { IsPrivate } from './components/IsPrivate';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { useSelector} from "react-redux"
import { StoresInterface } from './@types/store';
import DetailsPage from './pages/DetailsPage';

function App():JSX.Element {
      const {token, isLoaded, theme} = useSelector((state:StoresInterface)=>state.auth)
      return(
        <div className={theme ? "App colorBg11" : "App colorBg12"}>
          <Navbar/>
          <Routes>
          <Route path="/" element={<IsPrivate><HomePage/></IsPrivate>}/>
          <Route path="/invoice/:id" element={<IsPrivate><DetailsPage/></IsPrivate>}/>

            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </div>)
}

export default App;
