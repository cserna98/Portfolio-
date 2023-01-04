import React from 'react';
import  { useState } from 'react';
import SendEmail from '../SendEmail/SendEmail';



function Contact() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState({});

  const handleSendEmail = SendEmail();


  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }; 
    setData(formData) ;  
    

    // Enviar formData a tu API o base de datos aquí
    // ...

    // Muestra un mensaje de éxito o error al usuario
    setMessage('¡Mensaje enviado con éxito!');
    setError('');


    handleSendEmail(formData);    
  }

    
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>s
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="message">Mensaje:</label>
      <textarea id="message" name="message" />
      <br />
      <button type="submit">Enviar</button>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      </form>      
    </div>
   
);
}

export default Contact
