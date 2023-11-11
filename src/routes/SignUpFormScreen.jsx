import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input, Button } from '@mui/material';

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

const StyledP = styled.form`
display: flex;
flex-direction: column;
  & input{
    text-align: center;
  }
margin: 10px; // 각 박스 간의 간격
width: 100%; // 박스의 너비
height: ${(props) => props.height}; // p의 높이
//background-color: #f0f0f0; // 박스의 배경 색상
font-family: "Orbitron", sans-serif;
`;


function SignUpFormScreen() {
  const navigate = useNavigate();

  const handleNavigateProblem = ( event ) => {
    event.preventDefault();
    navigate('/signUpProblem', {
        state: {
            name: event.target.elements.name.value,
            age: event.target.elements.age.value,
            gender: event.target.elements.gender.value,
        }
    });
  };
  return (
    <Container>
      <InnerFlexBox height="211px">ShieldHead</InnerFlexBox>
      <StyledForm onSubmit={(e) => handleNavigateProblem(e)}>
      <StyledP>
        <label htmlFor="name">이름</label>
        <Input type="string" id="name" name="name" required />
      </StyledP>
      <StyledP>
        <label htmlFor="age">나이</label>
        <Input type="number" id="age" name="age" required />
      </StyledP>
      <StyledP>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">성별</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="성별"
            name = "gender"
          >
            <MenuItem value='male'>남성</MenuItem>
            <MenuItem value='female'>여성</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </StyledP>
      <Button variant="text">다음</Button>
      </StyledForm>
    </Container>
  );
};

export default SignUpFormScreen