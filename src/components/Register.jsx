import React from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { 
  //getFirestore,
 // query,
 // getDocs,
  collection,
 // where,
  addDoc, } from "firebase/firestore";
 
import { useNavigate } from 'react-router-dom'
import {useState} from 'react';

//import { collection, addDoc } from "firebase/firestore";
import  app from '../firebase';
import db from '../firebase';

 function Register() {
    const navigate = useNavigate();
    const auth = getAuth(app);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [username, setUserName] = useState("");
   
   const register = async (event, fname, lname, username, email, password)=> {
    event.preventDefault();
        try {
       
       let userCredential = await createUserWithEmailAndPassword(auth, email, password)
     
        
       let user = userCredential.user;
        
            await addDoc(collection(db, "users"), {
              uid: user.uid,
              fname,
              lname,
              username,
              authProvider: "local",
              email,
              
         
   
      
        });  
        if (!fname || !lname || !username){
          event.preventDefault();
              alert("Please enter missing info");
            } 
        if(user){
          event.preventDefault();
            alert("Account has been created");
            //console.log("Hello", user.email);
            navigate("/");
            
            // setEmail('');
            // setPassword('');
            
        }
       
    }   
      catch(error) {
        const errorCode = error.code;
        
        console.log("Register", errorCode)
       
        alert("Try again later");
       
      };
    }
  
        return(
            <div>
                <h1>Create Account</h1>
            <form onSubmit={register}>
            <input
              id="fname"
              name="fname"
              type="fname"
              placeholder="First Name"
              onChange={event => setfName(event.target.value)}
              value={fname}
            />
             <input
              id="lname"
              name="lname"
              type="lname"
              placeholder="Last Name"
              onChange={event => setlName(event.target.value)}
              value={lname}
            />
            <input
            id="username"
            name="username"
            type="username"
            placeholder="User Name"
            onChange={event => setUserName(event.target.value)}
            value={username}
          />
            <input
              id="email"
              name="Email"
              type="email"
              placeholder="E-mail Address"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <input
              id="pw"
              name="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
    
            <button type="submit">Create</button>
          </form>
          </div>

          )
}

export default Register;