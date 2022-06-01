import styled from "styled-components";

export const StyledTodoList = styled.div``;

export const StyledButton = styled.button`
  outline: 0;
  background-color: ${(props) => (props.disabled ? "#dbe9fd" : "#0b6bf2")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: 0.3s;
  border: 0;
  width: 200px;
  height: 40px;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 5px;
  :active {
    background-color: ${(props) => (props.disabled ? "#dbe9fd" : "#0243eb")};
  }
`;
