import React from 'react';
import styled from 'styled-components';

import { Route, Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';
import Header from './Header';
import Messages from './Messages';
import Phones from './Phones';
import LeftMenu from './LeftMenu';


const AppContainer = styled.div`
  background-color: #fafbfd;
  display: grid;
  grid-template-columns: 270px 1fr;
  height: 100%;
`;

const MainContainer = styled.main`
  width: 100%;
`;

const SectionContainer = styled.section`
  padding: 2em;
`;

const Main = () => {
  return (
    <AppContainer>
      <LeftMenu />
      <MainContainer>
        <Header />
        <SectionContainer>
          <Route path="/" exact component={Dashboard} />
          <Route path="/messages" component={Messages} />
          <Route path="/phones" component={Phones} />
        </SectionContainer>
      </MainContainer>
    </AppContainer>
  )
}

export default Main;