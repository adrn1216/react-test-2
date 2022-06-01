import React from "react";
import { useState } from "react";
import NewTodo from "../components/NewTodo";
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
      <NewTodo addTodo={addTodo} />
    </StyledPage>
  );
};

export default TaskList;
