import useAxios from "./useAxios";
import UserEdit from "./UserEdit";
const User = () => {
  const url = "http://localhost:3001/user/3";
  const method = "GET";
  const payload = null;
  const { data, error, loaded } = useAxios(url, method, payload);
  console.log(data);
  return (
    <div>
      User
      <UserEdit />
    </div>
  );
};

export default User;

// 정보 조회  axios get

// {
//   "userId": 3,
//   "name": "김찬미",
//   "email": "test3@naver.com",
//   "password": "12345678@",
//   "phoneNumber": "01088883333",
//   "postcode": "15234",
//   "roadAddress": "강원도원주시단구동",
//   "detailAddress": "412",
//   "userimg":" 이미지url"
// }
