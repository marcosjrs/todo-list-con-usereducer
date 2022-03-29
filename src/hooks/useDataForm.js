import { useState } from 'react'

export const useDataForm = (datosIniciales) => {

  const [formulario, setFormulario] = useState(datosIniciales);

  const handleInputChange = (e) => {     
    setFormulario({...formulario, [e.target.name]: e.target.value })
  };

  const resetForm = () => {
    setFormulario(datosIniciales);
  }
  
  return [formulario, handleInputChange, resetForm];
}
