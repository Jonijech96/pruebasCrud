import React, { useState } from 'react'
import { ToDoListForm } from './ToDoListForm'
import { ToDoList } from './ToDoList'

export const ToDoListApp = () => {
  const toDoListDefalult = [
    {id:1,title:"name",description:"description",isCompleted:false},

  ]
  const [toDoList, setToDoList] = useState(toDoListDefalult);

  const [toDoSelected, setToDoSelected] = useState(null);

  const selectToDo=(todo)=>{
    setToDoSelected(todo);
    
  }
  
  const addTodo = (newToDo) => {
    // productsList.push(newProduct);
    setToDoList([...toDoList, newToDo]);
  };

  const updateToDo = (newToDo)=>{
    newToDo.id = toDoSelected.id;
    const idToDo =toDoList.findIndex(toDo=>toDo.id === toDoSelected.id);
    toDoList[idToDo] = newToDo;
    setToDoList([...toDoList]);
    selectToDo(null);
  }
  const deleteToDo= (id)=>{
    const toDoFiltered = toDoList.filter(toDo=>toDo.id!==id);
    setToDoList(toDoFiltered);
  }

  return (
    <div>
      <ToDoListForm addTodo={addTodo} toDoSelected={toDoSelected} updateToDo={updateToDo} selectToDo={selectToDo}/>
      <ToDoList selectToDo={selectToDo} toDoList={toDoList} deleteToDo={deleteToDo}/>
    </div>
  )
}
