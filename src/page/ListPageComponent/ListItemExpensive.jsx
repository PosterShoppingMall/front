import React from "react";
import styled from "styled-components";
import Images from "../../component/Images";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ListItemExpensive = ({ item, key }) => {
  return (
    <ListItem data-aos="fade-up">
      <ListItemBox>
        <Link to="/listdetailpage" className="Link" key={key}>
          <ImagesWrap>
            <Images imgSrc={item.imgSrc} />
          </ImagesWrap>
          <Title>{item.title}</Title>
          <Amount>{item.amount}원</Amount>
        </Link>
      </ListItemBox>
    </ListItem>
  );
};

export default ListItemExpensive;

const ListItem = styled.div`
  width: 21%;
  padding-bottom: 50px;
`;

const ListItemBox = styled.div`
  width: 100%;
  .Link {
    width: 100%;
    display: block;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  }
`;

const ImagesWrap = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: block;
  position: relative;

  &::before {
    content: "옵션보기 +";
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    text-decoration: none;
    background: #333;
    padding: 20px 0;
    width: 100%;
    color: #fff;
    z-index: 5;
    transform: translateY(100px);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translateY(0px);
  }

  img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.div`
  font-family: "NanumSquare";
  font-size: 20px;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  text-align: center;
  padding: 10px 0;
`;

const Amount = styled.div`
  font-family: "NanumSquare";
  font-size: 16px;
  font-weight: 400;
  color: #787878;
  text-align: center;
`;
