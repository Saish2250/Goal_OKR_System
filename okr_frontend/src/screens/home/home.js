import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Sidebar from '../../components/sidebar/Sidebar'
import Dashboard from '../../components/dashboard/dashboard';
import './home.css';

const Home = ({incrementCounter,counter}) => {

  // useEffect(() => {
  //   incrementCounter();
  // }, [])
  

  return (
    <div id='home'>
      <Sidebar />
      <Dashboard />
    </div>
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