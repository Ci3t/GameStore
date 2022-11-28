import React, {useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

function UpdateProfile() {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [regError, setRegError] = useState('');
  const {updateEmail1,updatePassword1 , currentUser} = useAuth()
  const navigate = useNavigate()

  const handleUpdate =()=>{


    if(regPassword !== regConfirmPassword){
        return setRegError('Pw Do not Match')
    }

    const promises = []
    setIsLoading(true)
    setRegError('')
    if(regEmail !== currentUser.email){
        promises.push(updateEmail1(regEmail))
    }
    if(regPassword){
        promises.push(updatePassword1(regPassword))
    }

    Promise.all(promises).then(()=>{
        navigate('/')
    }).catch((e)=>{
        setRegError('Failed to Update')
        console.log(e)
        console.log(e.message)
    }).finally(()=>{
        setIsLoading(false)
    })
    try{
        setRegError('')
        setIsLoading(true)
    //    await signup(regEmail,regPassword)
    }catch(e){
        setRegError(e)
        console.log(e)
        console.log(e.message)
    }
    setIsLoading(false)
  }


  return (
    <div>
        <>

<div class="logInContainerModal">
<MDBContainer style={{maxWidth: '60em', paddingTop:'2em'}} >
<div className="overlay"></div>
<MDBCard>
  <MDBRow className='g-0'>
      {currentUser && 
      <>
      
      <MDBCol md='6'>
      <MDBCardImage style={{backgroundSize:'cover'}} src={`/images/login3.jpg`} alt="login form" className='rounded-start w-100'/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>


        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0 my-4 pb-3">GameStore</span>
        </div>
        
      

       

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"
          value={regEmail}
              onChange={(e) => {
                setRegEmail(e.target.value);
              }}
              placeholder={currentUser.email}
          />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
          value={regPassword}
          onChange={(e) => {
            setRegPassword(e.target.value);
          }}
          placeholder={'Keep Blank to keep the same Password'}
          />
          <MDBInput wrapperClass='mb-4' label='Password Confirm' id='formControlLg' type='password' size="lg"
          value={regConfirmPassword}
          onChange={(e) => {
            setRegConfirmPassword(e.target.value);
          }}
          placeholder={'Keep Blank to keep the same Password'}
          />

        <MDBBtn disabled={isLoading} onClick={handleUpdate}  className="mb-4 px-5" color='dark' size='lg'>Update</MDBBtn>
        
        {regError && <Alert variant={"danger"}>{regError?.message}</Alert>}
        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}><Link to={'/'}>Cancel</Link></p>
        
      

      </MDBCardBody>
    </MDBCol>
      
    </>
    }
  </MDBRow>
</MDBCard>

</MDBContainer>
</div>


    </>



    {/* !!!!!!! */}
    </div>
  );
}

export default UpdateProfile;
