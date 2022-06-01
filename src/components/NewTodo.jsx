import React, { useState } from "react";
import Button from "./Button";
import { StyledNewTodo } from "./style";

const NewTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (e) => {
    let text = e.target.value;
    setTodo(text);
  };

  const handleAddTodo = (todo) => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <StyledNewTodo>
      <input
        type="text"
        value={todo}
        placeholder="Do More!"
        onChange={(e) => handleTodoChange(e)}
      />
      <Button onClick={() => handleAddTodo(todo)} disabled={!todo}>
        add
      </Button>
    </StyledNewTodo>
  );
};

export default NewTodo;
