import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { fetchLogin } from '../actions/loginAction';
import Input from './UI/Input';
import Button from './UI/Button';

const Form = styled.form`
  position: fixed;
  max-width: 500px;
  text-align: center;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 50px;
  border: 1px #efefef solid;
`;

const LoginHeader = styled.h1`
  align-items: center;
  color: #4279ee;
  display: flex;
  font-family: 'MuseoModerno', cursive;
  font-weight: 500;
  height: 60px;
  justify-content: center;
  margin: 0;
`;


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

  return (
    <Form onSubmit={ singIn }>
      <LoginHeader>Logowanie</LoginHeader>
      <Input width="100%" placeholder="Aders e-mail" type="text"  onChange = { (e) => setLogin(e.target.value) }/>
      <Input width="100%" placeholder="Hasło" type="password" onChange = { (e) => setPassword(e.target.value) }/>
      <Button type="primary" width="100%">Wyślij</Button>
    </Form>
  )
}

export default Login;