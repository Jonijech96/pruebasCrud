import React from 'react'


export const ToDoList = ({selectToDo,toDoList,deleteToDo}) => {
  return (
    <ul>
      {toDoList.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <div>
            <b>description:</b>
            {todo.description}
          </div>
          
          <div>
            <b>Is Completed:</b> {todo.isCompleted.toString()}
          </div>
          {/* <button onClick={() => deleteProduct(product.id)}>Delete</button> */}
          <button onClick={() => selectToDo(todo)}>Select</button>
          <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
