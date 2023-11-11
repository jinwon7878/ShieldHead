import React from 'react'
import styled from 'styled-components'
import homeIcon from '../assets/images/home.png'
import cartIcon from '../assets/images/cart.png'
import profileIcon from '../assets/images/mypage.png'
import { NavLink } from 'react-router-dom';

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed; 
  background: #fff; 
  border-top: 1px solid #ccc;
  margin: 0;
  padding: 10px 0;
  width: 390px;
  bottom: 0;
  left: 0;
  height: 60px;
  z-index: 1000; // Ensure it's above other content
`;

// Styled component for navigation icons
const NavIcon = styled.img`
  width: 30px; 
  height: 30px; 
`;

const LinkWrapper = styled.div`
`;

function BottomTabLayout() {
  return (
    <NavigationBar>
      <LinkWrapper>
        <NavLink to="/" exact>
          <NavIcon src={homeIcon} alt="Home" />
        </NavLink>
      </LinkWrapper>
      <LinkWrapper>
        <NavLink to="/store" exact>
          <NavIcon src={cartIcon} alt="Cart" />
        </NavLink>
      </LinkWrapper>
      <LinkWrapper>
        <NavLink to="/myPage" exact>
          <NavIcon src={profileIcon} alt="Profile" />
        </NavLink>
      </LinkWrapper>
    </NavigationBar>
  )
}

export default BottomTabLayout