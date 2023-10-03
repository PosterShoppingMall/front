import React from "react";
import styled from "styled-components";
import hLogo from "../../images/hLogo.jpg";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <FooterBox>
      <FooterWrap>
        <FooterLogo data-aos="fade-up"></FooterLogo>

        <CopyRight data-aos="fade-up">
          <span>
            (주) 369포스터 대표이사: 김윤철, 엄수현 / 주소 : 서울
            성동구연무장7가길 7, 2F 사업자등록번호: ***-**-***/
            <br />
            통신판매업신고 : 영등포구청 제 ****-*****호 개인정보 보호책임자 :
            슈퍼코딩/호스팅제공자 : (주) 369포스터
            <br />
            Bank ***-******-***** KEB하나산업은행 369포스터
          </span>
        </CopyRight>
      </FooterWrap>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  border-top: solid 2px #333;
  padding: 50px 0;
  box-sizing: border-box;
`;

const FooterWrap = styled.div`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const FooterLogo = styled.div`
  width: 100px;
  height: 100px;
  background: url(${hLogo}) no-repeat;
  background-size: 100px;
  margin: 0 auto;
`;

const CopyRight = styled.div`
  width: 90%;
  padding: 20px 0 0 20px;
  box-sizing: border-box;

  font-family: "NanumSquare";
  font-size: 17px;
  font-weight: 400;
  line-height: 150%;
`;
