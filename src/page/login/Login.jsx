import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  margin-top: 20px;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // 입력 유효성 검사
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    // 로그인 요청 및 처리
    // ...

    // 2초 후에 로그인 성공 메시지를 표시
    setTimeout(() => {
      alert('로그인 성공');
    }, 2000);
  };

  return (
    <Container>
      <Title>로그인</Title>
      <form onSubmit={handleLogin}>
        <InputContainer>
        <InputField
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </InputContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <LoginButton type="submit">로그인</LoginButton>
      </form>
    </Container>
  );
};

export default Login;