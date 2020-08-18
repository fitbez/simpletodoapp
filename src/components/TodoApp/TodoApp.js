import React from "react";
import Header from "../Header/Header";
import AddTodo from "../AddTodo/AddTodo";
import Todos from "../Todos/Todos";

class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        todo: "Setup development environmenet",
        completed: true,
      },
      {
        id: 2,
        todo: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        todo: "Deploy to live server",
        completed: false,
      },
    ],
  };

  // handle deleting of a todo from a todo list
  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  // This will add a new todo to the list
  handleAddTodo = (todo) => {
    const newTodo = {
      id: 4,
      todo: todo,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <Todos
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoApp;
