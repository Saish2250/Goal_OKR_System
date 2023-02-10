import React from 'react'
import './customInput.css'

const CustomInput = ({placeholder, value, setValue, className, type, pattern}) => {
  return (
    <div id="inputbox" className={className} >
        <input type={type} placeholder={placeholder} value={value} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"} onChange={(event)=>setValue(event.target.value)} />
    </div>
  )
}

export default CustomInput