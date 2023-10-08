import styled from "styled-components";

const H3Title = styled.div`
  font-family: "BMHANNAPro";
  font-size: 40px;
  text-align: center;
  padding: 50px 0 50px 0;
  box-sizing: border-box;
  border-top: solid 2px #333;
  border-bottom: solid 2px #333;
  margin-bottom: 30px;

  @media all and (max-width: 1000px) {
    padding: 30px 0 30px 0;
    font-size: 30px;
    border-top: solid 1px #333;
    border-bottom: solid 1px #333;
  }
`;

export default H3Title;
