import React, { Component } from 'react'
import TodoContext from '../Context/todoContext';

export class TodoForm extends Component {
  static contextType = TodoContext
  formSubmit = event => {
    event.preventDefault();
    const task = event.target.todoListEntry.value;
    this.context.addTask(task)
  }
  render() {
    return (
      <form onSubmit={this.formSubmit}>
          <label htmlFor='todoListEntry'>To Do:</label>
          <input type='text' name='todoListEntry' placeholder='laundry'/>
          <input type="submit" value='Submit'/>
      </form>)
  }
}

export default TodoForm
