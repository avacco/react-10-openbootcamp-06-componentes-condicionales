import React, { useState, useRef, useEffect } from 'react';

/** Ejemplo de uso de useState, useRef y useEffect */

const Ejemplo2 = () => {
  
  // Crea dos contadores en estados distintos
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Crea una referencia con useRef y asocia una variable con un elemento del DOM del componente
  const miRef = useRef();

  // Funciones de incremento para los contadores
  function incrementar1(){
    setContador1(contador1 + 1);
  }

  function incrementar2(){
    setContador2(contador2 + 1);
  }

  // Cada vez que haya un cambio en el componente, se ejecuta lo que este dentro de useEffect
  useEffect(() => {
    console.log('Cambio en el estado del componente');
    console.log('Mostrando referencia a elemento del DOM');
    console.log(miRef);
  });

  // Este solo se activará cuando se cambie el contador 1
  useEffect(() => {
    console.log('Cambio en el estado del contador 1');
    console.log('Mostrando referencia a elemento del DOM');
    console.log(miRef);
  }, [contador1]);

    // Este se activará cuando se cambie el contador 1 o el contador 2
    useEffect(() => {
      console.log('Cambio en el estado del contador 1 o del contador 2');
      console.log('Mostrando referencia a elemento del DOM');
      console.log(miRef);
    }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo de useState, useRef y useEffect</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
}

export default Ejemplo2;
