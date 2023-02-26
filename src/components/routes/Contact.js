import React from 'react';
import  { useState } from 'react';
import SendEmail from '../SendEmail/SendEmail';
import { GlobalContext } from '../utils/global.contex';
import styles from './Contact.module.css';


function Contact() {
  const {language} = GlobalContext()
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
  <main className={styles.main}>
    <form onSubmit={handleSubmit} className={styles.wpcf7Form} >
      <label htmlFor="name">{language == 'es' ?("Nombre: "):("Name: ")}</label>
      <input  placeholder={language == 'es' ?("Ingrese su nombre "):("Enter your name ")} type="text" id={styles.name} name="name" />
      
      <label htmlFor="email">{language == 'es' ?("Correo electronico : "):("Email ")}</label>
      <input placeholder={language == 'es' ?("Ingrese su correo "):("Enter your Email ")} type="email" id={styles.email} name="email" />
      
      <label htmlFor="message">{language == 'es' ?("Mensaje "):("Message")}</label>
      <textarea id={styles.message} name="message" />
      
      <button type="submit">{language == 'es' ?("Enviar"):("Submit")}</button>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </form>      
  </main>
   
);
}

export default Contact
