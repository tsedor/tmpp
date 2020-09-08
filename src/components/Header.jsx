import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px #efefef solid;
  display: flex;
  height: 60px;
  padding: 0 2em;
  width: 100%;
`;

const Hamburger = styled.div`
  background-color: #67666e;
  height: 2px;
  position: relative;
  transform: translateY(-1px);
  width: 20px;
  &::before, &::after {
    background-color: #67666e;
    content: '';
    height: 2px;
    position: absolute;
    width: 20px;
  }
  &::before {
    transform: translateY(-7px);
  }
  &::after {
    transform: translateY(7px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 0 1em;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Hamburger />
      <SectionTitle>Dashboard</SectionTitle>
    </HeaderContainer>
  )
}

export default Header;