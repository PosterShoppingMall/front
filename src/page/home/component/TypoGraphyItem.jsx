import React from "react";
import TypoGraphySlider from "react-slick";
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

const TypoGraphyItem = (props) => {
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

  return (
    <ItemContent>
      <ContnetLine></ContnetLine>

      <H2Title data-aos="fade-up">
        타이포그래피
        <H2SubText>쿠나장롱이 매달 선보이는 심도있는 포스터 이야기</H2SubText>
      </H2Title>

      <TypoGraphySlider {...settings}>
        {props.TypoGraphyitems &&
          props.TypoGraphyitems.map((item, key) => (
            <BnList data-aos="fade-up" key={key}>
              <Link to={`product/${item.productId}`}>
                <Images imgSrc={item.imageUrl} />
              </Link>
            </BnList>
          ))}
      </TypoGraphySlider>

      <MoreBtn data-aos="fade-up">
        <Link to="/typography" className="Link">
          <span>More</span>
        </Link>
      </MoreBtn>
    </ItemContent>
  );
};

export default TypoGraphyItem;
