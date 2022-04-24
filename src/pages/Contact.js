import React from 'react'
import contact from '../assets/contact.png'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className='content'>
        <h1 className='h1-contact'>Let's <span id='dot'>talk</span></h1>
        <p className='contact-p'>Type your name and e-mail and the message, we will respond as soon as possible! Thanks!</p>
        <form className='form'>
          <p className='p-contact'>First name:</p>
          <input className="input-fild"></input>
          <p className='p-contact'>Your e-mail:</p>
          <input className="input-fild"></input>
          <p className='p-contact'>Your message:</p>
          <input className="input-fild input-message"></input>
        </form>
        <button className='btn-contact'>Submit</button>
      </div>
      <img className='img' src={contact}/>
    </div>
  )
}

export default Contact