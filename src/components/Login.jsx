import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../actions/loginAction';

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
    dispatch(fetchLogin(signInData));
  }

  const token = useSelector(state => state.token);

  console.log(token);

return (
  <form onSubmit={ singIn }>
    <input type="text"  onChange = { (e) => setLogin(e.target.value) }/>
    <input type="password" onChange = { (e) => setPassword(e.target.value) }/>
    <input type="submit" value="Wyślij"/>
  </form>
  )
}

export default Login;