import React from 'react';
import emailjs from 'emailjs-com';

 export function SendEmail() {   

   return function handleSendEmail(formData) {   
    console.log(formData) 
       
    const params = {
      to: 'criserlo98@gmail.com',
      from: formData.name,
      subject: 'Mensaje de contacto',
      text: formData.message,
      html: `<p>Mensaje de ${formData.name} (${formData.email}):</p><p>${formData.message}</p>`,
    };

    emailjs.send('service_k7ertxa', 'template_fi5wtil', params,'87IoOsTqVK9rnjFNr')
      .then(() => {
        console.log('Mensaje enviado con éxito');
      })
      .catch(error => {
        console.error(error);
      });     
  } 
  
}

export default SendEmail;

