import React, { useState, useContext } from 'react';

/** Ejemplo de uso de useState y useContext */


// Inicializa un estado nulo que se rellenará con los datos del contexto padre
const miContexto = React.createContext(null);


const Componente1 = () => {

  const state = useContext(miContexto);

  return (
    <div>
      <h1>
        El token es: {state.token}  
      </h1>    
      <Componente2></Componente2>
    </div>
  );
}

const Componente2 = () => {

  const state = useContext(miContexto);

  return (
    <div>
      <h2>
        La sesion es: {state.sesion}
      </h2>
    </div>
  );

}

export default function MiComponenteConContexto() {

  const estadoInicial = {
    token: '1234567',
    sesion: 1
  }

  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData(
      {
        token: 'JWT123456789',
        sesion: sessionData.sesion + 1
      }
    )
    
  }

  return (
    <div>
      <h1>Ejemplo de useState y useContext</h1>
      <miContexto.Provider value = {sessionData}>
      {/* Todo lo de aqui dentro puede leer los datos de sessionData, ademas si se actualiza, los componentes de aqui tambien lo actualizan */}
      <button onClick={actualizarSesion}>Actualizar sesion</button>
      <Componente1/>
      </miContexto.Provider>
    </div>
  )

}