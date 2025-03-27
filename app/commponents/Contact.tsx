"use client"

import React, { useState, useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';
import style from "./Contact.module.scss";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { name, email, message };

    try {
      const res = await fetch('http://myproject.local/backend/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setResponse(result.message);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while submitting the form.');
    }
  };

//   useEffect(() => {
//     ScrollReveal().reveal('.reveal', {
//       delay: 300,
//       duration: 1000,
//       distance: '300px',
//       easing: 'ease-in-out',
//     })
//   },[])

  return (
    <section className={style.ContactArea}>     
          <div className={style.AllheadContact}> 
              <h1 className={style.ContactMY}>Kontaktujte nás</h1>
              <p className={style.ContactWhen}>Po-So 7-20 hod.</p>
              <p className={style.ContactNumber}>Tel: +420 774 579 768</p>
             
          </div>
           
         <form onSubmit={handleSubmit} className={style.ContactForm}>
         <div className={style.ContactYorNameAll}>
         <p className={style.ContactYorName}>Jméno</p>
         <input
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder=''
          className={style.ContactYorNameMessAemail}
          required 
         />
         </div>     
         <br />
         <div className={style.ContactEmailAll}>
         <p className={style.ContactEmail}>Email</p>
         <input
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='' 
          className={style.ContactYorNameMessAemail}
          required 
         />
         </div> 
         <br />
         <div className={style.ContactMessageAll}>
         <p className={style.ContactmessageDes}>Napište nám</p>
         <textarea
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder='' 
          className={style.Contactmessage}
          required 
         />
         </div >     
         <div className={style.ContactbuttonPostbox}>
         <button type="submit" className={style.ContactbuttonPost}>
          Odeslat
         </button>

          </div>  
         
         
         




      </form>
      
      {response && <p>{response}</p>}
    </section>
  );
};

export default ContactForm;
