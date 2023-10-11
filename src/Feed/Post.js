import React,{forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOpitons from './InputOptions';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { ChatOutlined, SendOutlined, ShareOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/User/userSlice';
const Post=forwardRef(({name,description,message,photoUrl},ref) =>{
  const user=useSelector(selectUser);
  return (
    <div ref={ref} className="post">
       <div className="post_header">
        <Avatar >{name[0]}</Avatar>
        <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
       </div>
       <div className="post_body">
        <p>{message}</p>
       </div>
       <div className="post_buttons">
         <InputOpitons Icon={ThumbUpOutlinedIcon} title='Like' color='gray'/>
         <InputOpitons Icon={ChatOutlined} title='Comment' color='gray'/>
         <InputOpitons Icon={ShareOutlined} title='Share' color='gray'/>
         <InputOpitons Icon={SendOutlined} title='Send' color='gray'/>
       </div>
    </div>
  )
} )

export default Post