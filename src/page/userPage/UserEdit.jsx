import { useState } from "react";
import useAxios from "./useAxios";
import styled from "styled-components";
import H3Title from "../listStyledComponent/H3Title";

const UserEdit = () => {
  const url = "http://localhost:3001/user/3";
  const method = "GET";
  const payload = null;
  const { data, error, loaded } = useAxios(url, method, payload);
  console.log(data);

  const [userObjectState, setUserObjectState] = useState({
    name: data?.name || "",
    password: data?.password || "",
    phoneNumber: data?.phoneNumber || "",
    postcode: data?.postcode || "",
    roadAddress: data?.roadAddress || "",
    detailAddress: data?.detailAddress || "",
    userimg: data?.userimg || "",
  });

  // 로딩 상태 확인 후 조건부 렌더링
  if (!loaded) {
    return <div>Loading...</div>;
  }

  const onChangeHandler = (e, property) => {
    setUserObjectState((prev) => ({ ...prev, property: e.target.value }));
  };
  return (
    <UserEditWrap>
      <H3Title>회원정보 수정</H3Title>
      <UserLayout>
        <form>
          <InputBox>
            <label>이름</label>
            <input
              type="text"
              onChange={(event) => {
                onChangeHandler(event, "name");
              }}
            />
          </InputBox>
          <InputBox>
            <label>비밀번호</label>
            <input
              type="password"
              onChange={(event) => {
                onChangeHandler(event, "password");
              }}
            />
          </InputBox>
          <InputBox>
            <label>휴대전화</label>
            <input
              type="text"
              onChange={(event) => {
                onChangeHandler(event, "phoneNumber");
              }}
            />
          </InputBox>
          <InputBox>
            <label>우편번호</label>
            <input
              type="text"
              onChange={(event) => {
                onChangeHandler(event, "postcode");
              }}
            />
          </InputBox>
          <InputBox>
            <label>주소</label>
            <input
              type="text"
              onChange={(event) => {
                onChangeHandler(event, "roadAddress");
              }}
            />
          </InputBox>
          <InputBox>
            <label>상세주소</label>
            <input
              type="text"
              onChange={(event) => {
                onChangeHandler(event, "detailAddress");
              }}
            />
          </InputBox>
          <InputBox>
            <label>상세주소</label>
            <input
              type="imges"
              onChange={(event) => {
                onChangeHandler(event, "userimg");
              }}
            />
          </InputBox>

          <UserEditBtnWrap>
            <button>저장</button>
            <button>취소</button>
          </UserEditBtnWrap>
        </form>
      </UserLayout>
    </UserEditWrap>
  );
};

export default UserEdit;
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
