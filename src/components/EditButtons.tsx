import React from 'react'

interface EditButtonsInterface{
    toggleDisplay:()=>void
    handleSaveChanges:()=>void
}

export const EditButtons = ({toggleDisplay,handleSaveChanges}: EditButtonsInterface) => {
  return (
    <div>EditButtons</div>
  )
}
