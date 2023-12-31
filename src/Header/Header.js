import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import {logout} from  '../features/User/userSlice';
import { auth } from '../Firebase/firebase';

function Header() {
  const dispatch=useDispatch();
  const logOut=()=>{
    dispatch(logout());
    auth.signOut();
  }
  return (<>
    <div className="header">
     <div className="header_left">
        <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt=''/>
        <div className="header_search">
          <SearchIcon/>
          <input placeholder='Search' type='text'/>
        </div>
     </div>
     <div className="header_right">
      <HeaderOption Icon={HomeIcon} title='Home'/>
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
      <HeaderOption Icon={ChatIcon} title='Messaging'/>
      <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
      <HeaderOption onClick={logOut} avatar='https://media.licdn.com/dms/image/D5635AQFYq6DxAAnM6Q/profile-framedphoto-shrink_100_100/0/1694696624516?e=1697432400&v=beta&t=FF39IEOREZrHtSTSRTtfeVwuysCcDDxnxs8BoRj23P8' title='me'/>
     </div>
    </div>
  </>)
}

export default Header