import React from 'react'
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import  auth  from '../firebase';

import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const auths = getAuth(auth); 
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

   const handleSubmit = (e) => {
      e.preventDefault();
      
      
      signInWithEmailAndPassword(auths, email, password)
        .then((userCredential) => {
          // Signed in 
          
          var user = userCredential.user;
          alert("You're logged in");
          if(user !== ""){
           
            console.log(user.email)
            //firebase.database().ref('users').child(user)
            navigate('/feed');
            //navigate('/profile');
            setEmail('');
            setPassword('');
           //console.log(email)
          }
        })
        .catch(error => {
          console.log(error);
        });
    };

        return(
            <>
            {/* <div>
                <h1>Please Log In</h1>
            <form onSubmit={signIn}>
            <input
              id="email"
              name="Email"
              type="email"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <input
              id="pw"
              name="Password"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
    
            <button type="submit">Log In</button>
          </form>
         
          </div>
          
     <div>
       <Link to="./create">Create Account</Link>
      </div> */}
     
      <div className="wrapper">
      
        <div className="container p-0">
            <div className="row no-gutters">
                <div className="col-md-6 text-center pt-5">
                    <div className="sign-in-detail text-white">
                        {/* <a className="sign-in-logo mb-5" href="/#"><img src="" className="img-fluid" alt="logo" loading="lazy"/></a> */}
                        <div className="sign-slider overflow-hidden swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                           
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
                <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
                    <div className="sign-in-from">
                        <h1 className="mb-0">Sign in</h1>
                        <p>Enter your email address and password to access admin panel.</p>
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Email address</label>
                                <input className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email"
                                
                                name="Email"
                                type="email"
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                                />
                            </div>
                            <div className="form-group"> 
                                <label className="form-label">Password</label>
                                <a href="/#" className="float-end">Forgot password?</a>
                                <input className="form-control mb-0" id="exampleInputPassword1" placeholder="Password"
                                 
                                 name="Password"
                                 type="password"
                                 value={password}
                                 onChange={event => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="d-inline-block w-100">
                                <div className="form-check d-inline-block mt-2 pt-1">
                                    <input type="checkbox" className="form-check-input" id="customCheck11"/>
                                    <label className="form-check-label">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-primary float-end">Sign in</button>
                            </div>
                            
                        </form>
                        <div className="sign-info">
                                <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to="./register">Sign up</Link></span>
                            
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
       </>
          )

     
         
        
}

export default Login