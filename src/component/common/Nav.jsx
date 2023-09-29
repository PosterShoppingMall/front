import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrap>
      <ul>
        <li>
          <a href="#n">베스트</a>
        </li>

        <li>
          <a href="#n">전체상품</a>
        </li>

        <li>
          <a href="#n">일러스트</a>
        </li>

        <li>
          <a href="#n">명화</a>
        </li>

        <li>
          <a href="#n">포토그래피</a>
        </li>

        <li>
          <a href="#n">타이포그래피</a>
        </li>
      </ul>
    </NavWrap>
  );
};

export default Nav;
const NavWrap = styled.div`
  width: 75%;
  font-family: "BMHANNAAir";
  font-weight: 400;
  font-size: 20px;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  ul li {
    width: 16%;
  }

  ul li a {
    width: 100%;
    text-decoration: none;
    color: #333;
    position: relative;
    padding: 40px 20px;
    display: block;
    transition: all 2s;
    text-align: center;
  }

  ul li a:hover {
    color: #fff;
    z-index: 1;
  }

  ul li a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2e2e2b;
    transform-origin: top center;
    transform: scaleY(0); /* 초기에는 높이가 0 */
    transition: transform 0.3s ease;
    z-index: -1; /* 배경을 텍스트 아래로 이동 */
  }

  ul li a:hover:before {
    transform: scaleY(1);
  }
`;
