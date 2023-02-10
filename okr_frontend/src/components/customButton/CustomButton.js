import React from 'react'
import './CustomButton.css'

const CustomButton = ({title, className}) => {
  return (
    <div className={`customButton ${className}`} >
        {title}
    </div>
  )
}

export default CustomButton