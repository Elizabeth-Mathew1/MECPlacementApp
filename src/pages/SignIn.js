import React, { Component, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import Header from '../components/Header/Header';
import './SignIn.css';
import { useUserAuth } from '../context/UserAuthContext';
import { Form, Alert,Button } from "react-bootstrap";

export default function Signin(){
  const [passwordEye, setPasswordEye]=useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();
  let navigate=useNavigate();
  
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye)
}
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/application");
    } catch (err) {
      setError(err.message);
    }
  };

  
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value) 
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value) 
    }

    const checkPasswords=(e)=>{
        if(document.getElementById('password').value === document.getElementById('conf-password').value){
            document.getElementById('passwords-not-same-error').className='hidden-error';
            document.getElementById('password').classList.remove('error-input')
            document.getElementById('conf-password').classList.remove('error-input')
    
        }
        else{
            e.preventDefault();
            document.getElementById('passwords-not-same-error').className='visible-error'; 
            document.getElementById('password').className='error-input';
            document.getElementById('conf-password').classList.add('error-input');
        }
      }
    return (
      <div className='signin-page-container'>
        <div className='title-section'>
            <h1 className='signinpage-pctitle'>Placement Cell</h1>
        </div>
        <div className='signin-form-container'>
        {error && <Alert variant="danger">{error}</Alert>}
            <form  onSubmit={handleSubmit} className='sa'> 
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" onChange={handleChangeEmail}></input>
                
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type={(passwordEye === false)?"password":"text"} id="password" onChange={handleChangePassword}></input> 
                    {
                        (passwordEye === false)? <AiFillEyeInvisible className='visibility-icon' onClick={handlePasswordClick}/>:
                        <AiFillEye className='visibility-icon' onClick={handlePasswordClick}/>
                    }  
                
            </div>
            <div className='input-field signin-button-container'>
                <button className='signin-button' type = "Submit">Sign In</button>
            </div>
        </form>
        <div className='formfooter' >Don't have an account? <Link to="/signup" className="">Sign Up</Link></div>
        </div>
        </div>
    )
 }