import React from 'react'
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'

interface DetailTitleInterface {
    children:string
}

const DetailTitle = ({children}:DetailTitleInterface):JSX.Element => {
    const {theme} = useSelector((state:StoresInterface)=>state.auth)
    
  return (
    <p className={theme ? "p1 color7" : "p1 color5"}>{children}</p>
  )
}

export default DetailTitle