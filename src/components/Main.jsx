import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';
import Header from './Header';
import Messages from './Messages';
import Phones from './Phones';
import Login from './Login';

const MainContainer = styled.main`
  width: 100%;
`;

const SectionContainer = styled.section`
  padding: 2em;
`;

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <SectionContainer>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/messages" component={Messages} />
        <Route path="/phones" component={Phones} />
      </SectionContainer>
    </MainContainer>
  )
}

export default Main;