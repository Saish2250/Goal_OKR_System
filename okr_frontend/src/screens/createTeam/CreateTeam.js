import React, {useState} from 'react'
import DashboardWrapper from '../../components/dashWrapper/DashboardWrapper'
import {Row,Col} from 'react-bootstrap'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import { CustomToggle, CustomMenu } from '../../components/dropdown/CustomDropdown'
import { Dropdown } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import _ from 'lodash'
import { connect } from 'react-redux'

const drpOptions = [
    {key:"1", option: "Red" },
    {key:"2", option: "Blue" },
    {key:"3", option: "Orange" },
    {key:"4", option: "Pink" }
]

const CreateTeam = ({createTeamm}) => {

    const navigation = useNavigate();

    const [eventKey, setEventKey] = useState(null);
    const [event, setEvent] = useState('All Fields');
    const [teamname, setTeamname] = useState('');
    const [teamcolor, setTeamcolor] = useState('select color');
    const [teamtitle, setTeamtitle] = useState('');

    const createTeam = () => {
        if(teamname != '' && teamcolor != '' && teamtitle != 'select color'){
            createTeamm({
                teamname,
                teamcolor,
                teamtitle,
                navigation
            })
        } else{
            window.alert("Enter all data");
        }
    }

  return (
    <DashboardWrapper>
        <>
            <div className='d-flex align-items-center justify-content-between' >
                <div>
                    <p className='bigHeading' >Create Team</p>
                </div>
            </div>
            <Row className="pt-3" >
                <Col lg={5} md={12} xs={12} className="" >
                    <p className='mb-0 ps-3 textbold'>Team name</p>
                    <CustomInput placeholder={"Team name"} type={"text"} value={teamname} setValue={setTeamname} className={'inputwrap mb-4'} />
                </Col>
                <Col lg={5} md={12} xs={12} className="" >
                    <p className='mb-0 ps-3 textbold'>Team color</p>
                    <div className={'inputwrap mb-4'} >
                        {/* <CustomInput placeholder={"Team color"} type={"text"} value={teamcolor} setValue={setTeamcolor} className={'inputwrap mb-4'} /> */}
                        <Dropdown  onSelect={(eventKey, event)=>{
                            setEventKey(eventKey)
                            setTeamcolor(event.target.innerText)
                        }} >
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                            { teamcolor }
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
                    <p className='mb-0 ps-3 textbold'>Team title</p>
                    <CustomInput placeholder={"Team title"} type={"text"} value={teamtitle} setValue={setTeamtitle} className={'inputwrap mb-4'} />
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={12} xs={12} className="mt-5">
                    <CustomButton onPress={createTeam} title={"Create team"} />
                </Col>
            </Row>
        </>
    </DashboardWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
    createTeamm: (data) => dispatch({type : "createteamcalled", payload : data}),
  });
  
export default connect(null, mapDispatchToProps)(CreateTeam)
