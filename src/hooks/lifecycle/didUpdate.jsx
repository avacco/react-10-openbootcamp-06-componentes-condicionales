/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
  
  componentDidUpdate() {
    console.log("Comportamiento cuando el componente recive nuevas props o cambios en su estado privado")
  }
  
  render() {
    return (
      <div>
        <h1>Did Update</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {

  useEffect(() => {
    console.log("Comportamiento cuando el componente recibe nuevas props o cambio en su estado privado")
  },); // Sin corchetes se ejecuta todas las veces

  return (
    <div>
      <h1>Did Update</h1>
    </div>
  );
}



