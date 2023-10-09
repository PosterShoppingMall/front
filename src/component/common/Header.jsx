import Nav from "./Nav";
import Utill from "./Utill";
import styled from "styled-components";
// import Images from "../Images.jsx";
import hLogo from "../../images/hLogo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuisOpen, menusetIsOpen] = useState(false);

  const toggleMenu = () => {
    menusetIsOpen(!menuisOpen);
  };

  const handleLinkClick = () => {
    closeMenu(); // 라우터 링크 클릭 시 메뉴 닫기
  };

  const closeMenu = () => {
    menusetIsOpen(false);
  };

  return (
    <HeaderBox>
      <HeaderWrap>
        <Logo>
          <Link to="/">369로고</Link>
        </Logo>
        <Nav
          menuisOpen={menuisOpen}
          toggleMenu={toggleMenu}
          handleLinkClick={handleLinkClick}
          closeMenu={closeMenu}
        />
        <Utill />
      </HeaderWrap>
    </HeaderBox>
  );
};

export default Header;
const HeaderBox = styled.div`
  width: 100%;
  background-color: #e5e1dc;
  box-shadow: -2px -5px 19px 11px #b7b5b5;
  position: fixed;
  height: 100px;
  z-index: 9;
`;

const HeaderWrap = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media all and (max-width: 1200px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;

  a {
    width: 100%;
    height: 100%;
    text-indent: -9999px;
    display: block;
    background: url(${hLogo}) no-repeat;
    background-size: 100px;
  }
`;
