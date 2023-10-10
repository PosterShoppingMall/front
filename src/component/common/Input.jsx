import styled from "styled-components";

const InputBox = styled.div`
  padding: 12px 7px 0 0;
  border-radius: 4px;
  span.title {
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 18px;
    padding: 7px 10px 0 0;
  }
  input {
    width: 5rem;
    height: 1.5rem;
  }
`;

const Input = ({ title, type = "text", name, value, onChange }) => {
  return (
    <InputBox>
      <span className="title">{title}</span>
      <input type={type} name={name} value={value} onChange={onChange} />
    </InputBox>
  );
};

export default Input;
