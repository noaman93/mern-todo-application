import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

const Todos = () => {
  const [todo, setTodo] = useState({
    name: " ",
    isComplete: false,
  });
  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo}></AddTodo>
      <ListTodos todo={todo} setTodo={setTodo}></ListTodos>
    </>
  );
};

export default Todos;
