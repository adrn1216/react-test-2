import React from "react";
import { StyledTodoList } from "./style";

const TodoList = ({ items, onItemClick }) => {
  const handleTodoClick = (todo, e, index) => {
    if (!todo.done) {
      onItemClick(index);
    } else {
      e.preventDefault();
    }
  };

  return (
    <StyledTodoList>
      {items.map((item, index) => {
        const { text, done } = item;
        return (
          <div
            className={done ? "done" : "todo"}
            onClick={(e) => handleTodoClick(item, e, index)}
          >
            <span>{text}</span>
            {done && <span>✓</span>}
          </div>
        );
      })}
    </StyledTodoList>
  );
};

export default TodoList;
