import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import {selectUser} from '../features/User/userSlice'
function Sidebar() {
    const user=useSelector(selectUser);
    const  displayName=user?.displayName ||'';
    const recentItem=(topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <span>{topic}</span>
        </div>
    )

    
  return (
    <div className="sidebar">
    <div className="sidebar_top">
       <img src='https://w7.pngwing.com/pngs/762/396/png-transparent-beach-beach-computer-wallpaper-palm-tree-world-thumbnail.png' alt=" "/>
       <Avatar src={user?.photoURL}  className='sidebar_avatar'>{displayName[0]}</Avatar>
       <h2>{user?.displayName}</h2>
       <h4>{user?.email}</h4>
    </div>
    <div className="sidebar_stats">
        <div className="sidebar_stat">
            <p>Who viewed my profile</p>
            <p className='sidebar_statNumber'>2,534</p>
        </div>
        <div className="sidebar_stat">
            <p>views on post</p>
            <p className='sidebar_statNumber'>1,920</p>
        </div>
    </div>
    <div className="sidebar_bottom">
      <p>Recent</p>
      {recentItem('reactjs')}
      {recentItem('Java')}
      {recentItem('Spring')}
      {recentItem('reduxtoolkit')}
      {recentItem('problemsolving')}
    </div>
    </div>
    
    
  )
}

export default Sidebar