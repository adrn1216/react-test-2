import React from "react";
import { useState } from "react";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
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

  const onItemClick = (index) => {
    let tempTasks = [...tasks];
    tempTasks[index] = {
      text: tasks[index].text,
      done: true,
    };
    setTasks(tempTasks);
  };

  const addTodo = (text) => {
    let newTask = { text: text, done: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <StyledPage>
      <TodoList items={tasks} onItemClick={onItemClick} />
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={() => addTodo(todo)} disabled={!todo}>
          add
        </Button>
      </div>
    </StyledPage>
  );
};

export default TaskList;
