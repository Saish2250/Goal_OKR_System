import React from 'react'
import './CurrentTask.css'

const status = [
    {
        days : '1d',
        status : 'Due',
        color : 'Red',
        text : 'Lorem ipsum text is the dummy text to store.',
        item : 'Maize #1'
    },
    {
        days : '2d',
        status : 'Left',
        color : 'Green',
        text : 'Lorem ipsum text is the dummy in the world.',
        item : 'Wheat #2'
    }
]

const SingleCurrentTask = ({
    item
}) => {
    return(
        <div className='d-flex align-items-center p-3 singleTask mt-3' >
            <div className='day-wrapper' style={{backgroundColor: item.color == 'Red' ? 'var(--lightred)' : 'var(--lightaccent)' }} >
                <div className="text-center" >
                    <p>{item.days}</p>
                    <p>{item.status}</p>
                </div>
            </div>
            <div className='ps-3 text-wrapper' >
                <div><b className='mb-0 '>{item.text}</b></div>
                <div className='item' >{item.item}</div>
            </div>
        </div>
    )
}

const CurrentTasks = () => {
  return (
    <div id='current-task' className='pt-3' >
        {
            status.map((item)=> <SingleCurrentTask item={item}/> )
        }
    </div>
  )
}

export default CurrentTasks