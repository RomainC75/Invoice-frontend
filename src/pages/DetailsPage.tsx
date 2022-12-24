import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux"
import { useAppDispatch } from "../store/hooks";
import { useParams } from 'react-router-dom';
import { StoresInterface } from '../@types/store';
import { fetchSingleInvoice } from '../slice/invoices.slice';
import { GoChevronLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Edit from '../components/Edit';


import './styles/detailsPage.css'
import DetailsHeader from '../components/DetailsHeader';
import DetailsContent from '../components/DetailsContent';
import { DetailsHeaderButtons } from '../components/DetailsHeaderButtons';


const DetailsPage = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {token, theme} = useSelector((state:StoresInterface)=>state.auth)
    const [displayEdit, setDisplayEdit] = useState(false)

     useEffect(()=>{
        if(id && token){
            dispatch(fetchSingleInvoice({id, token}))
        }
     },[])

    const toggleDisplay = () =>{
        console.log("TOOGLE")
        setDisplayEdit(!displayEdit)
    }
      
  return (
    <>
        <div className="DetailsPage">
            <Edit display={displayEdit} toggleDisplay={toggleDisplay}/>
            <div className={displayEdit ? "halo" : "halo hide"}></div>
            <Link to='/' className="navigation">
                <GoChevronLeft className="chevron color1  "/>
                <p className = { theme ? "black" : "white" }>Go back</p>
            </Link>
            <DetailsHeader toggleDisplay={toggleDisplay}/>
            <DetailsContent/>
        </div>
        <div className={theme ? "DetailsPage__smartphonePart colorBgWhite" : "DetailsPage__smartphonePart colorBg4"}>
            {displayEdit ? <p>edit</p> : <DetailsHeaderButtons isForSmartphone toggleDisplay={toggleDisplay}/> }
        </div>
        
    </>
  )
}


export default DetailsPage