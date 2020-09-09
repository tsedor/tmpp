import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../service/arraioLoginService';

const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  let signInData = {
    login: login,
    password: password
  }

  const singIn = e => {
    e.preventDefault();
    dispatch(signIn(signInData));
  }
  
return (
  <form onSubmit={ singIn }>
    <input type="text"  onChange = { (e) => setLogin(e.target.value) }/>
    <input type="password" onChange = { (e) => setPassword(e.target.value) }/>
    <input type="submit" value="Wyślij"/>
  </form>
  )
}

export default Login;