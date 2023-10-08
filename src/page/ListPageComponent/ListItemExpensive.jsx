import React from "react";
import styled from "styled-components";
import Images from "../../component/Images";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ListItem from "../listStyledComponent/ListItem";
import ListItemBox from "../listStyledComponent/ListItemBox";
import ImagesWrap from "../listStyledComponent/ImagesWrap";
import Title from "../listStyledComponent/Title";
import Amount from "../listStyledComponent/Amount";

const ListItemExpensive = ({ item, id }) => {
  return (
    <ListItem data-aos="fade-up">
      <ListItemBox>
        <Link to={`/product/${id}`} className="Link">
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
