import React from "react";
import { StyledTodoList } from "./style";

const TodoList = ({ items }) => {
  return (
    <StyledTodoList>
      {items.map((item) => {
        const { text, done } = item;
        return <div>{text}</div>;
      })}
    </StyledTodoList>
  );
};

export default TodoList;
