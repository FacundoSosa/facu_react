import React from 'react'

function Input({labelText, inputName, inputType}) {
  return (
    <div>
      <label>{labelText}</label>
      <input type={inputType} name={inputName} />
    </div>
  )
}

export default Input
