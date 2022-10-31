import React from 'react'
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'

interface P05ContentInterface {
    children:string
}

const P05Content = ({children}:P05ContentInterface) => {
    const {theme} = useSelector((state:StoresInterface)=>state.auth)
    
  return (
    <p className={theme ? "p05 black" : "p05 white"}>{children}</p>
  )
}

export default P05Content