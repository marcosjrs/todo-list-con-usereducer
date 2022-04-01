import React from 'react'
import { useDataForm } from '../../hooks/useDataForm';

const TodoFormAdd = ({addTodo}) => {
  const [ {texto}, handleInputChange, resetForm ] = useDataForm({texto:''});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const nuevaTarea = { id: new Date().getTime(), texto, hecho: false};  
    addTodo(nuevaTarea);
    resetForm();
  };  

  return (
    <form onSubmit={handleSubmit} className="row g-1">
      <div className="col-auto">
        <input name='texto' value={texto} onChange={handleInputChange} type="text" className="form-control" id="inputTodo" placeholder="Tarea a añadir" />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3"><i className="bi bi-plus-lg"></i></button>
      </div>
    </form>
  )
}

export default TodoFormAdd