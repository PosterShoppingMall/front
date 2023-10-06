import React, { useEffect, useState } from "react";
import axios from "axios";
import DataExpensive from "./DataExpensive";

const FirebaseDataTest = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Axios를 사용하여 데이터를 가져옵니다.
    axios
      .get("https://shoppingmall-9c992-default-rtdb.firebaseio.com/items.json")
      .then((response) => {
        // API에서 받아온 데이터를 객체에서 배열로 변환
        const data = response.data;
        const itemArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));

        // 변환한 데이터를 상태(state)에 저장
        setItems(itemArray);
        console.log("매핑된 데이터:", itemArray);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <DataExpensive title={item.title} amount={item.amount} />
        </div>
      ))}
    </div>
  );
};

export default FirebaseDataTest;
