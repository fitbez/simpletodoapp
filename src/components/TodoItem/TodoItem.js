import React from "react";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#616161",
    textDecoration: "line-through",
  };

  return (
    <div className="todos">
      <li>
        <input
          type="checkbox"
          onChange={() => props.handleChange(props.todo.id)}
          checked={props.todo.completed}
        />
        <span style={props.todo.completed ? completedStyle : null}>
          {" "}
          {props.todo.todo}
        </span>
        <button onClick={() => props.handleDelete(props.todo.id)}>x</button>
      </li>
    </div>
  );
};

export default TodoItem;
