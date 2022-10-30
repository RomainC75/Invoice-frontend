import React, { useEffect } from "react";
import {  useAppDispatch } from "../store/hooks";
import { authenticateToken } from "../slice/auth.slice";

import "./styles/navbar.css";

import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg"
import sun from "../assets/icon-sun.svg"
import defaultAvatar from "../assets/image-avatar.jpg"

import {toggleTheme} from "../slice/auth.slice"


import { useSelector } from "react-redux";
import { StoresInterface } from "../@types/store";

export const Navbar = ():JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authenticateToken());
  }, []);

  const {theme, user} = useSelector((state:StoresInterface)=>state.auth)

  const toggleThemeFn = () =>{
    dispatch(toggleTheme())
  }
  
  return (
    <nav className="Navbar colorBg4">
      <div className="mainButton colorBg1">
        <img src={logo} />
        <div className="brightShadow colorBg2"></div>
      </div>
      <div className="info">
        <div className="changeTheme shadowBox">
          <img src={theme ? moon : sun} alt="change theme" onClick={()=>toggleThemeFn()}/>
        </div>
        <div className="avatar shadowBox">
          <img src={user ? user.avatar_url : defaultAvatar}/>
        </div>
      </div>
    </nav>
  );
};
