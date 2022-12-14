import React, { useState } from "react";
import "./App.css";
import {Route, Routes} from 'react-router-dom'
import Nav from "./jsx/nav/Nav";
import HomePage from "./jsx/homePage/HomePage";
import Store from "./jsx/store/Store";
import GameInfo from "./jsx/store/GameInfo";
import FriendList from "./jsx/Friendlist/FriendList";
import E404 from "./jsx/homePage/E404";
import {AuthProvider} from './contexts/AuthContext'
import SignUp from "./jsx/SignUp";
import Login from "./jsx/Login";
import {PrivateRoute} from './jsx/Login'
import ForgotPw from "./jsx/ForgotPw";
import UpdateProfile from "./jsx/UpdateProfile";




function App() {
  const [showFriends, setShowFriends]= useState(false)
 
  return (
    <div>
      <AuthProvider>

     
     
     <Routes>

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPw />} />
      <Route path="/update-profile"     element={
                  <PrivateRoute>
                     <Nav setShowFriends={setShowFriends}/>
                    <UpdateProfile />
                    <FriendList showFriends={showFriends}/>
                  </PrivateRoute>
                } />
      <Route path="/"     element={
                
                    <HomePage />
                   
                } />
      <Route path="/store" element={
      <PrivateRoute>
         <Nav setShowFriends={setShowFriends} />
        <div className="flex-AppJs-Container">
         <FriendList showFriends={showFriends} />

        </div>
         <Store />
      </PrivateRoute>
      } />
      <Route path="/store/:id" element={
        <PrivateRoute>
           <Nav setShowFriends={setShowFriends}/>
      <GameInfo />
      <FriendList showFriends={showFriends}/>
        </PrivateRoute> 
      } />
      <Route path='*' element={<E404 />} />

     </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
