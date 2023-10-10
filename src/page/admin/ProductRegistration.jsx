import React from 'react';
import styled from 'styled-components';
import H3Title from '../listStyledComponent/H3Title';
import ProductForm from './ProductForm';

function ProductRegistration() {
  return (
    <ListWrap>
      <H3Title data-aos="fade-up">상품등록</H3Title>
      <ProductForm />
    </ListWrap>
  );
}

const ListWrap = styled.div`
  padding: 200px 0 0 0;
  width: 1600px;
  margin: 0 auto;
`;

export default ProductRegistration;
