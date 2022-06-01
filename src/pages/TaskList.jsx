import React from "react";
import { useState } from "react";
import TodoList from "../components/TodoList";
import { StyledPage } from "./style";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      text: "hello.",
      done: false,
    },
    {
      text: "hi.",
      done: false,
    },
  ]);

  return (
    <StyledPage>
      <TodoList items={tasks} />
    </StyledPage>
  );
};

export default TaskList;
