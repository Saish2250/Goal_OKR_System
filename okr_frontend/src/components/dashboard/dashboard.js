import React from 'react'
import Header from '../header/header'
import { Row, Col, Container } from 'react-bootstrap'
import Weather from '../weather/weather'
import MainDashboard from '../mainDashboard/MainDashboard'
import './dashboard.css'

const Dashboard = ({children}) => {
  return (
    <div id="dashboard" >
        <Header />
        <Row className="main-content" >
          {/* <Col lg={3} className="p-0" >
            <Weather />
          </Col> */}
          <Col lg={12} className="p-0">
            <div className='main-dashboard w-100' >
            {children}
            </div>
          </Col>
        </Row>
    </div>
    
  )
}

export default Dashboard