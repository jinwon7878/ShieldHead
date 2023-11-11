import React from 'react'

import coffee2 from '../assets/images/coffee2.png'
import styled from 'styled-components'

const Container = styled.div`
  .productContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .productHeader {
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
      margin-bottom: 0;
  }
  .pointTitle {
      width: 50%;
      /* padding-right: 30px; */
      border-right: 1px solid #ccc;
  }
  .pointValue {
      width: 50%;
  }
  .imageSection {
      margin-top: 50px;
      margin-bottom: 0;
      /* background-color: #ccc; */
  }
  .productImage{
      width: 150px;
      height: auto;
      margin: 0;
  }
  .productInfo {
      align-self: flex-start;
      text-align: left;
      padding: 30px;
      margin-bottom: -30px;
  }​
  .productBrand {
      font-size: 15px;
  }
  .productName, .productPrice {
      font-size: 20px;
  }
  .buttonSection {
      width: 100%;
      align-items: center;
  }​
  .productButton {
      padding: 15px 30px 15px 30px;
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
        <h3 className="productBrand">메가MGC커피</h3>
        <p className="productName">(ICE)아메리카노</p>
        <p className="productPrice">2,000p</p>
      </div> 
      <div className='buttonSection'>
        <button className="productButton">구매하기</button>
      </div>
    </div>
    </Container>
  )
}

export default ProductScreen