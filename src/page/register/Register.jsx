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
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    name: "",
    phoneNumber: "",
    postCode: "",
    roadAddress: "",
    detailAddress: "",
    userImg: null,
  });

  const [error, setError] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    username: false,
    name: false,
    phoneNumber: false,
    postCode: false,
    roadAddress: false,
    detailAddress: false,
    userImg: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, userImg: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setError((prev) => ({ ...prev, passwordConfirm: true }));
      return;
    }

    const userPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      userPayload.append(key, value);
    });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    axios
      .post("/369/user/signup", userPayload, config)
      .then((response) => {
        if (response.status === 200) {
          alert("회원가입이 성공적으로 완료되었습니다");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("회원가입 도중 오류가 발생했습니다. 입력한 정보를 확인해주세요.");
        } else {
          alert("회원가입 도중 오류가 발생했습니다");
        }
      });
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <Label htmlFor="username">아이디</Label>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="아이디를 입력하세요."
          error={error.username}
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
        <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
        <Input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="비밀번호 확인을 입력해주세요."
          error={error.passwordConfirm}
          onChange={handleChange}
        />
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요."
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
        <Label htmlFor="postCode">우편번호</Label>
        <Input
          type="text"
          id="postCode"
          name="postCode"
          error={error.postCode}
          onChange={handleChange}
        />
        <Label htmlFor="roadAddress">도로명 주소</Label>
        <Input
          type="text"
          id="roadAddress"
          name="roadAddress"
          error={error.roadAddress}
          onChange={handleChange}
        />
        <Label htmlFor="detailAddress">상세 주소</Label>
        <Input
          type="text"
          id="detailAddress"
          name="detailAddress"
          error={error.detailAddress}
          onChange={handleChange}
        />
        <Label htmlFor="userImg">프로필 사진</Label>
        <Input
          type="file"
          id="userImg"
          name="userImg"
          error={error.userImg}
          onChange={handleFileChange}
        />
        {error.userImg && (
          <p style={{ color: "red" }}>프로필 사진을 업로드해주세요.</p>
        )}
        <SignupButton type="submit">회원가입</SignupButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default RegisterPage;
