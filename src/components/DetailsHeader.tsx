import React from 'react'
import { useSelector } from 'react-redux'
import { StoresInterface } from '../@types/store'
import StatusInfo from './StatusInfo'
import Button1 from './Button1'
import './styles/detailsHeader.css'


const DetailsHeader = ({toggleDisplay}:{toggleDisplay:()=>void}) => {
    const {invoice} = useSelector( (state:StoresInterface)=>state.invoices )
    const {theme} = useSelector( (state:StoresInterface)=>state.auth )

  return (
    <div className={ theme ? "DetailsHeader colorBgWhite" : "DetailsHeader colorBg3" }>
        <div className="left">
            <p className={theme ? "color7" : "color5"}>Status</p>
            { invoice && invoice.status && <StatusInfo status={invoice.status}/>}
        </div>
        <div className="right">
            <Button1 type={0} onClick={()=>toggleDisplay()}>Edit</Button1>
            <Button1 type={1}>Delete</Button1>
            <Button1 type={0}>Mark as Paid</Button1>
        </div>
    </div>
  )
}

export default DetailsHeader