import { React, useState } from "react";
import result from "../assets/images/result.png";
import styled from "styled-components";
import instagram from "../assets/images/instagram.svg";
import arrow from "../assets/images/arrow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // 전체 높이
  background-color: #eff0f3;
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

const ResultBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  width: 65%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #7595f7;
  font-family: "Noto Sans", sans-serif;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
`;

const StyledImage = styled.img`
  max-width: 100%; // 이미지의 최대 너비
  max-height: 100%; // 이미지의 최대 높이
  border-radius: 8px; // 이미지 모서리 둥글게
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
`;

const IconButton = styled.img`
  margin-left: 10px;
  width: ${(props) => props.width}; // 아이콘의 너비 설정
  height: ${(props) => props.height};
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

function SignUpFinalScreen() {
  const [resultMessage, setResultMessage] = useState("당신은 안전에 대해 잘 압니다"); // Add a state variable for the result message

  return (
    <Container>
      <InnerFlexBox height="220px">ShieldHead</InnerFlexBox>

      <ResultBox height="133px">
        <TextBox height="43px">{resultMessage}</TextBox>
      </ResultBox>

      <ResultBox height="300px">
        <StyledImage src={result} alt="Instagram"></StyledImage>
      </ResultBox>

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

export default SignUpFinalScreen;