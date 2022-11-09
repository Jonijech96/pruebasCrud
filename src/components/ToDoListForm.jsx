import React, { useEffect, useState } from 'react'

export const ToDoListForm = ({addTodo,toDoSelected,updateToDo,selectToDo}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (toDoSelected !== null) {
      setTitle(toDoSelected.title);
      setDescription(toDoSelected.description);
      setIsCompleted(toDoSelected.isCompleted);
    }
  }, [toDoSelected]);
  
  const submit = (e) => {
    e.preventDefault();
    const newToDo = {
      id: Date.now(),
      title: title,
      description: description,
      isCompleted: isCompleted
    };
    if(!toDoSelected){
      addTodo(newToDo);
    }else{
      updateToDo(newToDo);

    }
    clear();
    // console.log(newToDo);
  };
  const clear = ()=>{
    setTitle("");
    setDescription("");
    setIsCompleted(false);
  }
  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="title">titulo</label>
        <input type="text" id='title' onChange={e=>setTitle(e.target.value)} value={title}/>
        <label htmlFor="description">description</label>
        <input type="text" id='description' onChange={(e)=>setDescription(e.target.value)} value={description}/>
        <label htmlFor="checked">isChecked</label>
        <input type="checkbox" name="" id="checked" checked={isCompleted} onChange={e=>setIsCompleted(e.target.checked)}/>
        <button>submit</button>
        {
          toDoSelected && <button type='button' onClick={()=>{selectToDo(null);clear()}}>Cancel</button>
        }
      </form>
    </div>
  )
}
