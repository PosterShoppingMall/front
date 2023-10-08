import styled from "styled-components";
import bnArrow from "../../../../images/bnArrow.png";

const ItemContent = styled.div`
  width: 1600px;
  margin: 0 auto;
  padding: 100px 0 0 0;

  @media all and (max-width: 1600px) {
    width: 100%;
  }

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

export default ItemContent;
