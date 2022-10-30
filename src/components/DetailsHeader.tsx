import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'
import StatusInfo from './StatusInfo'

const DetailsHeader = () => {
    const {invoice} = useSelector((state:StoresInterface)=>state.invoices)
    const {theme} = useSelector((state:StoresInterface)=>state.auth)
    
  return (
    <div className="DetailsHeader">
        <div className="left">
            <p>Status</p>
            { invoice && invoice.status && <StatusInfo status={invoice.status}/>}
        </div>
    </div>
  )
}

export default DetailsHeader