import React, { useState } from 'react'
import './signup.css';
import {VscSignIn} from "react-icons/vsc";
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/customButton/CustomButton';
import signinlogo from '../../../assets/images/sign-in.png'
import { Dropdown } from 'react-bootstrap';
import { RiContactsBookLine } from 'react-icons/ri';
import { CustomToggle, CustomMenu } from '../../../components/dropdown/CustomDropdown';
import { connect } from "react-redux";
import { useNavigate} from 'react-router-dom'
import _ from 'lodash'

const drpOptions = [
  {key:"1", option: "Red" },
  {key:"2", option: "Blue" },
  {key:"3", option: "Orange" },
  {key:"4", option: "Pink" }
]

const SignUp = ({ signupError, signup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConpassword] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [user_type, setUser_Type] = useState('Select a role');
  const [eventKey, setEventKey] = useState('');

  const [error, setError] = useState('');

  const navigation = useNavigate();

  const signupp = () => {
    if(email == ''){
      setError('Enter email');
    } else if(first_name == ''){
      setError('Enter first name');
    }  else if(last_name == ''){
      setError('Enter last name');
    } else{
      console.log("Succes")
      signup({
        email,
        first_name,
        last_name,
        navigation
      })
    }
  }

  return (
      
      
    <div id="signup" >
        <div className='su_wrapper' >
          <div className="left_section d-none d-md-block w-md-50" >
            <p className='welcomeOkr' >Welcome to OKR</p>
            <p className='welcomeOkr' >Platform</p>
            <img className='logo' src={signinlogo} alt="" />
          </div>
          <div className="right_section px-5 pt-5 w-100 w-md-50">
            <div className='icon pb-2' >
              <VscSignIn size={50} />
            </div>
            <div className='suSection' >
              <p className='hello' >Registration</p>
              <p className='welcome' >Welcome to the OKR system</p>
              <div className='w-100 pt-3' >
                <CustomInput type={'text'} className={'my-3'}  placeholder={"First Name"} value={first_name} setValue={setFirst_Name} />
                <CustomInput type={'text'} className={'my-3'}  placeholder={"Last Name"} value={last_name} setValue={setLast_Name} />
                {/* <div className={'inputwrap2 mb-4 w-100'} >
                <Dropdown  onSelect={(eventKey, event)=>{
                    setEventKey(eventKey)
                    setUser_Type(event.target.innerText)
                }} >
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    { user_type }
                    </Dropdown.Toggle>
                
                    <Dropdown.Menu as={CustomMenu}>
                        {
                            drpOptions.map((item)=>
                                <Dropdown.Item active={eventKey == item.key ? true : false} eventKey={item.key}>{item.option}</Dropdown.Item>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown> 
                </div> */}
                {/* <CustomInput type={'text'} className={'my-3'}  placeholder={"User Type"} value={user_type} setValue={setUser_Type} /> */}
                <CustomInput type={'email'} className={'my-3'}  placeholder={"Email ID"} value={email} setValue={setEmail} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"} />
                {/* <CustomInput type={'password'} className={'my-3'}  placeholder={"Password"} value={password} setValue={setPassword} /> */}
                {/* <CustomInput type={'password'} className={'my-3'}  placeholder={"Confirm Password"} value={conpassword} setValue={setConpassword} /> */}
                
                <span style={{color : 'red'}}>{error}</span>
                
                <CustomButton onPress={signupp} className={'mt-5'} title={"Register"} />
              </div>
            </div>
          </div>
        </div>
    </div>
  
  )
}

const mapStateToProps = ({app={}}) => {
  const signupError = _.get(app, "signuperror", '');
  return{
    signupError
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch({type : "signupcalled", payload : data}),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)