import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import ListItemExpensive from "./ListItemExpensive";

const ListPageItem = () => {
  const dummyData = [
    {
      imgSrc: "/src/images/listcataegoryImg01.jpg",
      title: "(souffle) Monday",
      amount: "32,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg02.jpg",
      title: "(souffle) Monday2",
      amount: "53,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg03.jpg",
      title: "(souffle) Monday2",
      amount: "43,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg04.jpg",
      title: "(souffle) Monday2",
      amount: "63,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg01.jpg",
      title: "(souffle) Monday",
      amount: "82,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg02.jpg",
      title: "(souffle) Monday2",
      amount: "12,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg03.jpg",
      title: "(souffle) Monday2",
      amount: "15,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg04.jpg",
      title: "(souffle) Monday2",
      amount: "53,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg01.jpg",
      title: "(souffle) Monday",
      amount: "72,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg02.jpg",
      title: "(souffle) Monday2",
      amount: "83,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg03.jpg",
      title: "(souffle) Monday2",
      amount: "93,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg04.jpg",
      title: "(souffle) Monday2",
      amount: "13,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg01.jpg",
      title: "(souffle) Monday",
      amount: "22,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg02.jpg",
      title: "(souffle) Monday2",
      amount: "73,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg03.jpg",
      title: "(souffle) Monday2",
      amount: "93,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg04.jpg",
      title: "(souffle) Monday2",
      amount: "23,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg01.jpg",
      title: "(souffle) Monday",
      amount: "12,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg02.jpg",
      title: "(souffle) Monday2",
      amount: "43,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg03.jpg",
      title: "(souffle) Monday2",
      amount: "53,000",
    },

    {
      imgSrc: "/src/images/listcataegoryImg04.jpg",
      title: "(souffle) Monday2",
      amount: "63,000",
    },
  ];

  return (
    <ListFlex>
      {dummyData.map((item, index) => (
        <ListItemExpensive
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </ListFlex>
  );
};

export default ListPageItem;
const ListFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0 50px 0;
  box-sizing: border-box;
  flex-flow: wrap;
`;
