import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './MainDashboard.css'
import { CustomMenu, CustomToggle } from '../dropdown/CustomDropdown';
import { Row, Col } from 'react-bootstrap';
import { GrFormAdd } from "react-icons/gr";
import CurrentTasks from '../currentTasks/CurrentTasks';
import { useNavigate } from 'react-router-dom';

const MainDashboard = () => {

    const navigate = useNavigate();

  return (
        <>
        <div className='d-flex align-items-center justify-content-between' >
            <div>
                <p className='bigHeading' >Dashboard</p>
            </div>
        </div>

        <Row className='justify-content-between mt-4 gx-5' >
            <Col lg={12} className="px-0" >
                <div>
                    <div className='d-flex align-items-center justify-content-between task-wrapper' >
                        <div><p className="mb-0 current" >Current teams</p></div>
                        <div onClick={()=>navigate('/createTeam')} className='arrow-wrapper' ><GrFormAdd /></div>
                    </div>
                        <CurrentTasks />
                </div>
            </Col>
        </Row>
        </>
  )
}

export default MainDashboard