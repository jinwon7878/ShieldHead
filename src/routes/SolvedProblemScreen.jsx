import React, { useEffect, useState } from "react";
import styled from "styled-components";
import instagram from "../assets/images/instagram.svg";
import arrow from "../assets/images/arrow.svg";
import { useNavigate, useLocation } from 'react-router-dom';
import { getCookie } from "../cookie/cookie";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // 전체 높이
  background-color: #fff;
  //margin: 0; // 마진 제거
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
`;

const TotalPoint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "NTR", sans-serif;
`;

const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "NTR", sans-serif;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
`;

const ProbTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
`;

const Points = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "NTR", sans-serif;
`;

const VideoLink = styled.a`
  text-decoration: none; // 밑줄 제거
  color: "#0500FF"; // 링크 색상 설정
  font-size: 14px; // 글자 크기 조정
`;

const ShareHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "NTR", sans-serif;
`;

const Share = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "NTR", sans-serif;
`;

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "NTR", sans-serif;
`;

function SolvedProblemScreen() {
  const [totalPoints, setTotalPoints] = useState(null);

  const location = useLocation();
  const circleStatus = location.state; //ex [true false false]
  let points = 0;
  let score = 0;
  console.log(circleStatus);
  for (let i=0; i<3; i++) {
    if (circleStatus[i]) {
      points += 1;
    }
  }
  switch (points){
    case 0:
      score = "0";
      break;
    case 1:
      score = "1/3";
      break;
    case 2:
      score = "2/3";
      break;
    case 3:
      score = "3/3";
      break;
    default:
      break;
  };

  const getOriginPoints = async () => {
    const userId = getCookie('userId');
    console.log(userId);
    const res = await axios.get(
      `http://localhost:8080/users/${userId}`
    )
    const originPoints = await res.data.point;
    let n = originPoints + points;
    setTotalPoints(n);
  }

  useEffect(()=>{
    getOriginPoints(); // get OriginPoints & set TotalPoints
  }, []);

  const getColor = (b) => {
    if (b) {return "green";}
    else {return "red";}
  };

  const IconButton = styled.img`
    margin-left: 10px;
    width: ${(props) => props.width}; // 아이콘의 너비 설정
    height: ${(props) => props.height};
  `;

  const setUserPoints = async () => {
    const userId = getCookie('userId');
    const res = await axios.post(
      `http://localhost:8080/users/${userId}/point`,
      {point: points}
    ) 
  }

  const navigate = useNavigate();
  const handleClickHome = () => {
    setUserPoints();
    navigate('/');
  }


  return (
    <Container>
      <Top height="400px">
        <TotalPoint height="50px">Total Point : {totalPoints}</TotalPoint>
        <Score height="50px">Score : {score}</Score>
        <ProbTab height="50px">
          {circleStatus.map((b, index) => (
            <Circle key={index} color={getColor(b)} />
          ))}
        </ProbTab>
        <Points height="50px">Points: {points}</Points>
      </Top>
      <Middle height="253px">
        <VideoLink
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          watch the explanation to earn more points!
        </VideoLink>
      </Middle>
      <Bottom height="200px">
        <ShareHome>
          <Share>
            Share
            <IconButton
              weidth="24px"
              height="24px"
              src={instagram}
              alt="Instagram"
            />
          </Share>
          <Home>
            Home
            <IconButton onClick={handleClickHome} weidth="28px" height="28px" src={arrow} alt="Home" />
          </Home>
        </ShareHome>
      </Bottom>
    </Container>
  );
}

export default SolvedProblemScreen;