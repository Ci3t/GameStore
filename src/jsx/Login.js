import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import './login.css'
import { padding } from "@mui/system";
import { Padding } from "@mui/icons-material";
export function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShownLogin, setIsShownLogin] = useState(false);
  const [regError, setRegError] = useState("");
  const { login, currentUser, anonLogin } = useAuth();
const Navigate =  useNavigate()
  const handleSignIn = async (e) => {
    try {
      setRegError("");
      setIsLoading(true);
      await login(loginEmail, loginPassword);
      Navigate('/store')
    } catch (e) {
      setRegError(e);
    }
    setIsLoading(false);
  };
  const handleAnonSignIn = async (e) => {
    try {
      setRegError("");
      setIsLoading(true);
      await anonLogin();
      Navigate('/store')
    } catch (e) {
      setRegError(e);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <>
    {/* { <Link className="ml7">
  <button onClick={()=>{
    setIsShownLogin(prev=>!prev)
  }} class="btnLog">
    <span class="btnLogspan">Log In</span>
  </button>
    </Link> } */}
    
    <div class="logInContainerModal">
    <MDBContainer style={{maxWidth: '60em', paddingTop:'2em'}} >
    <div className="overlay"></div>
    <MDBCard style={{backgroundColor:'rgb(18 19 21)',color:'#d9d9d9'}}>
    {currentUser && <div>logged in as : {currentUser.email}</div>}
      <MDBRow className='g-0'>
          {!currentUser && 
          <>
         
          <MDBCol md='6'>
          <MDBCardImage src={`/images/login1.jpg`} alt="login form" className='rounded-start w-100'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

          {/* <Link className="ml7">
  <button onClick={()=>{
    setIsShownLogin(prev=>!prev)
  }} class="btnLog">
    <span class="btnLogspan ">Close</span>
  </button>
    </Link> */}

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              <span className="h1 fw-bold mb-0">GameStore</span>
            </div>
            
          

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
            <div className="social-container">
            Anonymous Sign In:
            <Link disabled={isLoading} onClick={handleAnonSignIn} outline color='danger'>
             <AccountCircleIcon/> 
              </Link>
            </div>

              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
              />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              />

            <MDBBtn disabled={isLoading} onClick={handleSignIn}  className="mb-4 px-5" color='dark'  size='lg'>Login</MDBBtn>
            <Link className="forgotPw" to="/forgot-password">Forgot Password?</Link>
            {regError && <Alert variant={"danger"}>{regError?.message}</Alert>}
            <p className="mb-5 pb-lg-2" style={{color: '#c7c7c7'}}>Don't have an account? <Link className="signUpLink" to={"/signup"}>Sign Up</Link></p>
            
          

          </MDBCardBody>
        </MDBCol>
          
        </>
        }
      </MDBRow>
    </MDBCard>

  </MDBContainer>
  </div>


        </>
   
  );
}

export default Login;
