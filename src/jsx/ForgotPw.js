import React, {useState } from "react";
import {Alert } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { Link,Navigate } from "react-router-dom";



function ForgotPw() {
  const [loginEmail, setLoginEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [regError, setRegError] = useState('');
  const [sendMsg, setSendMsg] = useState('');
  const {resetPaswword , currentUser} = useAuth()


  const handleReset=async(e)=>{


    try{
        setRegError('')
        setIsLoading(true)
       await resetPaswword(loginEmail)
       setSendMsg('Check Inbox for new password')
    }catch(e){
        setRegError(e)
    }
    setIsLoading(false)
  }





  return (
    <div>
      {currentUser && (
        <div>
          logged in as : {currentUser.email}

        </div>
      )}
      {!currentUser && (
        <>
          <div>
            <h3>Password Reset</h3>
            {sendMsg}
            
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
      
    
          
            <button disabled={isLoading} onClick={handleReset}>Reset</button>

            <Link to="/login">Log In</Link>
            {regError && <Alert variant={'danger'}>{regError?.message}</Alert>}
          </div>

          <div className="w-100 text-center mt-2">
            Need an account?<Link to={'/signup'}>Sign Up</Link>
            
             
          </div>
          
         
        </>
      )}
    </div>
  );
}

export default ForgotPw;
