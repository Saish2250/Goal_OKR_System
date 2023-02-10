import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Dashboard from '../dashboard/dashboard'
import './Dashboard.css'

const DashboardWrapper = ({children}) => {
  return (
    <div id='home'>
      <Sidebar />
        <Dashboard>
            {children}
        </Dashboard>
    </div>
  )
}

export default DashboardWrapper