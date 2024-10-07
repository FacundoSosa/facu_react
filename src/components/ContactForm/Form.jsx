import React, { useRef, useState } from 'react'
import TextArea from './TextArea'
import Input from './Input'
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef()
    const required = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form.current);
        form.current.reset()
        
        
        /* emailjs
            .sendForm('service_wokjpln', 'template_diq3ivy', form.current, {
                publicKey: 'pTggeyXlvywUQRo28',
            })
            .then(
                () => {
                    alert("tu email fue enviado")
                },
                (error) => {
                    alert("ERROR: tu email no pudo ser enviado " + error.text)
                },
            ); */
    }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <Input 
        labelText="Nombre"
        inputName="user_name"
        inputType="text"
        required={true}
        />
      <Input 
        labelText="Telefono"
        inputName="user_phone"
        inputType="text"
        required={true}
        />
      <Input 
        labelText="E-mail"
        inputName="user_email"
        inputType="email"
        required={false}
        />
      <TextArea 
        labelText="Dejá tu mensaje"
        textAreaName="user_message"
        textAreaRows={8}
        required={false}
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form
