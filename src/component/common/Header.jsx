import Nav from "./Nav";
import Utill from "./Utill";
import styled from "styled-components";
// import Images from "../Images.jsx";
import hLogo from "../../images/hLogo.jpg";

const Header = () => {
  return (
    <HeaderBox>
      <HeaderWrap>
        <Logo>
          <a href="#">369로고</a>
        </Logo>
        <Nav />
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
`;

const HeaderWrap = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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
