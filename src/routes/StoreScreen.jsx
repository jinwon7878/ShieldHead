import React from 'react'
import store1 from '../assets/images/store1.png'
import store2 from '../assets/images/store2.png'
import store3 from '../assets/images/store3.png'
import store4 from '../assets/images/store4.png'
import styled from 'styled-components'
import BottomTabLayout from './BottomTabLayout'

const Container = styled.div`
  .storeScreenContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .storeHeader {
    font-size: 48px;
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

  .imageSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  .imageSection div {
    width: calc(50% - 20px);
    text-align: start;
    margin: 10px;
  }
  
  .storeImage {
    width: 100%;
  }

  .imageSection span {
    display: block;
    font-size: 12px;
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
        <div>
          <img src={store1} className="storeImage" alt="store1" />
          <br />
          <span>&nbsp;19,000p</span>  
        </div>
        <div>
          <img src={store2} className="storeImage" alt="store2" />
          <br />
          <span>&nbsp;20,000p</span>
        </div>
        <div>
          <img src={store3} className="storeImage" alt="store3" />
          <br />
          <span>&nbsp;14,000p</span>
        </div>
        <div>
          <img src={store4} className="storeImage" alt="store4" />
          <br />
          <span>&nbsp;4,500p</span>
        </div>
      </div>
    </div>
    <BottomTabLayout></BottomTabLayout>
    </Container>
  )
}

export default StoreScreen