import React, { useState } from 'react';

/**
 * Componente que va a contener un formulario para autenticación de usuarios
 */

const RegisterForm = () => {

  const initialCredentials = [
    {
      user: '',
      name: '',
      email: '',
      password: ''
    }
  ];

  const [credentials, setCredentials] = useState(initialCredentials);
  

  return (
    <div>
      
    </div>
  );
}

export default RegisterForms;
