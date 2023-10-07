import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bnArrow from "../../images/bnArrow.png";
import "aos/dist/aos.css";

const ListPagination = () => {
  return (
    <PagenationWrap data-aos="fade-up">
      <Link to="/" className="PrevBtn"></Link>
      <Number>
        <Link to="/" className="NumberLink active">
          1
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          2
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          3
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          4
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          5
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          6
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          7
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          8
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          9
        </Link>
      </Number>

      <Number>
        <Link to="/" className="NumberLink">
          10
        </Link>
      </Number>

      <Link to="/" className="NextBtn"></Link>
    </PagenationWrap>
  );
};

export default ListPagination;
const PagenationWrap = styled.div`
  padding: 0px 0 100px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  .PrevBtn {
    width: 30px;
    height: 16px;
    background: url(${bnArrow}) no-repeat 10px 0px;
    background-size: 16px;
    transform: rotate(180deg);
  }

  .NextBtn {
    width: 50px;
    height: 16px;
    background: url(${bnArrow}) no-repeat 25px 0px;
    background-size: 16px;
    transform: rotate(360deg);
  }
`;
const Number = styled.div`
  padding: 1px 0 0 20px;
  box-sizing: border-box;

  .NumberLink {
    font-family: "NanumSquare";
    font-size: 16px;
    font-weight: 400;
    color: #333;
    text-decoration: none;
  }

  .NumberLink.active {
    background: #333;
    border-radius: 100%;
    color: #fff;
    padding: 5px 9px;
    vertical-align: middle;
  }
`;
