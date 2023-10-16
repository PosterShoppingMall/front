import React from "react";
import DetailBanner from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Images from "../../component/Images";
import DetailBn01 from "../../images/DetailBn01.jpg";
import DetailBn02 from "../../images/DetailBn02.jpg";
import DetailBn03 from "../../images/DetailBn03.jpg";
import DetailBn04 from "../../images/DetailBn04.jpg";
import DetailBn05 from "../../images/DetailBn05.jpg";

const DetailPicture = () => {
  const Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <PictureContents>
      <div>
        <DetailBanner {...Settings}>
          <div>
            <Images imgSrc={DetailBn01} />
          </div>

          <div>
            <Images imgSrc={DetailBn02} />
          </div>

          <div>
            <Images imgSrc={DetailBn03} />
          </div>

          <div>
            <Images imgSrc={DetailBn04} />
          </div>

          <div>
            <Images imgSrc={DetailBn05} />
          </div>
        </DetailBanner>
      </div>
    </PictureContents>
  );
};

export default DetailPicture;

const PictureContents = styled.div`
  width: 45%;
  img {
    width: 100%;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    height: auto;
  }

  .slick-slide img {
    width: 100%;
    height: auto;
  }

  .slick-dots {
    display: flex;
    justify-content: flex-start;
    position: relative;
    bottom: 0px;
  }

  .slick-dots li {
    width: 95px;
    height: auto;
    margin: 0 0px;
    padding: 0 15px 0 0;
  }

  .slick-dots li button {
    width: auto;
    height: auto;
  }

  .slick-dots li button:before {
    width: 100px;
    height: 100px;
    background-size: 100px !important;
    background: url(${DetailBn01});
    font-size: 0px;
    opacity: 0.35;
  }

  .slick-dots li:nth-child(2) button:before {
    background: url(${DetailBn02});
  }

  .slick-dots li:nth-child(3) button:before {
    background: url(${DetailBn03});
  }

  .slick-dots li:nth-child(4) button:before {
    background: url(${DetailBn04});
  }

  .slick-dots li:nth-child(5) button:before {
    background: url(${DetailBn05});
  }
  /* ${(props) =>
    props.defaultImg &&
    props.defaultImg
      .map(
        (img, index) => `
    .slick-dots li:nth-child(${index + 1}) button:before {
      background: url(${img});
    }
  `
      )
      .join("")} */

  .slick-dots li.slick-active button:before {
    opacity: 0.95;
  }
`;
