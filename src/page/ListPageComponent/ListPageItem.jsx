import React from "react";
import "aos/dist/aos.css";
import ListItemExpensive from "./ListItemExpensive";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ListFlex from "../listStyledComponent/ListFlex";
import { Link } from "react-router-dom";
import bnArrow from "../../images/bnArrow.png";
import styled from "styled-components";

const ListPageItem = (props) => {
  // 페이지당 데이터 개수에 따른 페이지 수 계산
  const totalPages = props.items
    ? Math.ceil(props.items.length / props.itemsPerPage)
    : 0;

  // 현재 페이지에 해당하는 데이터 필터링
  const startIndex = (props.currentPage - 1) * props.itemsPerPage;
  const endIndex = props.currentPage * props.itemsPerPage;
  const currentData = props.items
    ? props.items.slice(startIndex, endIndex)
    : [];

  const handlePageChange = (newPage) => {
    props.setCurrentPage(newPage);
  };

  // 이전 페이지로 이동
  const goToPrevPage = () => {
    if (props.currentPage > 1) {
      handlePageChange(props.currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const goToNextPage = () => {
    if (props.currentPage < totalPages) {
      handlePageChange(props.currentPage + 1);
    }
  };

  // 페이지 번호 동적 생성
  const pageNumbers = Array.from({ length: totalPages }).map(
    (_, index) => index + 1
  );

  return (
    <>
      <ListFlex>
        {currentData.map((item, key) => (
          <ListItemExpensive key={key} item={item} />
        ))}
      </ListFlex>

      <PagenationWrap data-aos="fade-up">
        <button className="PrevBtn btn" onClick={goToPrevPage}></button>

        {pageNumbers.map((pageNumber) => (
          <Number key={pageNumber}>
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

        <button className="NextBtn btn" onClick={goToNextPage}></button>
      </PagenationWrap>
    </>
  );
};

export default ListPageItem;

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
