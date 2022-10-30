import React, {useEffect} from 'react'
import { useAppDispatch } from '../store/hooks'
import { useSelector } from 'react-redux'
import { fetchAllInvoices } from '../slice/invoices.slice'
import { StoresInterface } from '../@types/store'
import HomeHeader from '../components/HomeHeader'
import InvoiceList from '../components/InvoiceList'
import './styles/homePage.css'


const HomePage = () => {
    const dispatch=useAppDispatch()

    const {invoices} = useSelector((state:StoresInterface)=>state.invoices)
    const {token, isLoaded} = useSelector((state:StoresInterface)=>state.auth)
  
    useEffect(()=>{
      if(isLoaded && token){
        dispatch(fetchAllInvoices(token))
      }
    },[isLoaded])
  
    return (
      <div className="HomePage">
        <HomeHeader invoices={invoices}/>
        <InvoiceList/>
      </div>
    );
}

export default HomePage