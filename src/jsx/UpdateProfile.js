import React, {useState } from "react";
import { Alert } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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
      {/* {currentUser && (
        
      )} */}
      {currentUser && (
        <>
          <div>
            <h3>Update Profile</h3>
        <div>
          logged in as : {currentUser.email}

        
    
        </div>
            
            <input
              type="email"
              value={regEmail}
              onChange={(e) => {
                setRegEmail(e.target.value);
              }}
              placeholder={currentUser.email}
            />
        
            <input
              type="password"
              value={regPassword}
              onChange={(e) => {
                setRegPassword(e.target.value);
              }}
              placeholder={'Keep Blank to keep the same Password'}
            />
            <input
              type="password"
              value={regConfirmPassword}
              onChange={(e) => {
                setRegConfirmPassword(e.target.value);
              }}
              placeholder={'Keep Blank to keep the same Password'}
            />
            <button disabled={isLoading} onClick={handleUpdate}>Update</button>
            {regError && <Alert variant={'danger'}>{regError?.message}</Alert>}
          </div>

          <div className="w-100 text-center mt-2">
            already have an account? <Link to={'/'}>Cancel</Link>
          </div>
         
        </>
      )}
    </div>
  );
}

export default UpdateProfile;
