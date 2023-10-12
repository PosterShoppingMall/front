import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAxios from "./useAxios";
import axios from "axios";
const UserEditBtn = (props) => {
  const navigate = useNavigate();
  const cancleClickHandler = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  const user = { id: 29 };
  const url = `http://localhost:3001/user/${user.id}`;
  const method = "PATCH";
  const payload = {
    name: props.payload.name,
    password: props.payload.password,
    phoneNumber: props.payload.phoneNumber,
    postCode: props.payload.postCode,
    roadAddress: props.payload.roadAddress,
    detailAddress: props.payload.detailAddress,
    userImg: props.payload.userImg,
  };
  console.log("btn:", payload);
  const storeClickHandler = (e) => {
    let error;
    try {
      axios.patch(url, payload);
    } catch {
      console.error("error");
    } finally {
      navigate("/user");
    }
  };
  return (
    <UserEditBtnWrap>
      <button onClick={storeClickHandler}>저장</button>
      <button onClick={cancleClickHandler}>취소</button>
    </UserEditBtnWrap>
  );
};

export default UserEditBtn;

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
