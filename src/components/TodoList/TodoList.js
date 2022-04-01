import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({todos, handleClickItem, handleDelete}) => {
  return (     
    <ul className='TodoList list-group'>
      {todos.map( (t) =>
        <TodoListItem key={t.id} todo={t} handleClickItem={handleClickItem} handleDelete={handleDelete} />
      )}
    </ul>    
  )
}

export default React.memo(TodoList)