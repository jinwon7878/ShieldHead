import React from 'react'
import coffee2 from '../assets/images/coffee2.png'
import styled from 'styled-components'
import BottomTabLayout from './BottomTabLayout'

const Container = styled.div`
  .productContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .productHeader {
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
      margin-bottom: 0;
      box-sizing: border-box;
  }
  .pointTitle {
      width: 50%;
      border-right: 1px solid #ccc;
  }
  .pointValue {
      width: 50%;
  }
  .imageSection {
      margin-top: 50px;
      margin-bottom: 0;
      /* background-color: #ccc; */
      box-sizing: border-box;
  }
  .productImage{
      width: 300px;
      height: auto;
      margin: 0;
  }
  .productInfo {
      align-self: flex-start;
      text-align: left;
      padding: 30px;
      margin-bottom: -30px;
  }
  .productBrand {
      font-size: 15px;
  }
  .productName, .productPrice {
      font-size: 20px;
  }
  .buttonSection {
      width: 100%;
      align-items: center;
      box-sizing: border-box;
  }
  .productButton {
      padding: 15px 30px;
      margin-bottom: 10px;
      border: none;
      border-radius: 5px;
      background-color: rgb(123,147,238);
      color: white;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;
  }
`

function ProductScreen() {
  return (
    <Container>
    <div className='productContainer'>
      <div className='productHeader'>
        ShieldHead
      </div>
      <div className='pointSection'> 
        <div className='pointTitle'>
          Point
        </div>
        <div className='pointValue'>
          1003
        </div>
      </div>
      <div className='imageSection'>
        <img src={coffee2} className='productImage' alt="coffee" />
      </div>
      <div className='productInfo'>
        <h3 className="productBrand">스타벅스</h3>
        <p className="productName">아이스 카페 아메리카노 T</p>
        <p className="productPrice">4,500p</p>
      </div> 
      <div className='buttonSection'>
        <button className="productButton">구매하기</button>
      </div>
    </div>
    <BottomTabLayout></BottomTabLayout>
    </Container>
  )
}

export default ProductScreen