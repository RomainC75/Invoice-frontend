import React from 'react'
import { changeSecret } from '../slice/invoices.slice'

import './styles/textInput.css'

interface TextInputInterface{
  children:string,
  value?:string|undefined,
  name?:string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({children, value, name, onChange}: TextInputInterface) => {
  return (
    <div className="TextInput p1">
      <label htmlFor={children}>{children}</label>
      <input type="text" value={value ? value : ""} name={name} onChange={onChange}></input>
    </div>
  )
}

export default TextInput