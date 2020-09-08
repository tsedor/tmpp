import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import LeftMenu from './LeftMenu';
import Main from './Main';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
`;

const AppContainer = styled.div`
  background-color: #fafbfd;
  display: grid;
  grid-template-columns: 270px 1fr;
  height: 100%;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <LeftMenu />
        <Main />
      </AppContainer>
    </Router>
  )
}

export default App;