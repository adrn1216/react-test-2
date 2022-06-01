import React from "react";
import { useState } from "react";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import { StyledHeader, StyledPage } from "./style";
import bedImage from "../assets/bed-image.webp";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Open the windows.",
      done: false,
    },
    {
      text: "Prepare breakfast.",
      done: false,
    },
    {
      text: "Sweep the floor.",
      done: false,
    },
    {
      text: "Prepare Adobo for Lunch!",
      done: false,
    },
    {
      text: "Wash the dishes.",
      done: false,
    },
    {
      text: "Clean out the fridge, throw away food that's gone bad.",
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
      <img src={bedImage} alt="portrait of a man in formal attire" />
      <div>
        <StyledHeader>
          <h1>Make bed in the morning...</h1>
          <p>
            Making the bed is about setting an intention to do the little things
            that bring about an orderly, thoughtful, responsible, balanced, or
            successful life. In addition to providing a quick sense of daily
            accomplishment, some people find making the bed calming as well.
          </p>
        </StyledHeader>
        <TodoList items={tasks} onItemClick={onItemClick} />
        <NewTodo addTodo={addTodo} />
      </div>
    </StyledPage>
  );
};

export default TaskList;
