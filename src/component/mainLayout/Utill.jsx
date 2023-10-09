import { useState } from "react";

import styled from "styled-components";

import iconSearch from "../../images/iconSearch.png";
import iconProfile from "../../images/iconProfile.png";
import iconShoppingCart from "../../images/iconShoppingCart.png";

import { NavLink } from "react-router-dom";
const Utill = () => {
  const { data, error, isLoading } = useFetchCartQuery();
  let totalQuantity = 0;
  if (error) {
    console.log("util fetchcart error");
  } else if (!isLoading) {
    totalQuantity = data.length;
  }
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <UtillWrap>
      <Search>
        <a onClick={showModal}>검색</a>
        {modalOpen && (
          <Modal setModalOpen={setModalOpen}>
            <form>
              <input type="search" placeholder="검색어를 입력해주세요." />
            </form>
            <CloseBtn onClick={closeModal}>X</CloseBtn>
          </Modal>
        )}
      </Search>

      <Mypage>
        <NavLink to="/user">마이페이지</NavLink>
      </Mypage>

      <Cart>
        <NavLink to="/cart">장바구니</NavLink>
        <Amount>{totalQuantity}</Amount>
      </Cart>
    </UtillWrap>
  );
};

export default Utill;
const UtillWrap = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  padding: 35px 0 0 50px;
  box-sizing: border-box;

  @media all and (max-width: 1000px) {
    position: absolute;
    top: 0;
    right: 170px;
  }

  @media all and (max-width: 680px) {
    right: 205px;
  }
`;

const Search = styled.div`
  a {
    width: 30px;
    height: 30px;
    background: url(${iconSearch}) no-repeat;
    background-size: 30px;
    text-decoration: none;
    color: #333;
    text-indent: -9999px;
    display: block;
    cursor: pointer;
  }

  @media all and (max-width: 1000px) {
    a {
      height: 100%;
      padding: 0 30px;
      box-sizing: border-box;
    }
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36, 0.8);
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: 100;

  input[type="search"] {
    width: 95%;
    border-top: none;
    border-left: none;
    border-right: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    border-bottom: solid 1px #fff;
    text-align: center;
    padding: 20px 20px;
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 20px;
    color: #fff;
  }

  input[type="search"]::placeholder {
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 20px;
    color: #fff;
  }
`;

const CloseBtn = styled.div`
  font-family: "NanumSquare";
  font-weight: 700;
  font-size: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  cursor: pointer;
`;

const Mypage = styled.div`
  a {
    width: 30px;
    height: 30px;
    background: url(${iconProfile}) no-repeat;
    background-size: 30px;
    text-decoration: none;
    color: #333;
    text-indent: -9999px;
    display: block;
  }

  @media all and (max-width: 1000px) {
    a {
      height: 100%;
      padding: 0 30px;
      box-sizing: border-box;
    }
  }
`;

const Cart = styled.div`
  position: relative;
  a {
    width: 30px;
    height: 30px;
    background: url(${iconShoppingCart}) no-repeat;
    background-size: 30px;
    text-decoration: none;
    color: #333;
    text-indent: -9999px;
    display: block;
  }
`;
const Amount = styled.div`
  background-color: #15aa2b;
  width: 25px;
  padding: 5px 0;
  vertical-align: middle;
  border-radius: 100%;
  color: #fff;
  font-size: 15px;
  text-align: center;
  position: absolute;
  top: -3px;
  right: -25px;
`;
