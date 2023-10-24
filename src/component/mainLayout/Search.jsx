import { useState } from "react";
import styled from "styled-components";
import iconSearch from "../../images/iconSearch.png";

const Search = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <SearchWrap>
      <a onClick={showModal}>검색</a>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <form>
            <input type="text" placeholder="검색어를 입력해주세요." />
          </form>
          <CloseBtn onClick={closeModal}>X</CloseBtn>
        </Modal>
      )}
    </SearchWrap>
  );
};

export default Search;

const SearchWrap = styled.div`
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

  input[type="text"] {
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

  input[type="text"]::placeholder {
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
