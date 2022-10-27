import React, { useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../slice/auth.slice";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import './styles/LoginPage.css'
import { api_url } from "../utils/environnment";

interface CredentialsInterface {
  email: string;
  password: string;
}

const LoginPage = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth.token);
  const [isError, setIsError] = useState<boolean>(false);
  const [erroMessage, setErrorMessage] = useState<string>("");

  const [credentialsState, setCredentialsState] =
    useState<CredentialsInterface>({ email: "", password: "" });
  const navigate = useNavigate();

  const login = () => {
      axios.post(`${api_url}/login`, {
        email: credentialsState.email,
        password: credentialsState.password,
      }).then(ans=>{
        dispatch(addToken(ans.data.token));
        navigate("/");
      }).catch(err=>{
          setIsError(true);
          setErrorMessage(err.response.data.message);
      })
  };

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
