import React, {useState} from 'react'
import DashboardWrapper from '../../components/dashWrapper/DashboardWrapper'
import {Row,Col} from 'react-bootstrap'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import { CustomToggle, CustomMenu } from '../../components/dropdown/CustomDropdown'
import { Dropdown } from 'react-bootstrap'

const drpOptions = [
    {key:"1", option: "Red" },
    {key:"2", option: "Blue" },
    {key:"3", option: "Orange" },
    {key:"4", option: "Pink" }
]

const CreateObjective = () => {

    const [objective, setObjectives] = useState('');

  return (
    <DashboardWrapper>
        <>
            <div className='d-flex align-items-center justify-content-between' >
                <div>
                    <p className='bigHeading' >Create Objective</p>
                </div>
            </div>
            <Row className="pt-3" >
                <Col lg={5} md={12} xs={12} className="" >
                    <p className='mb-0 ps-3 textbold'>Objective </p>
                    <CustomInput placeholder={"Enter objective"} type={"text"} value={objective} setValue={setObjectives} className={'inputwrap mb-4'} />
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={12} xs={12} className="mt-5">
                    <CustomButton title={"Create objective"} />
                </Col>
            </Row>
        </>
    </DashboardWrapper>
  )
}

export default CreateObjective