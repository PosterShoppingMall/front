import useAxios from "./useAxios";

import { Link } from "react-router-dom";

import styled from "styled-components";
import H3Title from "../listStyledComponent/H3Title";

import UserEditBtn from "./UserEditBtn";
import UserSidebar from "./UserSidebar";
const User = () => {
  // const [userObjectState, setUserObjectState] = useState({
  //   name: data?.name || "",
  //   password: data?.password || "",
  //   phoneNumber: data?.phoneNumber || "",
  //   postcode: data?.postcode || "",
  //   roadAddress: data?.roadAddress || "",
  //   detailAddress: data?.detailAddress || "",
  //   userimg: data?.userimg || "",
  // });

  const user = { id: 29 };
  const url = `http://localhost:3001/user/${user.id}`;
  const method = "GET";
  const payload = null;
  const { data, error, loaded } = useAxios(url, method, payload);

  console.log("data:", data);

  // 로딩 상태 확인 후 조건부 렌더링
  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <UserEditWrap>
      <H3Title>회원정보</H3Title>
      <UserSidebar />
      <UserLayout>
        <form>
          <DivBox>
            <label for="name">이름</label>
            <div id="name">{data.name}</div>
          </DivBox>
          <DivBox>
            <label>비밀번호</label>
            <div>{data.password}</div>
          </DivBox>
          <DivBox>
            <label>휴대전화</label>
            <div>{data.phoneNumber}</div>
          </DivBox>
          <DivBox>
            <label>우편번호</label>
            <div>{data.postCode}</div>
          </DivBox>
          <DivBox>
            <label>주소</label>
            <div>{data.roadAddress}</div>
          </DivBox>
          <DivBox>
            <label>상세주소</label>
            <div>{data.detailAddress}</div>
          </DivBox>
          <DivBox>
            <label>이미지</label>
            <div>{data.userImg}</div>
          </DivBox>

          <UserEditBtnWrap>
            <Link to="edit">
              <button>수정하기</button>
            </Link>
          </UserEditBtnWrap>
        </form>
      </UserLayout>
    </UserEditWrap>
  );
};

export default User;
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
const DivBox = styled.div`
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
  Div {
    width: 90%;
    padding: 15px 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
    background-color: white;
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
