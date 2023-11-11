import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './routes/HomeScreen'
import SignInScreen from './routes/SignInScreen'
import Auth from './auth/Auth';
import SignUpScreen from './routes/SignUpScreen';
import { getCookie } from './cookie/cookie';
import SolvedProblemScreen from './routes/SolvedProblemScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    async function init() {
      const token = await getCookie('accessToken');
      setIsLoggedIn(!!token);
    }
    init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomeScreen /> : <SignInScreen />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/signup" element={<SignUpScreen />}></Route>
        
        <Route path="/test" element={<SolvedProblemScreen />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
