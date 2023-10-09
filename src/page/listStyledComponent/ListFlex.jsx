import styled from "styled-components";

const ListFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px 0 50px 0;
  box-sizing: border-box;
  flex-flow: wrap;

  @media all and (max-width: 1000px) {
    justify-content: space-between;
  }
`;

export default ListFlex;
