import React, { useCallback, useEffect, useReducer } from 'react'
import TodoList from '../components/TodoList/TodoList';
import { useDataForm } from '../hooks/useDataForm';
import { todoReducer } from '../model/reducer/todoReducer';
import './TodosBasico.css'

// const init = () => [{id:new Date().getTime(), texto: 'Aprender React', hecho:false}];
const init = () => {
  return JSON.parse(localStorage.getItem('todos') ) || [];
}

/**
 * Ejemplo básico de "ToDo"s, sin dividir en componentes y muy sencillo.
 * @param {*} props 
 * @returns 
 */
const TodosBasico = props => {

  const [todos, dispatch] = useReducer(todoReducer, [], init); //mejor esto que usar solo el segundo parametro con el initState
  const [ {texto}, handleInputChange, resetForm ] = useDataForm({texto:''});

  const handleSubmit = useCallback( 
    (evt) => {
      evt.preventDefault();
      const nuevaTarea = { id: new Date().getTime(), texto, hecho: false};
      dispatch({type:'add', payload: nuevaTarea});    
      resetForm()
    },
    [resetForm,texto]
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
    //Almacenar en localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  return (
    <div className='TodosBasico container'>
      <header className='d-flex justify-content-between align-items-center' >
        
        <h1>Tareas</h1>

        <form onSubmit={handleSubmit} className="row g-1">
          <div className="col-auto">
            <input name='texto' value={texto} onChange={handleInputChange} type="text" className="form-control" id="inputTodo" placeholder="Tarea a añadir" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3"><i className="bi bi-plus-lg"></i></button>
          </div>
        </form>
      </header>
     
     <TodoList todos={todos} handleClickItem={handleClickItem} handleDelete={handleDelete} />
        
    </div>
  )
}

export default TodosBasico