import React from 'react'

function Input({labelText, inputName, inputType, required}) {
  return (
    <div>
      <label>{labelText}</label>
      <input type={inputType} name={inputName} required={required} />
    </div>
  )
}

export default Input
