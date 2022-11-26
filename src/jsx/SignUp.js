import React, {useState } from "react";
import { Alert } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";


function SignUp() {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [regError, setRegError] = useState('');
  const {signup , currentUser} = useAuth()

  const handleSignUp =async()=>{


    if(regPassword !== regConfirmPassword){
        return setRegError('Pw Do not Match')
    }
    try{
        setRegError('')
        setIsLoading(true)
       await signup(regEmail,regPassword)
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
            <h3>Register</h3>
            
            <input
              type="email"
              value={regEmail}
              onChange={(e) => {
                setRegEmail(e.target.value);
              }}
            />
        
            <input
              type="password"
              value={regPassword}
              onChange={(e) => {
                setRegPassword(e.target.value);
              }}
            />
            <input
              type="password"
              value={regConfirmPassword}
              onChange={(e) => {
                setRegConfirmPassword(e.target.value);
              }}
              placeholder={'confirm Password'}
            />
            <button disabled={isLoading} onClick={handleSignUp}>Sign up</button>
            {regError && <Alert variant={'danger'}>{regError?.message}</Alert>}
          </div>

          <div className="w-100 text-center mt-2">
            already have an account? <Link to={'/login'}>Log In</Link>
          </div>
         
        </>
      )}
    </div>
  );
}

export default SignUp;
