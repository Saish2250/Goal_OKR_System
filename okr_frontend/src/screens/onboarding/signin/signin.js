import React, { useState } from 'react'
import './signin.css';
import {VscSignIn} from "react-icons/vsc";
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/customButton/CustomButton';
import signinlogo from '../../../assets/images/sign-in.png'
import { connect } from "react-redux";
import { useNavigate} from 'react-router-dom'
import _ from 'lodash'

const Signin = ({adminLogin, adminError}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigate();

  const login = () => {
    if(email != '' && password != ''){
      setError('');
      adminLogin({
        email,
        password,
        navigation
      })
    } else{
      setError("Email or password cannot be empty");
    }
  }

  return (
    <div id="signin" >
        <div className='login_wrapper' >
          <div className="left_section d-none d-lg-block w-lg-50" >
            <p className='welcomeOkr' >Welcome to OKR</p>
            <p className='welcomeOkr' >Platform</p>
            <img className='logo' src={signinlogo} alt="" />
          </div>
          <div className="right_section p-5 w-100 w-md-50">
            <div className='icon pb-3' >
              <VscSignIn size={50} />
            </div>
            <div className='loginSection' >
              <p className='hello' >Hello Again</p>
              <p className='welcome' >Welcome to the OKR system</p>
              <div className='w-100 pt-2' >
                <CustomInput type={'text'} className={'my-3'}  placeholder={"Email"} value={email} setValue={setEmail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <CustomInput type={'password'} className={'my-3'}  placeholder={"Password"} value={password} setValue={setPassword} />

                <span style={{color : 'red'}} >{error || adminError?.message}</span>

                <CustomButton onPress={login} className={'mt-5'} title={"Login"} />

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = ({app={}}) => {
  const adminError = _.get(app, "adminloginerror", '');
  return{
    adminError
  }
}

const mapDispatchToProps = (dispatch) => ({
  adminLogin: (data) => dispatch({type : "loginadmincalled", payload : data}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin)