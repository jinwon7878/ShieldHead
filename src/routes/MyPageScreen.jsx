import React from 'react'
import profile from '../assets/images/profile.png'
import setting from '../assets/images/setting.png'
import score from '../assets/images/score.png'
import hexagon from '../assets/images/hexagon.png'

import styled from 'styled-components'
import BottomTabLayout from './BottomTabLayout'

const Container = styled.div`
  padding: 0px;
  .myPageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .myPageHeader {
    font-size: 48px;
    margin: 30px;
  }

  .profileSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile {
    width: 130px;
  }

  .userInfo {
    margin: 5px 0px;
  }

  .userName {
    font-size: 20px;
  }

  .userStatus {
    font-size: 15px;
  }

  .editButton {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: rgb(42, 55, 113);
    border: none;
    border-radius: 5px;
    color: white;
  }

  .menuSection {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .menuButton {
    display: flex; 
    align-items: center; 
    justify-content: flex-start;
    width: 100%;
    padding: 10px;
    margin: 0;
    background-color: white;
    border: none;
    border-radius: 5px; 
    text-align: start;
  } 

  .menuImage {
    width: 20px;
    padding: 5px;
    align-items: center;
  }

  .menuText {
    text-align: center;
    align-items: center;
    font-size: 15px;
  }

  .hexagon {
    width: 230px;
  }
`


function MyPageScreen() {
  return (
    <Container>
    <div className="myPageContainer">
      <header className="myPageHeader">
        ShieldHead
      </header>
      <div className="profileSection">
        <div className="profilePicture">
          <img src={profile} className="profile" alt="profile" />
        </div>
        <div className="userInfo">
          {/* 수정 필요 */}
          <p className='userName'>홍길동</p>
          <p className='userStatus'>학생 / 20 / 남</p> 
        </div>
      </div>
      <button className='editButton'>Edit</button>
      <div className="menuSection">
        {/* <button className="menuButton"><img src={setting} className='menuImage' alt="setting" /> <span className='menuText'>환경설정</span></button> */}
        <button className="menuButton"><img src={score} className='menuImage' alt="score" /> <span className='menuText'>육각형 점수</span> </button>
        <img src={hexagon} className='hexagon' alt="hexagon" />
        {/* 수정 필요 */}
        {/* <button className="menuButton"><img src={score} className='menuImage' alt="" /> <span className='menuText'>배지</span> </button> */}
      </div>
      <BottomTabLayout></BottomTabLayout>
    </div>
    </Container>
  )
}

export default MyPageScreen