import { useState } from "react";
import styled from "styled-components";
import bnArrow from "../../images/bnArrow.png";

const PurchaseComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <PurchaseWrap>
      <PosterSizeOption>
        <span className="title">포스터 사이즈</span>
        <select>
          <option value="옵션을 선택하세요">옵션을 선택하세요</option>
          <option value="a2">A2 (42x59.4cm)</option>
          <option value="5070">50 x 70 cm</option>
          <option value="a1">A1 (59.4x84.1cm)</option>
        </select>
      </PosterSizeOption>

      <PosterOption>
        <span className="title">옵션선택</span>
        <select>
          <option value="옵션을 선택하세요">옵션을 선택하세요</option>
          <option value="A2 골드알루미늄(+7만원)">
            A2 골드알루미늄(+7만원)
          </option>
          <option value="A3 골드알루미늄(+8만원)">
            A3 골드알루미늄(+8만원)
          </option>
          <option value="A4 골드알루미늄(+9만원)">
            A4 골드알루미늄(+9만원)
          </option>
        </select>
      </PosterOption>

      <PurChaseBox>
        <ItemCounter>
          <span className="ItemNumber">{count}</span>
          <div className="creaseBtn">
            <button className="Increase" onClick={handleIncrement}></button>
            <button className="Decrease" onClick={handleDecrement}></button>
          </div>
        </ItemCounter>
        <button className="cartBtn common">장바구니</button>
        <button className="purChaseBtn common">구매하기</button>
      </PurChaseBox>
    </PurchaseWrap>
  );
};

export default PurchaseComponent;

const PurchaseWrap = styled.div`
  padding: 40px 0 0 0;
`;

const PosterSizeOption = styled.div`
  display: flex;
  justify-content: flex-start;
  span.title {
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 18px;
    padding: 7px 10px 0 0;
  }
  select {
    padding: 7px 5px;
    box-sizing: border-box;
  }
`;

const PosterOption = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  justify-content: flex-start;

  span.title {
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 18px;
    padding: 7px 10px 0 0;
  }
  select {
    padding: 7px 5px;
    box-sizing: border-box;
  }
`;

const PurChaseBox = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  justify-content: flex-start;

  button.common {
    background: #000;
    border: none;
    padding: 20px 50px;
    box-sizing: border-box;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }

  button.cartBtn {
    margin-right: 5px;
  }
`;

const ItemCounter = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px #333;
  padding: 10px 10px;
  margin-right: 20px;

  span.ItemNumber {
    padding: 10px 0 0 0;
  }

  div.creaseBtn {
    padding: 7px 0 0 15px;
  }

  button {
    display: block;
    border: none;
    background-color: none;
    cursor: pointer;
  }

  button.Increase {
    width: 10px;
    height: 10px;
    background: url(${bnArrow}) no-repeat top;
    background-size: 10px;
    transform: rotate(270deg);
  }

  button.Decrease {
    width: 10px;
    height: 10px;
    background: url(${bnArrow}) no-repeat bottom;
    background-size: 10px;
    transform: rotate(90deg);
  }
`;
