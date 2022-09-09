import React, { useState } from 'react';

/**
 * Componente que va a contener un formulario para autenticación de usuarios
 */

const LoginForm = () => {

  const initialCredentials = [
    {
      user: '',
      password: ''
    }
  ];

  const [credentials, setCredentials] = useState(initialCredentials);


  return (
    <div>
      
    </div>
  );
}

export default LoginForm;
