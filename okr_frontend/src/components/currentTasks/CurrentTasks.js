import React from 'react'
import './CurrentTask.css'
import {Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const status = [
    {
        days : '1d',
        status : 'Due',
        color : 'Red',
        text : 'Lorem ipsum text is the dummy text to store.',
        item : '#1'
    },
    {
        days : '2d',
        status : 'Left',
        color : 'Green',
        text : 'Lorem ipsum text is the dummy in the world.',
        item : '#2'
    },
    {
        days : '2d',
        status : 'Left',
        color : 'Green',
        text : 'Lorem ipsum text is the dummy in the world.',
        item : '#2'
    },
    {
        days : '2d',
        status : 'Left',
        color : 'Green',
        text : 'Lorem ipsum text is the dummy in the world.',
        item : '#2'
    }
]

const SingleCurrentTask = ({
    item,
    index
}) => {
    const navigate = useNavigate();
    return(
        <Col lg={4} md={6} sm={12} xs={12} >
            <div className='d-flex align-items-center p-3 singleTask mt-3 cursor-pointer' onClick={()=> navigate('/objectives') }>
                <div className='day-wrapper' style={{backgroundColor: item.color == 'Red' ? 'var(--lightred)' : 'var(--lightaccent)' }} >
                    <div className="text-center" >
                        <p>T{index + 1}</p>
                        {/* <p>{item.status}</p> */}
                    </div>
                </div>
                <div className='ps-3 text-wrapper' >
                    <div><b className='mb-0 '>{item.text}</b></div>
                    <div className='d-flex align-items-center ' >
                        <p className='mb-0 me-3 mt-1' >Object Assignned</p>
                        <div className='item' >{item.item}</div>
                    </div>
                    
                </div>
            </div>
        </Col>
        
    )
}

const CurrentTasks = () => {
  return (
    <div id='current-task' className='pt-3' >
        <Row>
            {
                status.map((item,index)=> <SingleCurrentTask item={item} index={index}/> )
            }
        </Row>
    </div>
  )
}

export default CurrentTasks