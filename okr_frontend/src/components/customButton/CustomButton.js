import React from 'react'
import './CustomButton.css'

const CustomButton = ({title, className, onPress}) => {
  return (
    <div onClick={onPress} className={`customButton ${className}`} >
        {title}
    </div>
  )
}

export default CustomButton