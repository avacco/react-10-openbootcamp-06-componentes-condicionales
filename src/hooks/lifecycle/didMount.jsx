import React, { Component } from 'react';

/**
 * Ejemplo de uso del metodo de ciclo de vida en componente clase
 * y el hook de ciclo de vida 
 */

export class DidMount extends Component {

  componentDidMount() {
    console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)")
  }

  render() {
    return (
      <div>
        <h1>Did Mount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {

  useEffect(() => {
    console.log("Comportamiento antes deq ue el componente sea añadido al DO (renderice)")
  }, []);

  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
}

