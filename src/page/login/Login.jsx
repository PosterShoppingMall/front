import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../../store/authSlice.js';
import { Link } from 'react-router-dom';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 350px;
  height: 35px;
  margin-bottom: 20px;
  padding-left: 10px;
  border: 1px solid transparent;
  background-color: #f7f7f7;
  &:focus {
    border-color: #a5a5a5;
  }
  &::placeholder {
    color: #a5a5a5;
  }
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
  margin-top: 15px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupLink = styled.div`
  margin-top: 15px;
  font-size: 12px;
  text-align: center;

  a {
    color: #0077cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.post('/api/check-token', { token });
          if (response.data.isValid) {
            dispatch(loginSuccess(token));
          } else {
            localStorage.removeItem('token');
          }
        } catch (error) {
          console.error('토큰 검증 중 오류가 발생했습니다.', error);
        }
      }
    };
    checkTokenValidity();
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.success) {
        alert('로그인 성공');
        localStorage.setItem('token', response.data.token);
        dispatch(loginSuccess(response.data.token));
      } else {
        setErrorMessage(response.data.message || '로그인 실패');
      }
    } catch (error) {
      setErrorMessage('서버 오류');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    alert('로그아웃 완료');
  };

  return (
    <Container>
      <Title>로그인</Title>
      {isLoggedIn ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <>
          <LoginForm onSubmit={handleLogin}>
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
            <SignupLink>
              아직 회원이 아니세요? <Link to='/register'>회원가입</Link>
            </SignupLink>
          </LoginForm>
        </>
      )}
    </Container>
  );
};

export default Login;