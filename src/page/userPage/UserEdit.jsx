import { useState } from "react";
import useAxios from "./useAxios";

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
    userimg: data?.userimg || ""
  });
  
  // 로딩 상태 확인 후 조건부 렌더링
  if (!loaded) {
    return <div>Loading...</div>;
  }
  
  const onChangeHandler = (e, property) => {
    setUserObjectState((prev) => ({ ...prev, property: e.target.value }));
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          onChangeHandler(event, "name");
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          onChangeHandler(event, "password");
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          onChangeHandler(event, "phoneNumber");
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          onChangeHandler(event, "postcode");
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          onChangeHandler(event, "roadAddress");
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          onChangeHandler(event, "detailAddress");
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          onChangeHandler(event, "userimg");
        }}
      />
      UserEdit
    </div>
  );
};

export default UserEdit;

// {
//   "name": "김찬미",
//   "password": "12345678@",
//   "phoneNumber": "01088883333",
//   "postcode": "15234",
//   "roadAddress": "강원도원주시단구동",
//   "detailAddress": "412",
//   "userimg":" 이미지url"
// }
