import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {Navigate} from 'react-router-dom'
import {authenticateToken} from '../../slice/auth.slice'
interface IsPrivateInterface{
    children:JSX.Element
}

export const IsPrivate = ({children}:IsPrivateInterface):JSX.Element => {
    const dispatch=useAppDispatch()
    const token:string|null=localStorage.getItem('authToken')
    const {isAuthenticated, loading } = useAppSelector((state:any)=>state.auth)

    

    useEffect(()=>{
        dispatch(authenticateToken())
    },[])

    
    if (isAuthenticated){
        return (
            children
        )
    }else {
        return <Navigate to="/login"/>
    }
  
}
