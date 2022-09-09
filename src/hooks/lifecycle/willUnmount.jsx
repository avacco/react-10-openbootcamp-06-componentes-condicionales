/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo del uso de hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component } from 'react';

export class WillUnmount extends Component {

  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }

  render() {
    return (
      <div>
        <h1>Will Unmount</h1>
      </div>
    );
  }
}


export const WillUnmount = () => {

  useEffect(() => {
    /////////////////////
    // Aqui no va nada //
    /////////////////////
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, [input]);

  return (
    <div>
      <h1>Will Unmount</h1>
    </div>
  );
}

