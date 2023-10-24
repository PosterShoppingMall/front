import { useState } from "react";

// import { useSelector } from "react-redux";

import styled from "styled-components";
import iconProfile from "../../images/iconProfile.png";
import iconShoppingCart from "../../images/iconShoppingCart.png";

import { NavLink } from "react-router-dom";

import { useFetchCartQuery } from "../../store/cartApi";
import Search from "./Search";

const Utill = () => {
  const { data, error, isLoading } = useFetchCartQuery();

  // 유저 권한
  // const user = useSelector((state) => state.auth.user);

  let totalQuantity = 0;
  if (error) {
    console.log("util fetchcart error");
  } else if (!isLoading) {
    totalQuantity = data.length;
  }

  return (
    <UtillWrap>
      <Search />

      <Mypage>
        {/* <NavLink to={user.role === 'admin' ? '/admin' : '/user'}>마이페이지</NavLink> */}
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
