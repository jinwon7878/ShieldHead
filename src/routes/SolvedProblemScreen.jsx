import React, { useState } from "react";
import styled from "styled-components";
import instagram from "../assets/images/instagram.svg";
import arrow from "../assets/images/arrow.svg";

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
  const [totalPoints, setTotalPoints] = useState(1003);
  const [score, setScore] = useState("1/3");
  const [points, setPoints] = useState(3);

  const circleStatus = ["correct", "incorrect", "inactive"];

  const getColor = (status) => {
    switch (status) {
      case "correct":
        return "green";
      case "incorrect":
        return "red";
      default:
        return "#D9D9D9";
    }
  };

  const IconButton = styled.img`
    margin-left: 10px;
    width: ${(props) => props.width}; // 아이콘의 너비 설정
    height: ${(props) => props.height};
  `;

  return (
    <Container>
      <Top height="400px">
        <TotalPoint height="50px">Total Point : {totalPoints}</TotalPoint>
        <Score height="50px">Score : {score}</Score>
        <ProbTab height="50px">
          {circleStatus.map((status, index) => (
            <Circle key={index} color={getColor(status)} />
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
            <IconButton weidth="28px" height="28px" src={arrow} alt="Home" />
          </Home>
        </ShareHome>
      </Bottom>
    </Container>
  );
}

export default SolvedProblemScreen;