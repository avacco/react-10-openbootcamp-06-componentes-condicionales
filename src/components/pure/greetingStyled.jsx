import React, { useState } from 'react';

// Estilos en constantes

// Para usuario logeado
const loggedStyle = {
  color: 'white'
}

// Para usuario no logeado
const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold' // cambia los - por camelCase
}


const GreetingStyled = (props) => {

  // Genera un estado para el componente para controlar si el usuario esta logeado
  const [logged, setLogged] = useState(false);

  return (
    <div style={ logged ? loggedStyle : unloggedStyle }> {/* Asigna el estilo de acuerdo a las constantes antes declaradas */}
        
        {/* Mostrará uno de los siguientes parrafos dependiendo si el usuario esta logeado o no */}
        {
          logged ? 
          (<p>Hola, {props.name}</p>) :  (<p>Por favor, inicia sesión</p>) 
        }
        
        <button onClick={ () => { // Al hacer click en el boton, se ejecuta esta funcion anonima
          console.log('Boton pulsado');
          setLogged(!logged);
        } }>
          { logged ? 'Logout' : 'Login' } {/* Si el estado es true (logeado), marca Logout, si es false (unlogged), marca Login*/}  
        </button>      
    </div>
  );
}

export default GreetingStyled;
