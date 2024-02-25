import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="container">
        <div className="contactus-container">
            <h1>
                Contact Us
            </h1>
            <p>
                we'd love to hear from you plarse fill the form below or reachout tous with the contact details provided
            </p>
            <form action="" className='conatact-form'>
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' name='name' required/>
                </div>
                <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id='email' name='email' required/>
                </div>
                <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea  id='message' name='messgae' rows={5} required/>
                </div>
                <button type='submit' className='submitButton'>Submit</button>
                

            </form>
        </div>
    </div>
  )
}

export default ContactUs