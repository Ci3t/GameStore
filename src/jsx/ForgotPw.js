import React, {useState } from "react";
import {Alert } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

import './forgotPW.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';


function ForgotPw() {
  const [loginEmail, setLoginEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [regError, setRegError] = useState('');
  const [sendMsg, setSendMsg] = useState('');
  const {resetPaswword , currentUser} = useAuth()


  const handleReset=async(e)=>{


    try{
      setSendMsg('')
        setRegError('')
        setIsLoading(true)
       await resetPaswword(loginEmail)
       setSendMsg('Password Sent to Email PleaseCheck Inbox or Spam Folder for new password')
    }catch(e){
        setRegError(e)
    }
    setIsLoading(false)
  }





  return (
    <div >
     
      {!currentUser && (
        <>
         
        
<div id={'forgotPwImgBG'}>  
<MDBContainer   style={{maxWidth: '60em', paddingTop:'2em'}} >
  
<div className="overlay"></div>
<MDBCard style={{backgroundColor:'rgb(18 19 21)',color:'#d9d9d9'}}>

  <MDBRow className='g-0'>
      {!currentUser && 
      <>
     
      

    <MDBCol >
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">Reset Password</span>
        </div>
        
      
        
        

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
          />
           {sendMsg}

        <MDBBtn disabled={isLoading} onClick={handleReset}  className="mb-4 px-5" color='dark'  size='lg'>Reset</MDBBtn>
        <p>Have an Account? <Link className="forgotPw2" to="/login">Login</Link> </p>
        {regError && <Alert variant={"danger"}>{regError?.message}</Alert>}
        <p className="mb-5 pb-lg-2" style={{color: '#c7c7c7'}}>Don't have an account? <Link className="signUpLink" to={"/signup"}>Sign Up</Link></p>
        <p className="mb-5 pb-lg-2 " id={'cancelPW'} style={{color: '#393f81'}}><Link to={'/'}>Cancel</Link></p>
        
      

      </MDBCardBody>
    </MDBCol>
      
    </>
    }
  </MDBRow>
</MDBCard>
</MDBContainer>
</div>
        </>
      )}
    </div>
  );
}

export default ForgotPw;
