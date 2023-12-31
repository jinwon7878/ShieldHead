import { React, useState } from "react";
import result from "../assets/images/result.png";
import styled from "styled-components";
import instagram from "../assets/images/instagram.svg";
import arrow from "../assets/images/arrow.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, setCookie } from "../cookie/cookie";
import user from "../assets/images/user.png";



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
  justify-content: start;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  width: 65%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
`;

const ExtraBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  aligh-items: center;
  margin-top: -40px;
  width: 65%;
`

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
  text-align: center;
  font-weight: bold;
`;

const TextBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: black;
  font-family: "Noto Sans", sans-serif;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`

const StyledImage = styled.img`
  max-width: 100%; // 이미지의 최대 너비
  max-height: 100%; // 이미지의 최대 높이
  border-radius: 10px; // 이미지 모서리 둥글게
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin: 25px;
  // border: 5px solid #ccc; /* 테두리 굵기와 색상 */
  border: 5px solid #fff;
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
  const navigate = useNavigate();
  const location = useLocation();
  const {name, age, gender, oList} = location.state;
  const accessToken = getCookie('accessToken');

  const [resultMessage, setResultMessage] = useState("통제불능의 안전불감주의자"); // Add a state variable for the result message
  const [extraMessage, setExtraMessage] = useState("당신은 어떠한 안전 지침도 따르지 않는 완전히 자제할 수 없는 사람입니다. 이미 병원과 많이 친하신 분이며, 대한민국 국민의 평균 수명을 깎아먹는 주범이십니다.");
  
  const handleNavigateHome = async () => {
    const res = await axios.post(
      "http://localhost:8080/register",
      {
        "name": name,
        "age": age,
        "gender": gender,
        "sti": resultMessage,
        "accessToken": accessToken
      }
    )
    const userId = await res.data.id;
    setCookie('userId', `${userId}`);
    navigate('/');
  }

  return (
    <Container>
      <InnerFlexBox height="220px">ShieldHead</InnerFlexBox>

      <ResultBox height="300px">
        <StyledImage src={user} alt="character"></StyledImage>
      </ResultBox>

      <ResultBox height="133px">
        <TextBox height="43px">{resultMessage}</TextBox>
      </ResultBox>

      <ExtraBox height="15px">
        <TextBox2 height="15px">{extraMessage}</TextBox2>
      </ExtraBox>

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
            <IconButton onClick={handleNavigateHome} weidth="28px" height="28px" src={arrow} alt="Home" />
          </Home>
        </ShareHome>
      </Bottom>
    </Container>
  );
}

export default SignUpFinalScreen;