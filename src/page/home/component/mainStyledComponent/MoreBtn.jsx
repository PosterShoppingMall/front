import styled from "styled-components";
import morebtnArrow from "../../../../images/morebtnArrow.png";

const MoreBtn = styled.div`
  font-family: "BMHANNAAir";
  font-size: 20px;
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
    padding: 10px;
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

export default MoreBtn;
