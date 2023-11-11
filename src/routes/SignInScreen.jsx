import React from "react";
import styled from "styled-components";
import SocialKakao from "../components/SocialKakao";
import logo from "../assets/images/logo.png";

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
  //background-color: #f0f0f5; // 박스의 배경 색상
  font-family: "Orbitron", sans-serif;
`;

const StyledImage = styled.img`
  max-width: 100%; // 이미지의 최대 너비
  max-height: 100%; // 이미지의 최대 높이
  border-radius: 8px; // 이미지 모서리 둥글게
`;

function SignInScreen() {
  return (
    <Container>
      <InnerFlexBox height="220px">ShieldHead</InnerFlexBox>
      <InnerFlexBox height="150px">
        <StyledImage src={logo} alt="이미지" />
      </InnerFlexBox>
      <InnerFlexBox height="220px">
        <SocialKakao />
      </InnerFlexBox>
    </Container>
  );
}

export default SignInScreen;
