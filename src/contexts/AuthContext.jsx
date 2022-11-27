import React from 'react'
import { useEffect } from 'react'
import { useState,useContext  } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail , updateEmail,updatePassword,signInAnonymously } from 'firebase/auth'
import { auth } from "../firebase";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


//! TODO: update Email and Pw 
export function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)


     function signup(regEmail, regPassword) {
           return createUserWithEmailAndPassword(auth, regEmail, regPassword);
        
     }
     function login(loginEmail, loginPassword) {
           return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        
     }
     function anonLogin() {
           return signInAnonymously(auth);
        
     }
     async function logout() {
        return await auth.signOut();
      }
     async function resetPaswword(email) {
        return await sendPasswordResetEmail(auth,email)
      }
     async function updateEmail1(email) {
        return await updateEmail(currentUser,email)
      }
     async function updatePassword1(password) {
        return await updatePassword(currentUser,password)
      }

   useEffect(()=>{
    const unsubscribe =  auth.onAuthStateChanged(user=>{
        setCurrentUser(user)
        setIsLoading(false)
    })

    return unsubscribe
   },[])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPaswword,
        updateEmail1,
        updatePassword1,
        anonLogin
    }
  return (
    
    <AuthContext.Provider value={value}>
        {!isLoading && children}
    </AuthContext.Provider>
  )
}

