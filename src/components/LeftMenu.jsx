import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const LeftMenuContainer = styled.div`
  background-color: #ffffff;
  border-right: 1px #efefef solid;
  width: 270px;
`;

const SiteTitle = styled.h1`
  align-items: center;
  color: #4279ee;
  display: flex;
  font-family: 'MuseoModerno', cursive;
  font-weight: 500;
  height: 60px;
  justify-content: center;
  margin: 0;
`;

const LeftMenuList = styled.ul`
  color: #67666E;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const LeftMenuItem = styled.li`
  background-color: ${props => props.active && '#F9FAFC'};
  border-left: ${props => props.active ? '3px #4279ee solid' : '3px rgba(0,0,0,0) solid'};
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  padding: 1em 2em;
  text-transform: uppercase;
  &:hover {
    background-color: #fbfdff;
    border-left: 3px #4279ee solid;
  }
`;

const LeftMenu = () => {
  let history = useHistory();
  console.log(history)
  return (
    <LeftMenuContainer>
      <SiteTitle>Arraio</SiteTitle>
      <LeftMenuList>
        <LeftMenuItem active={history.location.pathname === "/" && true} onClick={() => history.push('/')}>
          Dashboard
        </LeftMenuItem>
        <LeftMenuItem active={history.location.pathname === "/messages" && true} onClick={() => history.push('/messages')}>
          Wiadomości
        </LeftMenuItem>
        <LeftMenuItem active={history.location.pathname === "/phones" && true} onClick={() => history.push('/phones')}>
          Telefony
        </LeftMenuItem>
      </LeftMenuList>
    </LeftMenuContainer>
  )
}

export default LeftMenu;