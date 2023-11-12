import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import initialProblems from '../initialProblems.json';

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

const QuestionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 20px; // 각 박스 간의 간격
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  background-color: white; // 박스의 배경 색상
  font-family: "Orbitron", sans-serif;
  border-radius: 20px;
  box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.15);
`;

const OXcardframe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
`;

const Ocard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin: 20px; // 각 박스 간의 간격
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  background-color: white; // 박스의 배경 색상
  font-family: "NTR", sans-serif;
  border-radius: 20px;
`;

const Xcard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin: 20px; // 각 박스 간의 간격
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  background-color: white; // 박스의 배경 색상
  font-family: "NTR", sans-serif;
  border-radius: 20px;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px; // 각 박스 간의 간격
  width: 90%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
`;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  margin: 10px; // 각 박스 간의 간격
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  background-color: #263775; // 박스의 배경 색상
  border-radius: 20px;
  cursor: pointer; // Change mouse cursor to pointer on hover
  &:hover {
    background-color: #1e40af; // Change background color on hover for visual feedback
  }
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SignUpProblemScreen() {
  const location = useLocation();
  const {name, age, gender} = location.state;
  const navigate = useNavigate();

  const [order, setOrder] = useState(0);
  const [oList, setOList] = useState([]); // selected O Problems Nums (7, 10)
  const [selectedOption, setSelectedOption] = useState(null);
  
  if (order === 9) {
    navigate('/signUpFinal',{
      state: {
        name: name,
        age: age,
        gender: gender,
        oList: oList
      }
    })};
  const question = initialProblems.problem[order].description;

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const OXCard = styled(Ocard)`
    background-color: ${selectedOption === 1 ? "#bde0fe" : "white"};
  `;

  const XXCard = styled(Xcard)`
    background-color: ${selectedOption === 2 ? "#bde0fe" : "white"};
  `;

  const handleNextClick = () => {
    console.log("Next button clicked, selected option:", selectedOption);
    if (selectedOption === 1) {
      setOList((p)=>[...p, order]);
    }
    setOrder(o=>(o+1));
  };
  useEffect(()=>{
    console.log(oList);
  }, [order]);

  return (
    <Container>
      <InnerFlexBox height="220px">ShieldHead</InnerFlexBox>
      <InnerFlexBox height="280px">
        <QuestionCard height="250px">{question}</QuestionCard>
      </InnerFlexBox>
      <OXcardframe height="160px">
        <OXCard height="100px" onClick={() => handleSelectOption(1)}>
          O
        </OXCard>
        <XXCard height="100px" onClick={() => handleSelectOption(2)}>
          X
        </XXCard>
      </OXcardframe>
      <BottomBox height="183px">
        <NextButton height="60px" onClick={handleNextClick}>
          Next
        </NextButton>
      </BottomBox>
    </Container>
  );
}

export default SignUpProblemScreen;