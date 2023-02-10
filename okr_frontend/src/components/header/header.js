import React from 'react'
import './header.css'
import { GrNotification } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div id="header">
        <div className='header-first px-4'>
            <div>
                <p className='logo'>Farm 24</p>
            </div>
            <div>
                <div className='d-flex align-items-center' >
                    <div className='date-wrap text-end'>
                        <p>6.50.32 PM +1.00</p>
                        <p>(Europe/Amsterdam)</p>
                    </div>
                    <div className='noti-icon'>
                        <GrNotification />
                        <div className='noti-count' >5</div>
                    </div>
                    <div>
                        <div className='image-avatar' >
                            <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='header-second px-4 ' >
            <div className='name-part' >
                <p>Udesh Arlekar</p>
                <p>Web developer</p>
            </div>
            <div>
                <div className='arrow-wrapper' >
                    <FaAngleDown />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header