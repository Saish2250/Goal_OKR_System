import React, {useState} from 'react'
import DashboardWrapper from '../../components/dashWrapper/DashboardWrapper'
import { GrFormAdd } from "react-icons/gr";
import { useLocation } from 'react-router-dom'
import './SingleObjectives.css'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const drpOptions = [
    {key:"1", option: "Red" },
    {key:"2", option: "Blue" },
    {key:"3", option: "Orange" },
    {key:"4", option: "Pink" }
]

const SingleObjective = () => {

    const [objective, setObjectives] = useState('');
    const {state} = useLocation();

    const navigate = useNavigate();
    console.log(state)

  return (
    <DashboardWrapper>
        <div id='singleObjectives' >
            <div className='d-flex align-items-center justify-content-between' >
                <div>
                    <p className='bigHeading' >{state?.name}</p>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between task-wrapper mt-3' >
                <div><p className="mb-0 current" >Key results</p></div>
                <div onClick={()=>navigate('/objective/createKeyResult')} className='arrow-wrapper' ><GrFormAdd /></div>
            </div>

            <div className='singleObjectivesWrapper mt-3' >
                <div className="leftside" >
                    <p className="itim" >Do all the task in there</p>
                </div>
                <div className="rightside d-flex align-items-center">
                    <div className='d-flex align-items-center me-4'>
                        <AiOutlineUsergroupDelete />
                        <p className='user ps-2' >savio</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>

            <div className='singleObjectivesWrapper mt-3' >
                <div className="leftside" >
                    <p className="itim" >Do all the task in there shdg fdsn vfs dnfv</p>
                </div>
                <div className="rightside d-flex align-items-center">
                    <div className='d-flex align-items-center me-4'>
                        <AiOutlineUsergroupDelete />
                        <p className='user ps-2' >savio</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>

        </div>
    </DashboardWrapper>
  )
}

export default SingleObjective