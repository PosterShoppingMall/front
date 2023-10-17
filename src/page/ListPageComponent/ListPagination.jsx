import React from "react";
import bnArrow from "../../images/bnArrow.png";
import styled from "styled-components";
import "aos/dist/aos.css";

const ListPagination = (props) => {
  return (
    <PagenationWrap data-aos="fade-up">
      <button className="PrevBtn btn" onClick={props.goToPrevPage}></button>

      {pageNumbers.map((pageNumber) => (
        <Number key={props.pageNumber}>
          <button
            className={`NumberLink ${
              props.currentPage === pageNumber ? "active" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        </Number>
      ))}

      <button className="NextBtn btn" onClick={props.goToNextPage}></button>
    </PagenationWrap>
  );
};

export default ListPagination;

const PagenationWrap = styled.div`
  padding: 0px 0 100px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  button.btn {
    border: none;
    margin-top: 4px;
    cursor: pointer;
  }

  button.PrevBtn {
    width: 50px;
    height: 16px;
    background: url(${bnArrow}) no-repeat 22px 0px;
    background-size: 16px;
    transform: rotate(180deg);
  }

  button.NextBtn {
    width: 50px;
    height: 16px;
    background: url(${bnArrow}) no-repeat 22px 0px;
    background-size: 16px;
    transform: rotate(360deg);
  }
`;

const Number = styled.div`
  button.NumberLink {
    font-family: "NanumSquare";
    font-size: 16px;
    font-weight: 400;
    color: #333;
    text-decoration: none;
    padding: 5px 10px 0 10px;
    box-sizing: border-box;
    border: none;
    background: none;
    cursor: pointer;
  }

  button.NumberLink.active {
    background: #333;
    border-radius: 100%;
    color: #fff;
    padding: 5px 9px;
    box-sizing: border-box;
    vertical-align: middle;
  }
`;
