import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

interface IsPrivateInterface{
    children:JSX.Element
}

export const IsPrivate = ({children}:IsPrivateInterface):JSX.Element => {
    const authState = useSelector((state:any)=>state.auth.isAuthenticated)
    console.log("==>authState",authState)
    if (authState){
        return (
            children
        )
    }else{
        return <Navigate to="/login"/>
    }
  
}
