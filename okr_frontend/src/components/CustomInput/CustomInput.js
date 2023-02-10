import React from 'react'
import './customInput.css'

const CustomInput = ({placeholder, value, setValue, className, type}) => {
  return (
    <div id="inputbox" className={className} >
        <input type={type} placeholder={placeholder} value={value} onChange={(event)=>setValue(event.target.value)} />
    </div>
  )
}

export default CustomInput