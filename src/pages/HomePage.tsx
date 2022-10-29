import React, {useEffect} from 'react'
import { useAppDispatch } from '../store/hooks'
import { useSelector } from 'react-redux'
import { fetchAllInvoices } from '../slice/invoices.slice'
import { StoresInterface } from '../@types/store'
import HomeHeader from '../components/HomeHeader'

const HomePage = () => {
    const dispatch=useAppDispatch()

    const {invoice, invoices} = useSelector((state:StoresInterface)=>state.invoices)
    const {token, isLoaded} = useSelector((state:StoresInterface)=>state.auth)
  
    useEffect(()=>{
      if(isLoaded && token){
        dispatch(fetchAllInvoices(token))
      }
    },[isLoaded])
  
    return (
      <div className="App">
        <HomeHeader invoices={invoices}/>
        {invoice && <p>{invoice.items[1].name}</p>}
      </div>
    );
}

export default HomePage