import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './routes/HomeScreen';
import SignInScreen from './routes/SignInScreen';
import Auth from './auth/Auth';
import SignUpFormScreen from './routes/SignUpFormScreen';
import { getCookie } from './cookie/cookie';
import SolvedProblemScreen from './routes/SolvedProblemScreen';
import MyPageScreen from './routes/MyPageScreen';
import ProductScreen from './routes/ProductScreen';
import StoreScreen from './routes/StoreScreen';
import SignUpProblemScreen from './routes/SignUpProblemScreen';
import SignUpFinalScreen from './routes/SignUpFinalScreen';
import HomeProblemScreen from './routes/HomeProblemScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    async function init() {
      const token = await getCookie('accessToken');
      setIsLoggedIn(!!token);
      console.log('app useEffect, token: ', `${token}`);
    }
    init();
  }, []);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomeScreen /> : <SignInScreen />}></Route>
        <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signUpForm" element={<SignUpFormScreen />}></Route>
        <Route path="/signUpProblem" element={<SignUpProblemScreen />}></Route>
        <Route path="/signUpFinal" element={<SignUpFinalScreen />}></Route>
        <Route path="/homeProblem" element={<HomeProblemScreen />}></Route>
        <Route path="/solvedProblem" element={<SolvedProblemScreen />}></Route>
        <Route path="/store" element={<StoreScreen />}></Route>
        <Route path="/product" element={<ProductScreen />}></Route>
        <Route path="/myPage" element={<MyPageScreen />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
