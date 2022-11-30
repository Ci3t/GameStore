import React, { useState } from 'react'
import './homepage.css'
import Typewriter from 'typewriter-effect';

import {AuthProvider} from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext";

function HomePage() {
  const navigate = useNavigate()
  const {logout} = useAuth()
  const [error,setError] = useState(null)
  
  const handleLogOut=async()=>{
    setError('')
    try{
        
       await logout()
       navigate('/')
    }catch(e){
        setError(e)
    }
   
  }


  return (
    <div className='homePage-fullCont'>
    <div className='homePage-imgBG-cont'></div>

    <div className='homePage-logo'>
    <img width='450px'src='./images/logo.png'/>
    </div>
   
      
    <div className='homePage-text-Check'>
        
      <h1>Play your way and experience of gaming at home</h1>
      <p>Online game store aims to make it easy for customers.</p>
      <p>is always up to date in the world of gaming.</p>
      <p>Easier to Check if the game can run for you with a simple check</p>
    
    </div>
    <div className="homePage-typeWriter">
    

    <Typewriter
 options={{
   strings: ['Welcome To Gaming Store', 'Get Started Register For Free'],
   autoStart: true,
   loop: true,
 }}
/>
 
 </div>
    <div className='HomePage-button-Cont'>
      <button className='HomePage-button'> <Link to="/store">Get Started</Link> </button>
    </div>
    </div>
      

    
  )
}

export default HomePage