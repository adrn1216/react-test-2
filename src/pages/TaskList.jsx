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
  const [todo, setTodo] = useState("");

  const addTodo = (text) => {
    let newTask = { text: text, done: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <StyledPage>
      <TodoList items={tasks} />
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => addTodo(todo)}>Add</button>
      </div>
    </StyledPage>
  );
};

export default TaskList;
