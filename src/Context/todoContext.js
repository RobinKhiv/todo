import React, {Component}from 'react'

const TodoContext = React.createContext({
    list: [],
    addTask: () =>{}
})

export default TodoContext;

export class TodoContextProvider extends Component {
    state = {
        list: []
    }
    addTask = task => {
        const stateCopy = [...this.state.list , task]
        this.setState({
            list: stateCopy
        })
    }
    render() {
        const value = {
            list: this.state.list,
            addTask: this.addTask
        }
        return (
          <TodoContext.Provider value={value}>
            {this.props.children}
          </TodoContext.Provider>  
        )
    }
}
