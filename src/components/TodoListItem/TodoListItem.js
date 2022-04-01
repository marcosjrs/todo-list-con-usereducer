import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({todo, handleClickItem, handleDelete}) => {
  console.log("TodoListItem");
  return (     
    <li className='TodoListItem list-group-item d-flex justify-content-between align-items-center' key={todo.id}>
      <div onClick={()=>handleClickItem(todo)} className={todo.hecho?'text-decoration-line-through':''} >{todo.texto}</div> 
      <button onClick={()=>handleDelete(todo.id)} type="button" className="btn btn-danger"><i className="bi bi-trash"></i></button>
    </li>   
  )
}

export default React.memo(TodoListItem)