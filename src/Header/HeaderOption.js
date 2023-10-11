import React from 'react'
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import {selectUser} from '../features/User/userSlice'


function HeaderOption({avatar,Icon,title,onClick}) {
  const user=useSelector(selectUser);
    // Make sure user and user.displayName are not null or undefined
    const displayName = user?.displayName || '';
  return (
    <div className="headerOption" onClick={onClick}>
        {Icon && <Icon className='headerOption_Icon'/>}
        {avatar && (
            <Avatar src={user?.photoURL} className='headeroption_Icon'>{displayName[0]}</Avatar>
        )}
        <h3 className='headerOption_title'>
            {title}
        </h3>
    </div>
  )
}

export default HeaderOption