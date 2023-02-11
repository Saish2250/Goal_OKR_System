import React, {useState} from 'react'
import './header.css'
import { GrNotification } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import moment from 'moment'
import _ from 'lodash'
import { connect } from 'react-redux';

const Header = ({admindata}) => {
  return (
    <div id="header">
        <div className='header-first px-4'>
            <div>
                <p className='logo'>Aqua tech</p>
            </div>
            <div>
                <div className='d-flex align-items-center' >
                    <div className='date-wrap text-end me-5'>
                        <p>{moment().format('YYYY-MM-DD')}</p>
                        <p>( Goa / India )</p>
                    </div>
                    {/* <div className='noti-icon'>
                        <GrNotification />
                        <div className='noti-count' >5</div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className='header-second px-4 ' >
            <div>
                <div className='image-avatar' >
                    {/* <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" /> */}
                    <FaUser size={25} />
                </div>
            </div>
            <div className='name-part' >
                <p>{admindata?.admin_name}</p>
                <p>{admindata?.role}</p>
            </div>
            <div>
                <div className='arrow-wrapper' >
                    <BiLogOut />
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = ({app={}}) => {
    const admindata = _.get(app, "adminloginsuccess", {});
    return{
        admindata
    }
}


export default connect(mapStateToProps, null)(Header)