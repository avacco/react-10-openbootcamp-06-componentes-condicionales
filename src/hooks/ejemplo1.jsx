import React, { useState } from 'react';
/** Ejemplo de uso de useState */
const Ejemplo1 = () => {

  // Valor inicial para contador
  const valorInicial = 0;

  // Valor inicial para persona
  const personaInicial = {
    nombre: 'Andres',
    correo: 'correo@123.com'
  }

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  // Actualiza el estado del contador
  function incrementarContador() {
    setContador(contador+1);
  }

  function actualizarPersona(nombre){
    setPersona(
      {
        nombre: 'Pedro',
        correo: '123@correo.com'
      }
    )
  }


  return (
    <div>
      <h1>Ejemplo de useState()</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona:</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Correo: {persona.correo}</h3>
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  );
}

export default Ejemplo1;
