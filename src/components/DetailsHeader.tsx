import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'
import StatusInfo from './StatusInfo'
import Button from './Button'
import './styles/detailsHeader.css'

const DetailsHeader = () => {
    const {invoice} = useSelector( (state:StoresInterface)=>state.invoices )
    const {theme} = useSelector( (state:StoresInterface)=>state.auth )
  return (
    <div className={ theme ? "DetailsHeader colorBgWhite" : "DetailsHeader colorBg3" }>
        <div className="left">
            <p className={theme ? "color7" : "color5"}>Status</p>
            { invoice && invoice.status && <StatusInfo status={invoice.status}/>}
        </div>
        <div className="right">
            <Button type={0}>Edit</Button>
            <Button type={0}>Delete</Button>
            <Button type={0}>Mark as Paid</Button>
        </div>
    </div>
  )
}

export default DetailsHeader