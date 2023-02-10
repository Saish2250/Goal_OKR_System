import React from 'react'
import DashboardWrapper from '../../components/dashWrapper/DashboardWrapper'
import './Objectives.css'
import { GrAdd, GrDelete } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { GrFormAdd } from "react-icons/gr";
import { Modal } from 'react-bootstrap';

const data = [
    {
        name : "Improve knowledge about frontend and backend",
        completeion : '100'
    },
    {
        name : "Networking skills",
        completeion : '50'
    },
    {
        name : "Cloud computing knowledge and skills",
        completeion : '10'
    },
]

// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
// };

const Objectives = () => {
    const navigate = useNavigate();
    // const [modalIsOpen, setIsOpen] = React.useState(true);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
  return (
    <DashboardWrapper>
        <div id='objectives' >
            <div className='d-flex align-items-center justify-content-between' >
                <div>
                    <p className='bigHeading' >Objectives</p>
                </div>
            </div>

            <div>
                    <div className='d-flex align-items-center justify-content-between task-wrapper' >
                        <div><p className="mb-0 current" >All Objectives</p></div>
                        <div onClick={()=>navigate('/create-objective')} className='arrow-wrapper' ><GrFormAdd /></div>
                    </div>
                    {/* <CurrentTasks /> */}
            </div>

            {
                data.map((item,index)=>(
                    <div onClick={()=>navigate('/objective/1',{state:item})} className='singleObj d-flex w-100 justify-content-between my-3 cursor-pointer' >
                        <div>
                            <div className="d-flex">
                                <p className='pe-2' >{index + 1}.</p>
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <span className='ms-4' >Completion : </span>
                                <span className='font-weight-bold itim accent' > {item.completeion}%</span>
                            </div>
                        </div>
                        <div style={{ fontSize : 30, fontWeight : 'bold' }} >
                            {/* <GrAdd className='me-3 cursor-pointer' color='green' /> */}
                            <AiFillDelete className='me-3 cursor-pointer' color='red' />
                        </div>
                    </div>
                ))
            }

        {/* <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button> 
            </form>
        </Modal> */}
            
        </div>
    </DashboardWrapper>
  )
}

export default Objectives