import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function Todos(props) {
  //   console.log(props);
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            handleChange={props.handleChange}
            handleDelete={props.handleDelete}
            todo={todo}
          />
        );
      })}
    </div>
  );
}
