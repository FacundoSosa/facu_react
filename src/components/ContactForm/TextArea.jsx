import React from 'react'

function TextArea({labelText, textAreaName, textAreaRows}) {
  return (
    <div>
      <label>{labelText}</label>
      <textarea name={textAreaName} rows={textAreaRows}/>
    </div>
  )
}

export default TextArea
