import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from '../store/hooks'
import { addToken, fetchToken } from "../slice/auth.slice";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import './styles/LoginPage.css'

interface CredentialsInterface {
  email: string;
  password: string;
}

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const {isAuthenticated, isError, erroMessage, loading} = useSelector((state: any) => state.auth);
  

  const [credentialsState, setCredentialsState] =
    useState<CredentialsInterface>({ email: "", password: "" });
  const navigate = useNavigate();



  const login = () => {
      dispatch(fetchToken(credentialsState))
  };

  useEffect(()=>{
    if(isAuthenticated){
      navigate("/")
    }
  },[isAuthenticated])



  const handleCredentials = (el:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const credentialsBuff = {
      ...credentialsState,
      [el.target.name]: el.target.value,
    };
    console.log(credentialsBuff)
    setCredentialsState(credentialsBuff)
  };

  return (
    <div className="LoginPage">
      <h2>LoginPage</h2>
      {/* <div>{authState}</div> */}
      <TextField
        className="input"
        id="email"
        label="Email"
        variant="outlined"
        name="email"
        onChange={(el) => handleCredentials(el)}
        value= {credentialsState.email}
      />
      <TextField
        className="input"
        id="password"
        label="Password"
        variant="outlined"
        name="password"
        type="password"
        onChange={(el) => handleCredentials(el)}
        value= {credentialsState.password}
      />
      <Button variant="text" onClick={login}>
        Login
      </Button>
      {isError && <p className="errorMessage">{erroMessage}</p>}
    </div>
  );
};

export default LoginPage;
