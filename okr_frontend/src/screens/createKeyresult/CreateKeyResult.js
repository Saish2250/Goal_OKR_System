import React, {useState} from 'react'
import DashboardWrapper from '../../components/dashWrapper/DashboardWrapper'
import {Row,Col} from 'react-bootstrap'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import { CustomToggle, CustomMenu } from '../../components/dropdown/CustomDropdown'
import { Dropdown } from 'react-bootstrap'

const drpOptions = [
    {key:"1", option: "Savio" },
    {key:"2", option: "Mayur" },
    {key:"3", option: "Saish" },
    {key:"4", option: "Udesh" }
]

const CreateKeyResult = () => {

    const [objective, setObjectives] = useState('');
    const [eventKey, setEventKey] = useState(null);
    const [event, setEvent] = useState('All Fields');

  return (
    <DashboardWrapper>
        <>
            <div className='d-flex align-items-center justify-content-between' >
                <div>
                    <p className='bigHeading' >Create Key Result</p>
                </div>
            </div>
            <Row className="pt-3" >
                <Col lg={5} md={12} xs={12} className="" >
                    <p className='mb-0 ps-3 textbold'>Key Result</p>
                    <CustomInput placeholder={"Create key result"} type={"text"} value={objective} setValue={setObjectives} className={'inputwrap mb-4'} />
                </Col>
                <Col lg={5} md={12} xs={12} className="" >
                    <p className='mb-0 ps-3 textbold'>Assign users</p>
                    <div className={'inputwrap mb-4'} >
                        {/* <CustomInput placeholder={"Team color"} type={"text"} value={teamcolor} setValue={setTeamcolor} className={'inputwrap mb-4'} /> */}
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
                </Col>
                <Col lg={5} md={12} xs={12} className="" >
                    <p className='mb-0 ps-3 textbold'>Select duration</p>
                    <CustomInput placeholder={"select a duration"} type={"date"} value={objective} setValue={setObjectives} className={'inputwrap mb-4'} />
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={12} xs={12} className="mt-5">
                    <CustomButton title={"Create Key Result"} />
                </Col>
            </Row>
        </>
    </DashboardWrapper>
  )
}

export default CreateKeyResult