import styled from "styled-components";

export const StyledTodoList = styled.div`
  cursor: pointer;
  > div {
    border: 1px solid #dbe9fd;
    padding: 15px;
    margin: 10px 0;
    transition: 0.3s;
    display: flex;
    justify-content: space-between;
    span {
      word-break: break-all;
    }
  }
  .todo {
    :hover {
      box-shadow: 0 0 5px 1px #dbe9fd;
      transition: 0.3s;
    }
    :active {
      background-color: #dbe9fd;
    }
  }
  .done {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

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

export const StyledNewTodo = styled.div`
  display: flex;
  border-top: 1px solid #dbe9fd;
  padding: 15px;
  margin: 10px 0;
  align-items: center;
  > input {
    outline: 0;
    height: 100%;
    border: 0;
    flex-grow: 1;
    font-size: 16px;
  }
  > button {
    cursor: pointer;
  }
`;
