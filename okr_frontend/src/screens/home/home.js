import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import './home.css';
import DashboardWrapper from '../../components/dashWrapper/DashboardWrapper';
import { Row, Col } from 'react-bootstrap';
import { GrFormAdd } from "react-icons/gr";
import CurrentTasks from '../../components/currentTasks/CurrentTasks';
import MainDashboard from '../../components/mainDashboard/MainDashboard';

const Home = ({incrementCounter,counter}) => {

  return (
    <DashboardWrapper>
      <MainDashboard />
    </DashboardWrapper>
  )
}

const mapStateToProps = ({app}) =>{
  const counter = app.value;
  return{
    counter
  }
}

const mapStateToDispatch = (dispatch) => ({
  incrementCounter : () => {
    dispatch({ type: "USER_FETCH_REQUESTED" })
  }
})

export default connect(mapStateToProps, mapStateToDispatch)(Home);