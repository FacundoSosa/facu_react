import React, { useRef } from 'react'
import TextArea from './TextArea'
import Input from './Input'
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
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
            );
        form.reset()
    }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <Input 
        labelText="Nombre"
        inputName="name"
        inputType="text"
      />
      <Input 
        labelText="Telefono"
        inputName="number"
        inputType="text"
      />
      <Input 
        labelText="E-mail"
        inputName="email"
        inputType="email"
      />
      <TextArea 
        labelText="Dejá tu mensaje"
        textAreaName="message"
        textAreaRows={8}
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form
