import {Component} from 'react'

import {v4} from 'uuid'

import TodoList from '../TodoList'
import './index.css'

class TodoItem extends Component {
  state = {todoInput: '', todosList: []}

  onChangeInput = event => {
    this.setState({todoInput: event.target.value})
  }

  deleteTodo = id => {
    const {todosList} = this.state

    this.setState({todosList: todosList.filter(todo => todo.id !== id)})
    console.log('triggered')
  }

  onAddTodo = event => {
    event.preventDefault()
    const {todoInput} = this.state
    const newTodo = {
      id: v4(),
      input: todoInput,
      isTicked: false,
    }
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      todoInput: '',
    }))
  }

  renderAddTodoList = () => {
    const {todosList} = this.state
    return todosList.map(eachItem => (
      <TodoList
        key={eachItem.id}
        todoDetails={eachItem}
        deleteTodo={this.deleteTodo}
      />
    ))
  }

  //   renderNotTask = () => {
  //     const {todoInput} = this.state
  //     return (
  //       <div>
  //         <p>No tasks yet</p>
  //       </div>
  //     )
  //   }

  render() {
    const {todoInput, todosList} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Todos List</h1>
        <div className="todo-input-container">
          <form onSubmit={this.onAddTodo}>
            <h1 className="todo-heading">Create Todos</h1>
            <input
              type="text"
              className="input-container"
              placeholder="what needs to be done?"
              value={todoInput}
              onChange={this.onChangeInput}
            />
            <button type="submit" className="button">
              Add Todo
            </button>
          </form>
        </div>
        <hr className="horizontal-line" />
        <ul className="ul-container">
          <h2 className="my-task">
            My Tasks <span className="count">{todosList.length}</span>
          </h2>
          {this.renderAddTodoList()}
        </ul>
      </div>
    )
  }
}

export default TodoItem
