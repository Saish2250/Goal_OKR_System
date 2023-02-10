import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './MainDashboard.css'
import { CustomMenu, CustomToggle } from '../dropdown/CustomDropdown';
import { Row, Col } from 'react-bootstrap';
import { RxArrowTopRight } from "react-icons/rx";
import CurrentTasks from '../currentTasks/CurrentTasks';

const MainDashboard = () => {
    const [eventKey, setEventKey] = useState(null);
    const [event, setEvent] = useState('All Fields');

    const drpOptions = [
        {key:"1", option: "Red" },
        {key:"2", option: "Blue" },
        {key:"3", option: "Orange" },
        {key:"4", option: "Pink" }
    ]

  return (
    <div id='main-dashboard' className='w-100' >

        <div className='d-flex align-items-center justify-content-between' >
            <div>
                <p className='bigHeading' >Dashboard</p>
            </div>
            <div className='d-flex align-items-center' >
                <b className='mb-0 text-bold field-text' >Field</b>
                <div className="ms-3" >
                    <Dropdown  onSelect={(eventKey, event)=>{
                        setEventKey(eventKey)
                        setEvent(event.target.innerText)
                    }} >
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        { event }
                        </Dropdown.Toggle>
                    
                        <Dropdown.Menu as={CustomMenu}>
                            {
                                drpOptions.map((item)=>
                                    <Dropdown.Item active={eventKey == item.key ? true : false} eventKey={item.key}>{item.option}</Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
            </div>
        </div>

        <Row className='justify-content-between mt-4 gx-5' >
            <Col lg={5} className="px-0" >
                <div>
                    <div className='d-flex align-items-center justify-content-between task-wrapper' >
                        <div><p>Current task</p></div>
                        <div className='arrow-wrapper' ><RxArrowTopRight /></div>
                    </div>
                    <CurrentTasks />
                </div>
            </Col>
            <Col lg={1}></Col>
            <Col lg={5} className="px-0">
                <div className='d-flex align-items-center justify-content-between task-wrapper' >
                    <div><p>Current task</p></div>
                    <div className='arrow-wrapper' ><RxArrowTopRight /></div>
                </div>
            </Col>
        </Row>

    </div>
  )
}

export default MainDashboard