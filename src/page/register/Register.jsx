import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border: ${({ error }) => (error ? "1px solid red" : "1px solid #ced4da")};
  border-radius: 4px;
  transition: border-color 0.3s;
`;

const SignupButton = styled.button`
  font-weight: bold;
  margin-top: 20px;
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    phoneNumber: "",
    address: "",
    profilePicture: null,
  });

  const [error, setError] = useState({
    user: false,
    password: false,
    confirmPassword: false,
    email: false,
    name: false,
    phoneNumber: false,
    address: false,
    profilePicture: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrorState = {
      user: formData.user === "",
      password: formData.password.length < 4,
      confirmPassword: formData.password !== formData.confirmPassword,
      email: !formData.email.includes("@"),
      name: formData.name === "",
      phoneNumber: formData.phoneNumber === "",
      address: formData.address === "",
      profilePicture: !formData.profilePicture
    };

    setError(newErrorState);

    if (Object.values(newErrorState).some((isError) => isError)) return;

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    axios
      .post("/api/signup", form)
      .then((response) => {
        alert("회원가입이 성공적으로 완료되었습니다");
      })
      .catch((error) => {
        alert("회원가입 도중 오류가 발생했습니다");
      });
  };

 
  return (
    <SignupContainer>
      <title>회원가입</title>
      
      <SignupForm onSubmit={handleSubmit}>
        <Label htmlFor="user">아이디</Label>
        <Input 
          type="text" 
          id="user" 
          name="user" 
          placeholder="아이디를 입력하세요." 
          error={error.name} 
          onChange={handleChange} 
        />
  
        <Label htmlFor="password">비밀번호</Label>
        <Input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="비밀번호 입력해주세요." 
          error={error.password} 
          onChange={handleChange} 
        />
  
        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword" 
          placeholder="비밀번호 확인을 입력해주세요." 
          error={error.confirmPassword} 
          onChange={handleChange} 
        />
  
        <Label htmlFor="email">이메일</Label>
        <Input 
          type="text" 
          id="email" 
          name="email" 
          placeholder="ex) suj2n.k@email.com" 
          error={error.email} 
          onChange={handleChange} 
        />
  
        <Label htmlFor="name">이름</Label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="이름을 입력해주세요." 
          error={error.name} 
          onChange={handleChange} 
        />
  
        <Label htmlFor="phoneNumber">전화번호</Label>
        <Input 
          type="tel" 
          id="phoneNumber" 
          name="phoneNumber" 
          error={error.phoneNumber} 
          onChange={handleChange} 
        />
  
        <Label htmlFor="address">주소</Label>
        <Input 
          type="text" 
          id="address" 
          name="address" 
          error={error.address} 
          onChange={handleChange} 
        />
  
        <Label htmlFor="profilePicture">프로필 사진</Label>
        <Input 
          type="file" 
          id="profilePicture" 
          name="profilePicture" 
          error={error.profilePicture} 
          onChange={handleFileChange} 
        />
        
        {error.profilePicture && <p style={{ color: "red" }}>프로필 사진을 업로드해주세요.</p>}
  
        <SignupButton type="submit">회원가입</SignupButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default RegisterPage;