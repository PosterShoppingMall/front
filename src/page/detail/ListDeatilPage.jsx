import React from "react";
import styled from "styled-components";
import DetailPicture from "./DetailPicture";
import DetailPurchase from "./DetailPurchase";
import DetailProductInfor from "./DetailProductInfor";

const ListDeatilPage = () => {
  return (
    <DeTailWrap>
      <div className="deTailPageContents">
        <div className="deTailPageFlex">
          <DetailPicture />
          <DetailPurchase />
        </div>
        <DetailProductInfor />
      </div>
    </DeTailWrap>
  );
};

export default ListDeatilPage;
const DeTailWrap = styled.div`
  width: 1600px;
  margin: 0 auto;
  padding-top: 150px;
  margin-bottom: 150px;

  @media all and (max-width: 1200px) {
    width: 100%;

    div.payPurchaseBox {
      justify-content: flex-start;
      flex-flow: wrap;
    }

    div.payPurchaseBox a.buyNow {
      width: 48%;
    }

    div.payPurchaseBox a.buyNowPay {
      width: 48%;
    }

    div.payPurchaseBox a.buyNowPay i.text:before {
      width: 60px;
      background-size: 60px;
      top: -4px;
    }

    a.cartNow {
      margin-top: 10px;
    }

    a.likeNow {
      margin-top: 10px;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list {
      height: 100%;
    }
  }

  @media all and (max-width: 1000px) {
    div.payPurchaseBox a.buyNowPay i.text:before {
      left: 22px;
    }

    .finalFlexWrap {
      flex-flow: wrap;
    }

    .deliveryInfor p {
      flex-flow: wrap;
    }
  }

  .deTailPageFlex {
    display: flex;
    justify-content: space-between;
  }

  @media all and (max-width: 768px) {
    .deTailPageFlex {
      flex-flow: wrap;
    }
  }
`;
