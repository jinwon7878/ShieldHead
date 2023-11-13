import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../cookie/cookie";
import axios from 'axios';
import news from '../assets/images/news.png'
import styled from 'styled-components';
import Button from "@mui/material/Button";
import BottomTabLayout from './BottomTabLayout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // 전체 높이
  background-color: #fff;
  //margin: 0; // 마진 제거
`;

const InnerFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  margin: 1px; // 각 박스 간의 간격
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "Orbitron", sans-serif;
`;

const NewsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  width: 65%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
`;

const NewsTextBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  font-family: "Noto Sans", sans-serif;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
`;

const StyledImage = styled.img`
  // max-width: 100%; // 이미지의 최대 너비
  // max-height: 100%; // 이미지의 최대 높이
  width: 390px;
  height: 400px;
  border-radius: 8px; // 이미지 모서리 둥글게
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 1px; // 각 박스 간의 간격
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "Orbitron", sans-serif;
`;



function HomeScreen() {
  const navigate = useNavigate();
  const accessToken = getCookie('accessToken');
  let isUser = getCookie('isUser');
  const [isUserFetching, setisUserFetching] = useState(false);

  async function getIsUser() {
    if (isUserFetching) return; // return if it early fetching

    console.log('getIsUser 호출');

    try {
      setisUserFetching(true); // Set fetching to true

      const response = await axios.get(
        "http://localhost:8080/login",
        {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        }
      )
      isUser = await response.data.flag;
      console.log("fetch isUser type: ", typeof(isUser));
      console.log("fetch isUser: ", isUser);

      setCookie('isUser', `${isUser}`);
      setisUserFetching(false); // Reset fetching to false
    }
    catch(error) {
      console.log('Error: ', error);
      setisUserFetching(false); // Reset fetching even in case of error
    }
  }

  useEffect(() => {
    async function checkUserStatus() {
      await getIsUser();
      // Use navigate based on the isUser value
      if (!isUser) {
        navigate('/signUpForm');
      }
    }
    checkUserStatus();
  }, [isUser, navigate]);

  const handleNavigateProblem = () => {
    navigate('/homeProblem');
  }
  
  return (
    <>
    {isUser && (
    <Container>
      <InnerFlexBox height="211px">ShieldHead</InnerFlexBox>
      <NewsBox height="393px">
        <InnerFlexBox height="350px">
          <a href='https://www.jejusori.net/news/articleView.html?idxno=420954'>
            <StyledImage src={news} alt="이미지" />
          </a>
        </InnerFlexBox>
      </NewsBox>

      <InnerFlexBox height="150px">
        <Button variant="contained" onClick={handleNavigateProblem}>문제 풀러가기</Button>
      </InnerFlexBox>

      <MenuBox height="100px">홈 스토어 사람</MenuBox>
      <BottomTabLayout></BottomTabLayout>
    </Container>
    )}
    </>
  )
}

export default HomeScreen