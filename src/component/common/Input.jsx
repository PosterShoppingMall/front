import styled from "styled-components";

const InputBox = styled.div`
  padding: 12px 7px 0 0;
  border-radius: 4px;
  span.title {
    width: 15%;
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 18px;
    padding: 7px 10px 0 0;
    display: inline-block;
  }
  input {
    width: 80%;
    height: 1.5rem;
    border: ${({ error }) => (error ? "1px solid red" : "1px solid #ced4da")};
  }
`;

const Input = ({ title, type = "text", name, value, onChange, error }) => {
  return (
    <InputBox error={error}>
      <span className="title">{title}</span>
      <input type={type} name={name} value={value} onChange={onChange} />
    </InputBox>
  );
};

export default Input;
