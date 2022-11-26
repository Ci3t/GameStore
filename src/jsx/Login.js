import React, {useState } from "react";
import {Alert } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { Link,Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [regError, setRegError] = useState('');
  const {login , currentUser,logout} = useAuth()


  const handleSignIn=async(e)=>{


    try{
        setRegError('')
        setIsLoading(true)
       await login(loginEmail,loginPassword)
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
            <h3>Log In</h3>
            
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
      
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          
            <button disabled={isLoading} onClick={handleSignIn}>Log In</button>

            <Link to="/forgot-password">Forgot Password</Link>
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

export default Login;
