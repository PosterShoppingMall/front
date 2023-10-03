import React from "react";
import MainSlider from "react-slick";
import styled from "styled-components";
import Images from "../../../component/Images";
import posterBn01 from "../../../images/posterBn01.png";
import posterBn02 from "../../../images/posterBn02.png";
import posterBn03 from "../../../images/posterBn03.png";
import bnArrow from "../../../images/bnArrow.png";

const MainBn = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <MainBanner>
      <MainSlider {...settings}>
        <MainBnList>
          <Images imgSrc={posterBn01} />
        </MainBnList>

        <MainBnList>
          <Images imgSrc={posterBn02} />
        </MainBnList>

        <MainBnList>
          <Images imgSrc={posterBn03} />
        </MainBnList>

        <MainBnList>
          <Images imgSrc={posterBn02} />
        </MainBnList>

        <MainBnList>
          <Images imgSrc={posterBn01} />
        </MainBnList>
      </MainSlider>
    </MainBanner>
  );
};

export default MainBn;

const MainBanner = styled.div`
  width: 100%;
  .custom-prev-arrow {
    position: absolute;
    top: 43%;
    left: 40px;
    z-index: 10;
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-indent: -9999px;
    background: url(${bnArrow}) center no-repeat;
    background-size: 50px;
    transform: rotate(180deg);
    background-color: #cbcbcb;
    border-radius: 20px;
    padding: 15px 15px 15px 15px;
    overflow: hidden;
  }

  .custom-next-arrow {
    position: absolute;
    top: 43%;
    right: 20px;
    z-index: 10;
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-indent: -9999px;
    background: url(${bnArrow}) center no-repeat;
    background-size: 50px;
    background-color: #cbcbcb;
    border-radius: 20px;
    padding: 15px 15px 15px 15px;
    overflow: hidden;
  }
`;

const MainBnList = styled.div`
  width: 100%;
  height: 700px;

  img {
    width: 100%;
    height: 100%;
  }
`;
