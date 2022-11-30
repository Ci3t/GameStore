import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './nav.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import { useAuth } from "../../contexts/AuthContext";


function Nav({setShowFriends}) {
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
    <div>
      <>
    
      {/* fixed='top'  */}
    
        <MDBNavbar fixed='top' light bgColor="dark">
          <MDBContainer fluid>
            <MDBNavbarBrand>Fixed top</MDBNavbarBrand>

            <div className="nav-Link">
              <Link to="/">Home</Link>

              <Link to="/store">Store</Link>
            </div>
            <div>
              <Link><button onClick={()=>{setShowFriends(prev=>!prev)}}>Friends</button></Link>
            <Link to="/update-profile">Update</Link>
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
