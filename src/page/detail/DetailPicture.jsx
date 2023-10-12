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
import { useParams } from "react-router-dom";

const dynamicStyles = (itemImageUrl) => {
  if (itemImageUrl) {
    return css`
      .slick-dots li button:before {
        width: 100px;
        height: 100px;
        background-size: 100px !important;
        /* background: url(${items.imageUrl}); */
        font-size: 0px;
        opacity: 0.35;
      }

      ${itemImageUrl.map(
        (item, index) => css`
          .slick-dots li:nth-child(${index + 1}) button:before {
            background: url(${item.imageUrl});
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

  const [itemImageUrl, setItemImageUrl] = useState(null);
  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`http://52.78.184.121:8080/369/product/${productId}`)
      .then((response) => {
        const data = response.data;
        const imageUrl = data.productImages[0].imagePath;
        setItemImageUrl(imageUrl);
        console.log("매핑된 데이터", data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, [productId]);

  return (
    <PictureContents imageUrl={itemImageUrl}>
      <div>
        <DetailBanner {...Settings}>
          {itemImageUrl && (
            <div>
              <Images imgSrc={itemImageUrl} />
            </div>
          )}
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
  @media all and (max-width: 1000px) {
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

  @media all and (max-width: 1600px) {
    .slick-dots li {
      width: 70px;
    }
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
