import React, { useEffect } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"
import { Navbar } from './components/Navbar';
import { IsPrivate } from './components/style/IsPrivate';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App():JSX.Element {
      return(
        <>
          <Navbar/>
          <Routes>
            <Route path="/" element={<IsPrivate><HomePage/></IsPrivate>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </>)
}

export default App;
