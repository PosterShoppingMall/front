import styled from "styled-components";
import { NavLink } from "react-router-dom";
import mbMenu from "../../images/mbMenu.png";

const Nav = (props) => {
  return (
    <NavWrap>
      <ul className={`mobile-menu ${props.menuisOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/best" onClick={props.handleLinkClick}>
            베스트
          </NavLink>
        </li>

        <li>
          <NavLink to="/all" onClick={props.handleLinkClick}>
            전체상품
          </NavLink>
        </li>

        <li>
          <NavLink to="/illustrator" onClick={props.handleLinkClick}>
            일러스트
          </NavLink>
        </li>

        <li>
          <NavLink to="/famous-painting" onClick={props.handleLinkClick}>
            명화
          </NavLink>
        </li>

        <li>
          <NavLink to="/photography" onClick={props.handleLinkClick}>
            포토그래피
          </NavLink>
        </li>

        <li>
          <NavLink to="/typography" onClick={props.handleLinkClick}>
            타이포그래피
          </NavLink>
        </li>

        <button className="toggle-button closeBtn" onClick={props.toggleMenu}>
          {props.menuisOpen ? "X" : ""}
        </button>
      </ul>

      <MobileMenu>
        <button className="mbBtn" onClick={props.toggleMenu}>
          모바일메뉴
        </button>
      </MobileMenu>
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
    box-sizing: border-box;
  }

  @media all and (max-width: 680px) {
    ul li a {
      padding: 20px 0px;
    }
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

  .toggle-button.closeBtn {
    display: none;
  }

  @media all and (max-width: 1000px) {
    ul.mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      background: rgb(51, 51, 51, 0.9);
      transform: translateY(-100%);
      transition: transform 0.3s ease-in-out;
      z-index: 10;
      flex-flow: wrap;
      padding: 80px 0 0 0;
    }

    ul.mobile-menu li {
      width: 100%;
    }
    ul.mobile-menu li a {
      color: #fff;
    }
    ul.mobile-menu li a:hover {
      color: #333;
    }

    ul li a:before {
      background: #fff;
    }

    ul.mobile-menu.open {
      transform: translateY(0);
      height: auto;
      top: 0px;
    }

    .toggle-button.closeBtn {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      font-family: "BMHANNAAir";
      font-size: 50px;
      color: #fff;
      border: none;
      background: none;
    }
  }

  @media all and (max-width: 680px) {
    .toggle-button.closeBtn {
      font-size: 40px;
    }
  }
`;

const MobileMenu = styled.div`
  .mbBtn {
    display: none;
    text-indent: -9999px;
    border: none;
  }

  @media all and (max-width: 1000px) {
    .mbBtn {
      display: block;
      width: 80px;
      height: 100px;
      background: url(${mbMenu}) no-repeat center #d2d2d2;
      background-size: 45px;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }

    @media all and (max-width: 680px) {
      .mbBtn {
        width: 70px;
        background-size: 40px;
      }
    }
  }
`;
