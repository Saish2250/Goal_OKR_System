import React from 'react'
import './Sidebar.css';
import { GrApps } from 'react-icons/gr'
import { RiHome2Line } from 'react-icons/ri';
import { BiCalendarAlt } from 'react-icons/bi';
import { BiHelpCircle } from 'react-icons/bi';

const Sidebar = () => {
  
  return (
    <div id='sidebar' className='sidebarr' >
      <div className='w-100 text-center p-4 appIcon'>
          <GrApps size={25}></GrApps>
      </div>
      <div className='nav-icons' >
        <div className='icon-wrapper active' >
          <RiHome2Line />
        </div>
        <div className='icon-wrapper' >
          <BiCalendarAlt />
        </div>
        <div className='icon-wrapper' >
          <BiHelpCircle />
        </div>
        <div className='icon-wrapper' >
          <BiCalendarAlt />
        </div>
        <div className='icon-wrapper' >
          <BiHelpCircle />
        </div>
      </div>
    </div>
  )
}

export default Sidebar