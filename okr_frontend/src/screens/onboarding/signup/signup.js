import React, { useState } from 'react'
import './signup.css';
import {VscSignIn} from "react-icons/vsc";
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/customButton/CustomButton';
import signinlogo from '../../../assets/images/sign-in.png'
import { RiContactsBookLine } from 'react-icons/ri';

const SignUp = () => {
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [user_type, setUser_Type] = useState('');

  return (
      
      
    <div id="signup" >
        <div className='su_wrapper' >
          <div className="left_section d-none d-md-block w-md-50" >
            <p className='welcomeOkr' >Welcome to OKR</p>
            <p className='welcomeOkr' >Platform</p>
            <img className='logo' src={signinlogo} alt="" />
          </div>
          <div className="right_section p-5 w-100 w-md-50">
            <div className='icon pb-3' >
              <VscSignIn size={50} />
            </div>
            <div className='suSection' >
              <p className='hello' >Registration</p>
              <p className='welcome' >Welcome to the OKR system</p>
              <div className='w-100 pt-2' >
              <CustomInput type={'text'} className={'my-3'}  placeholder={"Username"} value={username} setValue={setUser} />
              <CustomInput type={'text'} className={'my-3'}  placeholder={"First Name"} value={first_name} setValue={setFirst_Name} />
              <CustomInput type={'text'} className={'my-3'}  placeholder={"Last Name"} value={last_name} setValue={setLast_Name} />
              <CustomInput type={'text'} className={'my-3'}  placeholder={"User Type"} value={user_type} setValue={setUser_Type} />
                <CustomInput type={'email'} className={'my-3'}  placeholder={"Email ID"} value={email} setValue={setEmail} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"} />
                <CustomInput type={'tel'} className={'my-3'}  placeholder={"Mobile No"} value={mobile} setValue={setMobile} pattern={"[0-9]{10}"} />
                <CustomInput type={'password'} className={'my-3'}  placeholder={"Password"} value={password} setValue={setPassword} />
                <CustomButton className={'mt-5'} title={"Register"} />

              </div>
            </div>
          </div>
        </div>
    </div>
  
  )
}

export default SignUp