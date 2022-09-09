import React from 'react';

/** Ejemplo para entender el uso de props.children */

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>Ejemplo de props.children</h1>
      <h2>
        Nombre: { props.nombre }
      </h2>
      { props.children }
    </div>
  );
}

export default Ejemplo4;
