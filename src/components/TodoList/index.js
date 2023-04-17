import './index.css'

const TodoList = props => {
  const {todoDetails} = props
  const {id, input} = todoDetails

  const onDeleteTodo = () => {
    const {deleteTodo} = props
    deleteTodo(id)
  }

  return (
    <li className="li-container">
      {/* <input type="checkbox" /> */}
      <div>
        <p className="input">{input}</p>
      </div>
      <button
        className="button-icon"
        type="button"
        onClick={onDeleteTodo}
        data-testid="delete"
      >
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TodoList
