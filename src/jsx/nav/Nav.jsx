import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './nav.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
 
} from "mdb-react-ui-kit";
import { useAuth } from "../../contexts/AuthContext";



function Nav({setShowFriends}) {
  const navigate = useNavigate()
  const {logout,currentUser} = useAuth()
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
    <div>
      <>
    
   
    
        <MDBNavbar id={'navbar-bgColor'} fixed='top'  >
          
          <MDBContainer fluid>
            <MDBNavbarBrand>
              <div className="logoNavCont">

              <img className="logoNavBar"  src="./images/logo.png"/><Link to={'/'}>Ci3t GameStore</Link>
              
              </div>
              </MDBNavbarBrand>

            <div className="nav-Link">
              <Link to="/">Home</Link>

              <Link to="/store">Store</Link>
            </div>
            <div className="navbar-links-update">
              <Link><button onClick={()=>{setShowFriends(prev=>!prev)}}>Friends</button></Link>
            <Link to="/update-profile">Update</Link>
            <Link>{currentUser?.email}</Link>
            <Link onClick={handleLogOut}>LogOut</Link>
            </div>
          </MDBContainer>
        </MDBNavbar>
        {error}
      </>
    </div>
  );
}

export default Nav;
