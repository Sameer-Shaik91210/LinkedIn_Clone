import React, { useState } from 'react';
import './Login.css';
import { auth } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {login} from '../features/User/userSlice';

function Login() {
    const dispatch=useDispatch();
    const [name,setName]=useState('');
    const [profilePic,setProfilePic]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const register=()=>{
       if(!name){
        return alert("please enter Full Name:");
       }
       createUserWithEmailAndPassword(auth,email,password).then(
        (userAuth)=>{
            const user = userAuth.user;
            return updateProfile(user, {
              displayName: name,
              photoURL: profilePic
            })
             .then(()=>{
                dispatch(login(
                    {email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic
                }
                ))
             })
        }
       ).catch((error)=>{alert(error.message)
        console.log(error.code,'error Code') ;
        console.log(error.message,'error Message');
      });
    }
    const loginToApp=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            dispatch(login(
                {email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoURL:userAuth.user.photoURL,
            }
            ))
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error);
          });
    }

  return (
    <div className='login'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUR2xk41ocS3P1qKU5f_cZg59RmUyTvetxpQ&usqp=CAU' alt=''/>
      <form>
        <input
         value={name}
         onChange={e=>{setName(e.target.value)}}
         placeholder='Full Name (Required if Registering)'  type="text" />
        <input
         value={profilePic}
         onChange={e=>{setProfilePic(e.target.value)}}
         placeholder='Profile Pic URL(optional)' type='text'/>
        <input
         value={email}
         onChange={e=>{setEmail(e.target.value)}}
         placeholder='Email' type='email'/>
        <input
         value={password}
         onChange={e=>{setPassword(e.target.value)}}
         placeholder='Password' type='password'/>
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?{' '}
      <span className='login_register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login