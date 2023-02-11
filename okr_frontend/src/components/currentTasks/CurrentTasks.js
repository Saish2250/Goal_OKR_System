import React, {useEffect} from 'react'
import './CurrentTask.css'
import {Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import _ from 'lodash'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

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
            <Link className="text-decor"  to={`/objectives/${item.team_id}`} >
                <div className='d-flex align-items-center p-3 singleTask mt-3 cursor-pointer' >
                    <div className='day-wrapper' style={{backgroundColor: item.tcolor == 'red' || item.tcolor == 'Red' ? 'var(--lightred)' : item.tcolor == 'Blue' ?'var(--blue)' : item.tcolor == 'Orange' ? 'var(--orange)' : 'var(--pink)' }} >
                        <div className="text-center" >
                            <p>T{index + 1}</p>
                            {/* <p>{item.status}</p> */}
                        </div>
                    </div>
                    <div className='ps-3 text-wrapper' >
                        <div><b className='mb-0 '>{item.team_name}</b></div>
                        <div className='d-flex align-items-center ' >
                            <p className='mb-0 me-3 mt-1' >{item.team_name}</p>
                            {/* <div className='item' >{item.item}</div> */}
                        </div>
                        
                    </div>
                </div>
            </Link>
            
        </Col>
        
    )
}

const CurrentTasks = ({teams, getTeams}) => {

    useEffect(() => {   //UseEffect Used Here ####################################
        getTeams();
    }, [])

    useEffect(() => {   //UseEffect Used Here ####################################
        console.log(teams)
    }, [teams])

  return (
    <div id='current-task' className='pt-3' >
        <Row>
            {
                teams.map((item,index)=> <SingleCurrentTask item={item} index={index}/> )
            }
        </Row>
    </div>
  )
}

const mapStateToProps = ({app={}}) => {
    const teams = _.get(app, "getTeamsSuccess", []);
    return{
      teams
    }
  }

const mapDispatchToProps = (dispatch) => ({
    getTeams: (data) => dispatch({type : "getTeamsCalled", payload : data}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTasks)