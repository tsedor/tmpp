import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

import Main from './Main';
import Login from './Login';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
`;


const App = () => {
  const token = useSelector(state => state.token);

  return (
    <Router>
      <GlobalStyle />
      {token === '' ? <Redirect to="/login" /> : <Redirect to="/" /> }
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  )
}

export default App;