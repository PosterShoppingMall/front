import React from "react";
import styled from "styled-components";
import FamousPaintSlider from "react-slick";
import Images from "../../../component/Images";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemContent from "./mainStyledComponent/ItemContent";
import ContnetLine from "./mainStyledComponent/ContnetLine";
import H2Title from "./mainStyledComponent/H2Title";
import H2SubText from "./mainStyledComponent/H2SubText";
import BnList from "./mainStyledComponent/BnList";
import MoreBtn from "./mainStyledComponent/MoreBtn";

const FamousPaintItem = () => {
  const NextArrow = (props) => (
    <div className="custom-next-arrow" onClick={props.onClick}>
      Next
    </div>
  );

  const PrevArrow = (props) => (
    <div className="custom-prev-arrow" onClick={props.onClick}>
      Prev
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [items, setItems] = useState(null);

  useEffect(() => {
    // Axios를 사용하여 데이터를 가져옵니다.
    axios
      .get(
        "https://shoppingmall-9c992-default-rtdb.firebaseio.com/mainitem.json"
      )
      .then((response) => {
        // API에서 받아온 데이터를 객체에서 배열로 변환
        const data = response.data;

        const testData = Object.values(data);

        // 변환한 데이터를 상태(state)에 저장
        setItems(testData);
        console.log("매핑된 데이터", testData);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, []);

  return (
    <ItemContent>
      <ContnetLine></ContnetLine>

      <H2Title data-aos="fade-up">
        명화
        <H2SubText>쿠나장롱이 매달 선보이는 심도있는 포스터 이야기</H2SubText>
      </H2Title>

      <FamousPaintSlider {...settings}>
        {items &&
          items.map((item, key) => (
            <BnList data-aos="fade-up" key={key}>
              <Images imgSrc={item.imgSrc} />
            </BnList>
          ))}
      </FamousPaintSlider>

      <MoreBtn data-aos="fade-up">
        <Link to="/famous-painting" className="Link">
          <span>More</span>
        </Link>
      </MoreBtn>
    </ItemContent>
  );
};

export default FamousPaintItem;
