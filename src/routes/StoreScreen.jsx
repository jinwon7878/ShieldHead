import React from 'react'
import coffee from '../assets/images/coffee.png'
import styled from 'styled-components'

const Container = styled.div`
  .storeScreenContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;
    text-align: center;
  }
  
  .storeHeader {
    /* font-size: 48px; */
    margin: 30px;
  }

  .pointSection {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    font-size: 25px;
  }

  .pointTitle {
    width: 50%;
    /* padding-right: 30px; */
    border-right: 1px solid #ccc;
  }

  .pointValue {
    width: 50%;
  }

  .categorySection {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
  }

  .categoryButton {
    padding: 10px;
    border: none;
    background-color: transparent;
  }

  .categoryButton:hover {
    cursor: pointer;
  }

  .active {
    border: 2px solid black;
    border-radius: 17px;
    background-color: black;
    color: white;
  }
  ​
  .imageSection {
    justify-content: space-around;
  }
  
  .storeImage {
    width: 150px;
  }
`

function StoreScreen() {
  return (
    <Container>
    <div className='storeScreenContainer'>
      <header className="storeHeader">
        ShieldHead
      </header>
      <div className="pointSection">
        <div className="pointTitle">
          Point
        </div>
        <div className="pointValue">
          {/* 수정 필요 */}
          1003
        </div>
      </div>
      <div className="categorySection">
        <button className="categoryButton active">전체</button>
        <button className="categoryButton">카페</button>
        <button className="categoryButton">편의점</button>
        <button className="categoryButton">버거/치킨/피자</button>
        <button className="categoryButton">아이스크림/도넛</button>
      </div>
      <div className='imageSection'>
        <img src={coffee} className="storeImage" alt="coffee" />
        <img src={coffee} className="storeImage" alt="coffee" />
        <br />
        <img src={coffee} className="storeImage" alt="coffee" />
        <img src={coffee} className="storeImage" alt="coffee" />
      </div>
    </div>
    </Container>
  )
}

export default StoreScreen