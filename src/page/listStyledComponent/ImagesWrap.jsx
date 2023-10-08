import styled from "styled-components";

const ImagesWrap = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: block;
  position: relative;

  @media all and (max-width: 680px) {
    height: 280px;
  }

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

export default ImagesWrap;
