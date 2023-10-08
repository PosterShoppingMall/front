import React from "react";
import "aos/dist/aos.css";
import ListItemExpensive from "./ListItemExpensive";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ListFlex from "../listStyledComponent/ListFlex";

const ListPageItem = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    // Axios를 사용하여 데이터를 가져옵니다.
    axios
      .get("https://shoppingmall-9c992-default-rtdb.firebaseio.com/items.json")
      .then((response) => {
        // API에서 받아온 데이터를 객체에서 배열로 변환
        const data = response.data;

        const testData = Object.values(data);

        // 변환한 데이터를 상태(state)에 저장
        setItems(testData[0]);
        console.log("매핑된 데이터", testData);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, []);

  return (
    <ListFlex>
      {items &&
        items.map((item, key) => <ListItemExpensive key={key} item={item} />)}
    </ListFlex>
  );
};

export default ListPageItem;
