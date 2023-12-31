import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Input, Button } from "@mui/material";

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
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "Orbitron", sans-serif;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height}; // form의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "Orbitron", sans-serif;
`;

const StyledLabel = styled.label`
  display: flex;
  margin: 20px 0 0 0;
`

const StyledP = styled.form`
  display: flex;
  flex-direction: column;
  & input {
    text-align: center;
  }
  margin: 28px 0; // 각 박스 간의 간격
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // p의 높이
  //background-color: #f0f0f0; // 박스의 배경 색상
  font-family: "Orbitron", sans-serif;
`;

const MiddleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //margin: 10px; // 각 박스 간의 간격
  width: 100%; // 박스의 너비
  height: ${(props) => props.height}; // 박스의 높이
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

const NextButton = styled.button`
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

function SignUpFormScreen() {
  const [genderValue, setGenderValue] = useState('');
  const navigate = useNavigate();

  const handleChangeGenderValue = (e) => {
    e.preventDefault();
    setGenderValue(e.target.value)
  }
  const handleNavigateProblem = (event) => {
    event.preventDefault();
    navigate("/signUpProblem", {
      state: {
        name: event.target.elements.name.value,
        age: event.target.elements.age.value,
        gender: genderValue,
      },
    });
  };

  return (
    <Container>
      <InnerFlexBox height="220px">ShieldHead</InnerFlexBox>
      <MiddleBox height="450px">
        <StyledForm onSubmit={(e)=>handleNavigateProblem(e)}>
          <StyledLabel htmlFor="name">이름</StyledLabel>
          <Input type="string" id="name" name="name" required />
          <StyledLabel htmlFor="age">나이</StyledLabel>
          <Input type="number" id="age" name="age" required />
          <StyledP>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">성별</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="성별"
                  name="gender"
                  value={genderValue}
                  onChange={handleChangeGenderValue}
                >
                  <MenuItem value="m">남성</MenuItem>
                  <MenuItem value="f">여성</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </StyledP>
          <BottomBox height="183px">
            <NextButton height="60px">
              Next
            </NextButton>
          </BottomBox>
        </StyledForm>
      </MiddleBox>
    </Container>
  );
}

export default SignUpFormScreen;
