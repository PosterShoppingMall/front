import { useState, useEffect } from "react";
import useAxios from "../userPage/useAxios";

import styled from "styled-components";
const OrderUserInfo = () => {
  const [userOrderState, setUserOrderState] = useState({
    name: "",
    phoneNumber: "",
    postCode: "",
    roadAddress: "",
    detailAddress: "",
  });

  const user = { id: 29 };
  const url = `http://localhost:3001/user/${user.id}`;
  const method = "GET";
  const payload = null;
  const { data, error, loaded } = useAxios(url, method, payload);

  useEffect(() => {
    setUserOrderState({
      name: data?.name || "",
      password: data?.password || "",
      phoneNumber: data?.phoneNumber || "",
      postCode: data?.postCode || "",
      roadAddress: data?.roadAddress || "",
      detailAddress: data?.detailAddress || "",
      userImg: data?.userImg || "",
    });
  }, [data]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  const onChangeHandler = (e, property) => {
    const newUserState = {
      ...userObjectState,
    };
    newUserState[property] = e.target.value;
    setUserOrdertState(newUserState);
    console.log("onChange state:", userOrderState);
  };
  return (
    <>
      <H4Title>주문자 정보</H4Title>
      <InputBox>
        <label>이름</label>
        <input
          type="text"
          value={userOrderState.name}
          onChange={(event) => {
            onChangeHandler(event, "name");
          }}
        />
      </InputBox>
      <InputBox>
        <label>휴대전화</label>
        <input
          type="text"
          value={userOrderState.phoneNumber}
          onChange={(event) => {
            onChangeHandler(event, "phoneNumber");
          }}
        />
      </InputBox>
      <InputBox>
        <label>우편번호</label>
        <input
          type="text"
          value={userOrderState.postCode}
          onChange={(event) => {
            onChangeHandler(event, "postCode");
          }}
        />
      </InputBox>
      <InputBox>
        <label>주소</label>
        <input
          type="text"
          value={userOrderState.roadAddress}
          onChange={(event) => {
            onChangeHandler(event, "roadAddress");
          }}
        />
      </InputBox>
      <InputBox>
        <label>상세주소</label>
        <input
          type="text"
          value={userOrderState.detailAddress}
          onChange={(event) => {
            onChangeHandler(event, "detailAddress");
          }}
        />
      </InputBox>
    </>
  );
};

export default OrderUserInfo;

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

const H4Title = styled.div`
  font-size: 30px;
  font-family: "BMHANNAPro";
  text-align: center;
  padding: 50px 0 50px 0;
  box-sizing: border-box;
  border-top: solid 2px #333;
  border-bottom: solid 2px #333;
  margin-bottom: 30px;
`;
