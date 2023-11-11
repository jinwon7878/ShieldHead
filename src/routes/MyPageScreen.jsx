import React from 'react'
import profile from '../assets/images/profile.png'
import setting from '../assets/images/setting.png'
import score from '../assets/images/score.png'
import hexagon from '../assets/images/hexagon.png'

import styled from 'styled-components'

const Container = styled.div`
  .myPageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;
    text-align: center;
  }

  .myPageHeader {
    /* font-size: 48px; */
    margin: 30px;
  }

  .profileSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profilePicture {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #ccc;
    margin-bottom: 10px;
  }

  .userInfo {
    margin: 5px 0;
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
  }

  .menuButton {
    width: 100%;
    padding: 10px;
    margin: 0;
    background-color: #f0f0f0;
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
  }

  .hexagon {
    width: 200px;
  }
  
  .navigation {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    padding: 10px 0;
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
        </div>
        <div className="userInfo">
          {/* 수정 필요 */}
          <p className='userName'>홍길동</p>
          <p className='userStatus'>학생 / 20 / 남</p> 
        </div>
      </div>
      <button className='editButton'>Edit</button>
      <div className="menuSection">
        <button className="menuButton"><img src={setting} className='menuImage' alt="setting" /> <span className='menuText'>환경설정</span></button>
        <button className="menuButton"><img src={score} className='menuImage' alt="score" /> <span className='menuText'>육각형 점수</span> </button>
        <img src={hexagon} className='hexagon' alt="hexagon" />
        {/* 수정 필요 */}
        <button className="menuButton"><img src={score} className='menuImage' alt="" /> <span className='menuText'>배지</span> </button>
      </div>
      <nav className="navigation">
        {/* <a href="/home" className="navLink"><img src="" alt="" /></a>
        <a href="/cart" className="navLink"><img src="" alt="" /></a>
        <a href="/profile" className="navLink active"><img src="" alt="" /></a> */}
      </nav>
    
    </div>
    </Container>
  )
}

export default MyPageScreen