import React from 'react';
import Navig from './Nav';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './Login'
function Profile() {

const auth = getAuth();
const user = auth.currentUser;

const navigate = useNavigate();


// Similar to componentDidMount and componentDidUpdate:

 


  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
   // console.log(displayName)
    const uid = user.uid;
    // ...
  } else {
    alert("No user found");
  }
  // useEffect(() => {
  //    if(user === null || user.email === null) {
      
  //    // 
  //     navigate('/');
  //    }
  //   });
  return (
    <>
    <Navig/>
     <div>Currently logged in as: { user.email } </div>
     
    </>
  )
}

export default Profile