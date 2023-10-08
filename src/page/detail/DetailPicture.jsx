import React, { useEffect, useState } from "react";
import DetailBanner from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from "styled-components";
import Images from "../../component/Images";
import axios from "axios";

// 이미지 파일들을 가져오기
import DetailBn01 from "../../images/DetailBn01.jpg";
import DetailBn02 from "../../images/DetailBn02.jpg";
import DetailBn03 from "../../images/DetailBn03.jpg";
import DetailBn04 from "../../images/DetailBn04.jpg";
import DetailBn05 from "../../images/DetailBn05.jpg";

const dynamicStyles = (items) => {
  if (items) {
    return css`
      .slick-dots li button:before {
        width: 100px;
        height: 100px;
        background-size: 100px !important;
        background: url(${DetailBn01});
        font-size: 0px;
        opacity: 0.35;
      }

      ${items.map(
        (item, index) => css`
          .slick-dots li:nth-child(${index + 1}) button:before {
            background: url(${item.imgSrc});
          }
        `
      )}
    `;
  }

  return css``;
};

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

  const [items, setItems] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://shoppingmall-9c992-default-rtdb.firebaseio.com/detailitem.json"
      )
      .then((response) => {
        const data = response.data;
        const testData = Object.values(data);
        setItems(testData);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, []);

  return (
    <PictureContents items={items}>
      <div>
        <DetailBanner {...Settings}>
          {items &&
            items.map((item, key) => (
              <div key={key}>
                <Images imgSrc={item.imgSrc} />
              </div>
            ))}
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

  ${(props) => dynamicStyles(props.items)}

  .slick-dots li.slick-active button:before {
    opacity: 0.95;
  }
`;
