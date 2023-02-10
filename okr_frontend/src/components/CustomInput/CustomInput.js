import React from 'react'
import './customInput.css'

const CustomInput = ({placeholder, value, setValue, className, type, pattern}) => {
  return (
    <div id="inputbox" className={className} >
        <input type={type} placeholder={placeholder} value={value} pattern={pattern} onChange={(event)=>setValue(event.target.value)} />
       {/*<select placeholder={placeholder}>
        <option value={value} onChange={(event)=>setValue(event.target.value)}>Volvo</option>
  </select>*/}
    </div>
  )
}

export default CustomInput