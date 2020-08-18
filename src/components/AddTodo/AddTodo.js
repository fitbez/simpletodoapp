import React from "react";

class AddTodo extends React.Component {
  state = {
    todo: "",
  };

  onChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
    // console.log(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.todo);
    this.setState({
      todo: "",
    });
    console.log(this.state.todo);
  };

  render() {
    return (
      <form action="" className="input-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          placeholder="Insert todo...."
          className="input-text"
          onChange={this.onChange}
        />
        <input type="submit" value="AddTodo" className="input-button" />
      </form>
    );
  }
}

export default AddTodo;
