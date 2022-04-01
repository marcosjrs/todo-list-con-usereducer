import React, { useCallback, useEffect, useReducer } from 'react'
import TodoFormAdd from '../components/TodoFormAdd/TodoFormAdd';
import TodoList from '../components/TodoList/TodoList';
import { useDataForm } from '../hooks/useDataForm';
import { todoReducer } from '../model/reducer/todoReducer';
import './TodosBasico.css'

// const init = () => [{id:new Date().getTime(), texto: 'Aprender React', hecho:false}];
const init = () => {
  return JSON.parse(localStorage.getItem('todos') ) || [];
}

const TodosBasico = props => {

  const [todos, dispatch] = useReducer(todoReducer, [], init); //mejor esto que usar solo el segundo parametro con el initState

  const handleAddTodo = useCallback( 
    (nuevaTarea) => {
      dispatch({type:'add', payload: nuevaTarea});    
    },
    []
  );

  const handleDelete = useCallback(
    (idTodo) => dispatch({type:'remove', payload: parseInt(idTodo)}),
    []
  );

  const handleClickItem =  useCallback(
    (todo) => dispatch({type:'toggle', payload: todo}),
    []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  return (
    <div className='TodosBasico container'>
      <header className='d-flex justify-content-between align-items-center' >        
        <h1>Tareas</h1>
        <TodoFormAdd addTodo={handleAddTodo} />
      </header>     
      <TodoList todos={todos} handleClickItem={handleClickItem} handleDelete={handleDelete} />        
    </div>
  )
}

export default TodosBasico