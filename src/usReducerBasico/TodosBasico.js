import React, { useEffect, useReducer } from 'react'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = { id: new Date().getTime(), texto, hecho: false};
    dispatch({type:'add', payload: nuevaTarea});    
    resetForm();
  };

  const handleDelete = (idTodo) => {
    dispatch({type:'remove', payload: parseInt(idTodo)});
  };

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
     
      <ul className='list-group'>
        {todos.map( (t, indice) =>
          <li className='list-group-item d-flex justify-content-between align-items-center' key={t.id}>
            <div className={t.hecho?'text-decoration-line-through':''} >{indice+1}- {t.texto}</div> 
            <button onClick={()=>handleDelete(t.id)} type="button" className="btn btn-danger"><i className="bi bi-trash"></i></button>
          </li> 
        )}
      </ul>    
        
    </div>
  )
}

export default TodosBasico