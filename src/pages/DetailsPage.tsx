import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import { useAppDispatch } from "../store/hooks";
import { useParams } from 'react-router-dom';
import { StoresInterface } from '../@types/store';
import { fetchSingleInvoice } from '../slice/invoices.slice';
import { GoArrowLeft, GoChevronLeft } from 'react-icons/go';

import './styles/detailsPage.css'
import DetailsHeader from '../components/DetailsHeader';

const DetailsPage = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {invoice} = useSelector((state:StoresInterface)=>state.invoices)
    const {token} = useSelector((state:StoresInterface)=>state.auth)

     useEffect(()=>{
        if(id && token){
            dispatch(fetchSingleInvoice({id, token}))
        }
     },[])
      
  return (
    <div className="DetailsPage">
        <div className="navigation">
            <GoChevronLeft className="chevron color1  "/>
            <p>Go back</p>
        </div>
        <DetailsHeader/>
    </div>
  )
}

export default DetailsPage