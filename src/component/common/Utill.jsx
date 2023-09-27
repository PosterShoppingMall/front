import { useState } from "react";
import styled from "styled-components";
import iconSearch from "../../images/iconSearch.png";
import iconProfile from "../../images/iconProfile.png";
import iconShoppingCart from "../../images/iconShoppingCart.png";

const Utill = () => {
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
        <a href="#n" onClick={showModal}>
          검색
        </a>
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
        <a href="#n">마이페이지</a>
      </Mypage>

      <Cart>
        <a href="#n">장바구니</a>
        <Amount>0</Amount>
      </Cart>
    </UtillWrap>
  );
};

export default Utill;
const UtillWrap = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  padding: 35px 0 0 50px;
  box-sizing: border-box;
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
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36, 0.8);
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;

  input[type="search"] {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    position: absolute;
    top: 50%;
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
