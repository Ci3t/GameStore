import React, { useState } from 'react'



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
    <>
    HomePage
    {error}
    <Link to="/update-profile">Update</Link>
    <button onClick={handleLogOut}>LogOut</button>
    </>
      
      // <AuthProvider>

      // <Container className='d-flex align-items-center justify-content-center'
      // style={{minHeight:'100vh'}}
      // >
      //   <div className='w-100' style={{maxWidth:'400px'}}>
      // <SignUp/>
      // </div>
      //   <div className='w-100' style={{maxWidth:'400px'}}>
      // <SignIn/>
      // </div>
      // </Container>
    
      // </AuthProvider>
    
  )
}

export default HomePage