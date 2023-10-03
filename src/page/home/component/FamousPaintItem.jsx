import React from "react";
import styled from "styled-components";
import FamousPaintSlider from "react-slick";
import Images from "../../../component/Images";
import contentLine from "../../../images/contentLine.svg";
import "aos/dist/aos.css";
import listbn01 from "../../../images/listbn01.jpg";
import listbn02 from "../../../images/listbn02.jpg";
import listbn03 from "../../../images/listbn03.jpg";
import bnArrow from "../../../images/bnArrow.png";
import morebtnArrow from "../../../images/morebtnArrow.png";
import { Link } from "react-router-dom";

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
  };

  return (
    <ItemContent>
      <ContnetLine></ContnetLine>

      <H2Title data-aos="fade-up">
        명화
        <H2SubText>쿠나장롱이 매달 선보이는 심도있는 포스터 이야기</H2SubText>
      </H2Title>

      <FamousPaintSlider {...settings}>
        <BnList data-aos="fade-up">
          <Images imgSrc={listbn01} />
        </BnList>

        <BnList data-aos="fade-up">
          <Images imgSrc={listbn02} />
        </BnList>

        <BnList data-aos="fade-up">
          <Images imgSrc={listbn03} />
        </BnList>

        <BnList data-aos="fade-up">
          <Images imgSrc={listbn01} />
        </BnList>

        <BnList data-aos="fade-up">
          <Images imgSrc={listbn02} />
        </BnList>

        <BnList data-aos="fade-up">
          <Images imgSrc={listbn03} />
        </BnList>
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

const ItemContent = styled.div`
  width: 1600px;
  margin: 0 auto;
  padding: 100px 0 0 0;

  .slick-slider {
    margin-left: -20px;
  }

  .custom-prev-arrow {
    position: absolute;
    top: 43%;
    left: 40px;
    z-index: 1;
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-indent: -9999px;
    background: url(${bnArrow}) center no-repeat;
    background-size: 30px;
    transform: rotate(180deg);
    background-color: #cbcbcb;
    border-radius: 20px;
    padding: 10px 10px;
    overflow: hidden;
  }

  .custom-next-arrow {
    position: absolute;
    top: 43%;
    right: 20px;
    z-index: 1;
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-indent: -9999px;
    background: url(${bnArrow}) center no-repeat;
    background-size: 30px;
    background-color: #cbcbcb;
    border-radius: 20px;
    padding: 10px 10px;
    overflow: hidden;
  }
`;

const ContnetLine = styled.div`
  display: block;
  background: url(${contentLine});
  width: 100%;
  height: 30px;
  background-size: 30px;
`;

const H2Title = styled.div`
  font-family: "BMHANNAPro";
  font-size: 40px;
  text-align: center;
  padding: 50px 0;
  box-sizing: border-box;
`;

const H2SubText = styled.div`
  font-family: "BMHANNAAir";
  font-size: 20px;
  display: block;
  padding: 10px 0 0 0;
`;

const BnList = styled.div`
  padding: 0 0 0 20px;
  box-sizing: border-box;
  img {
    width: 100%;
  }
`;

const MoreBtn = styled.div`
  font-family: "BMHANNAAir";
  font-size: 25px;
  color: #333;
  position: relative;
  z-index: 2;
  display: block;
  margin: 55px 0 0 0;
  text-align: center;
  .Link {
    text-decoration: none;
    background-color: #fff;
    display: inline-block;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #a5a4a4;
    transition: all ease 1s 0s;
  }

  .Link:hover {
    background-color: #3bf234;
  }

  span {
    display: inline-block;
    position: relative;
    padding-right: 35px;
    color: #333;
    transition: all ease 1s 0s;
  }

  span:hover {
    color: #fff;
  }

  span:after {
    content: "";
    width: 35px;
    height: 35px;
    background: url(${morebtnArrow}) no-repeat right;
    background-size: 35px;
    position: absolute;
    top: -3px;
    right: 0;
  }
`;
