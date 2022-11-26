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
 
  return (
    <div>
      <AuthProvider>

      <Nav/>
      <FriendList/>
     <Routes>

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPw />} />
      <Route path="/update-profile"     element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                } />
      <Route path="/"     element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                } />
      <Route path="/store" element={
      <PrivateRoute>
      <Store />
      </PrivateRoute>
      } />
      <Route path="/store/:game" element={
        <PrivateRoute>

      <GameInfo />
        </PrivateRoute> 
      } />
      <Route path='*' element={<E404 />} />

     </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
