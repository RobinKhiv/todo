import React, {Component} from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';
import TodoContext from './Context/todoContext'

export class App extends Component {
  static contextType = TodoContext

  render() {
    const taskList = this.context.list;
    return (
      <main className="App">
          <TodoForm/>
          <ul>
            {taskList.map((task, i) => <TodoList key={i} toDoTask={task}/>)}
          </ul>
      </main>
    );
  }
}

export default App

