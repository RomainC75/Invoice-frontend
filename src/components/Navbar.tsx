import React,{ useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { authenticateToken } from '../slice/auth.slice';

import './style/navbar.css'

export const Navbar = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch((authenticateToken()))
    }, [])
    
  return (
    <div className="Navbar">

    </div>
  )
}
