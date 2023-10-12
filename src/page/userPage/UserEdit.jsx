import { useState } from "react";
import { useEffect } from "react";

import useAxios from "./useAxios";

import axios from "axios";
import styled from "styled-components";

import UserEditBtn from "./UserEditBtn";
let isInitial = true;
const UserEdit = () => {
  // const [userObjectState, setUserObjectState] = useState({
  //   name: data?.name || "",
  //   password: data?.password || "",
  //   phoneNumber: data?.phoneNumber || "",
  //   postcode: data?.postcode || "",
  //   roadAddress: data?.roadAddress || "",
  //   detailAddress: data?.detailAddress || "",
  //   userimg: data?.userimg || "",
  // });

  const [userObjectState, setUserObjectState] = useState({
    name: "",
    password: "",
    phoneNumber: "",
    postCode: "",
    roadAddress: "",
    detailAddress: "",
    userImg: "",
  });
  const user = { id: 29 };
  const url = `http://localhost:3001/user/${user.id}`;
  const method = "GET";
  const payload = null;
  const { data, error, loaded } = useAxios(url, method, payload);

  console.log("data:", data);

  useEffect(() => {
    setUserObjectState({
      name: data?.name || "",
      password: data?.password || "",
      phoneNumber: data?.phoneNumber || "",
      postCode: data?.postCode || "",
      roadAddress: data?.roadAddress || "",
      detailAddress: data?.detailAddress || "",
      userImg: data?.userImg || "",
    });
  }, [data]);

  // 로딩 상태 확인 후 조건부 렌더링
  if (!loaded) {
    return <div>Loading...</div>;
  }

  const onChangeHandler = (e, property) => {
    const newUserState = {
      ...userObjectState,
    };
    newUserState[property] = e.target.value;
    setUserObjectState(newUserState);
    console.log("onChange state:", userObjectState);
  };

  const handleDeleteAccount = async () => {
    const isConfirmed = window.confirm("정말 탈퇴하시겠습니까?");

    if (!isConfirmed) return;

    try {
      const response = await axios.post("/api/users/delete");
      if (response.status === 200) {
        alert("계정이 성공적으로 삭제되었습니다.");
      } else {
        alert("계정 삭제 실패");
      }
    } catch (error) {
      alert("계정 삭제 실패");
    }
  };

  return (
    <UserEditWrap>
      <H3Title>회원정보 수정</H3Title>
      <UserLayout>
        {/* <form> */}
        <InputBox>
          <label>이름</label>
          <input
            type="text"
            value={userObjectState.name}
            onChange={(event) => {
              onChangeHandler(event, "name");
            }}
          />
        </InputBox>
        <InputBox>
          <label>비밀번호</label>
          <input
            type="password"
            value={userObjectState.password}
            onChange={(event) => {
              onChangeHandler(event, "password");
            }}
          />
        </InputBox>
        <InputBox>
          <label>휴대전화</label>
          <input
            type="text"
            value={userObjectState.phoneNumber}
            onChange={(event) => {
              onChangeHandler(event, "phoneNumber");
            }}
          />
        </InputBox>
        <InputBox>
          <label>우편번호</label>
          <input
            type="text"
            value={userObjectState.postCode}
            onChange={(event) => {
              onChangeHandler(event, "postCode");
            }}
          />
        </InputBox>
        <InputBox>
          <label>주소</label>
          <input
            type="text"
            value={userObjectState.roadAddress}
            onChange={(event) => {
              onChangeHandler(event, "roadAddress");
            }}
          />
        </InputBox>
        <InputBox>
          <label>상세주소</label>
          <input
            type="text"
            value={userObjectState.detailAddress}
            onChange={(event) => {
              onChangeHandler(event, "detailAddress");
            }}
          />
        </InputBox>
        <UserEditBtn payload={userObjectState} />
        <DeleteAccountWrap>
          <UserEditBtnWrap>
            <button onClick={handleDeleteAccount}>회원 탈퇴</button>
          </UserEditBtnWrap>
        </DeleteAccountWrap>
      </UserLayout>
    </UserEditWrap>
  );
};

export default UserEdit;

const H3Title = styled.h3`
  //추가함
  font-size: 24px;
  margin-bottom: 20px;
`;

const DeleteAccountWrap = styled.div`
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  display: block;
  font-family: "NanumSquare";
  font-weight: 400;
  font-size: 18px;
  padding: 5px 20px 0 0;
  text-align: left;
`;

const UserEditWrap = styled.div`
  width: 100%;
  padding: 150px 0 0 0;
  box-sizing: border-box;
`;

const UserLayout = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  form {
    width: 100%;
  }
`;

const InputBox = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: flex-start;
  label {
    width: 10%;
    display: inline-block;
    font-family: "NanumSquare";
    font-weight: 400;
    font-size: 18px;
    padding: 5px 20px 0 0;
    text-align: center;
  }
  input {
    width: 90%;
    padding: 15px 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
  }
`;

const UserEditBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0 0 50px;
  button {
    width: 100px;
    padding: 15px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  button:first-child {
    margin-right: 10px;
    background: #333;
    color: #fff;
  }
`;

// {
//   "name": "김찬미",
//   "password": "12345678@",
//   "phoneNumber": "01088883333",
//   "postcode": "15234",
//   "roadAddress": "강원도원주시단구동",
//   "detailAddress": "412",
//   "userimg":" 이미지url"
// }
