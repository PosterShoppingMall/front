import styled from "styled-components";

const ListItem = styled.div`
  width: 23%;
  padding: 0 0px 50px 20px;

  @media all and (max-width: 1600px) {
    width: 31%;
  }

  @media all and (max-width: 1000px) {
    width: 45%;
    padding: 0 0px 50px 0px;
  }

  @media all and (max-width: 680px) {
    width: 100%;
  }
`;

export default ListItem;
